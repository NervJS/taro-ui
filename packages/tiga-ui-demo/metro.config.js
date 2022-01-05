const fs = require('fs')
const path = require('path')
const blacklist = require('metro-config/src/defaults/exclusionList')
const escape = require('escape-string-regexp')

const tigaUI = path.resolve(__dirname, '../tiga-ui')
const pak = JSON.parse(
  fs.readFileSync(path.join(tigaUI, 'package.json'), 'utf8')
)

const modules = [
  '@babel/runtime',
  'react-native',
  '@tarojs/components-rn',
  '@tarojs/taro-rn',
  'react-native-svg',
  'react-native-root-siblings',
  ...Object.keys({
    ...pak.dependencies,
    ...pak.peerDependencies
  })
]

module.exports = {
  // maxWorkers: 1,
  // resetCache: true,
  watchFolders: [tigaUI, __dirname],
  resolver: {
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name)
      return acc
    }, {}),
    blacklistRE: blacklist([
      new RegExp(`^${escape(path.join(tigaUI, 'node_modules'))}\\/.*$`)
    ])
  }
}
