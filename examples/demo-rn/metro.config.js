const { mergeConfig } = require('metro-config')
const { getMetroConfig } = require('@tarojs/rn-supporter')
const fs = require('fs')
const path = require('path')
const escape = require('escape-string-regexp')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const workspaceRoot = path.resolve(__dirname, '../..')
const taroUI = path.resolve(workspaceRoot, 'packages/taro-ui')
const pak = JSON.parse(
  fs.readFileSync(path.join(taroUI, 'package.json'), 'utf8')
)

const modules = [
  '@babel/runtime',
  'metro-runtime',
  'react-native',
  '@tarojs/components-rn',
  '@tarojs/taro-rn',
  '@tarojs/runtime-rn',
  '@tarojs/rn-supporter',
  '@tarojs/rn-runner',
  'react-native-svg',
  'react-native-root-siblings',
  ...Object.keys({
    ...pak.dependencies,
    ...pak.peerDependencies
  })
]

function resolveModulePath(name) {
  try {
    const pkgJson = require.resolve(path.join(name, 'package.json'))
    return path.dirname(pkgJson)
  } catch {
    return null
  }
}

const extraNodeModules = modules.reduce((acc, name) => {
  const resolved = resolveModulePath(name)
  if (resolved) {
    acc[name] = resolved
  }
  return acc
}, {})
// extraNodeModules maps a name to a directory of files, not a package root.
// Point at rn/ so Metro finds index.ts instead of looking for package.json#main.
extraNodeModules['taro-ui'] = path.join(taroUI, 'rn')

// Collect unique watch folders from resolved modules (for pnpm virtual store)
const watchFoldersSet = new Set([taroUI, __dirname, workspaceRoot])
const pnpmStore = path.join(workspaceRoot, 'node_modules/.pnpm')
if (fs.existsSync(pnpmStore)) {
  watchFoldersSet.add(pnpmStore)
}
Object.values(extraNodeModules).forEach(p => {
  // Add the package dir and its parent node_modules so Metro sees siblings
  watchFoldersSet.add(p)
  const parentNodeModules = path.resolve(p, '../..')
  if (fs.existsSync(parentNodeModules)) {
    watchFoldersSet.add(parentNodeModules)
  }
})

function resolveTaroUI(moduleName) {
  if (moduleName !== 'taro-ui' && !moduleName.startsWith('taro-ui/')) {
    return null
  }
  const subpath =
    moduleName === 'taro-ui'
      ? 'index'
      : moduleName.replace(/^taro-ui\/(rn\/|dist\/)?/, '')
  const candidates = [
    path.join(taroUI, 'rn', subpath),
    path.join(taroUI, 'rn', subpath + '.ts'),
    path.join(taroUI, 'rn', subpath + '.tsx'),
    path.join(taroUI, 'rn', subpath, 'index.ts'),
    path.join(taroUI, 'rn', subpath, 'index.tsx')
  ]
  for (const filePath of candidates) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return { type: 'sourceFile', filePath }
    }
  }
  return null
}

module.exports = (async () => {
  const taroMetro = await getMetroConfig()
  const taroResolve = taroMetro.resolver && taroMetro.resolver.resolveRequest
  return mergeConfig(taroMetro, {
    // Metro v0.73 worker threads hang on Node 20
    maxWorkers: 1,
    transformer: {
      // Keep an explicit transformer object for Metro 0.73 + Node 20.
      // Skip Taro's babel-plugin-global-define for third-party node_modules:
      // it rewrites `function define()` in regenerator-runtime into a BooleanLiteral.
      babelTransformerPath: require.resolve('./rn-babel-transformer.js')
    },
    watchFolders: Array.from(watchFoldersSet),
    resolver: {
      extraNodeModules,
      blockList: exclusionList([
        new RegExp(`^${escape(path.join(taroUI, 'node_modules'))}\\/.*$`)
      ]),
      resolveRequest: (context, moduleName, platform, ...rest) => {
        const mapped = resolveTaroUI(moduleName)
        if (mapped) return mapped
        if (typeof taroResolve === 'function') {
          return taroResolve(context, moduleName, platform, ...rest)
        }
        return context.resolveRequest(context, moduleName, platform)
      }
    }
  })
})()
