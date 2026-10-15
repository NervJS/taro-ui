const path = require('path')
const taroTransformer = require('@tarojs/rn-supporter/dist/taroTransformer')
const metroTransformer = require('metro-react-native-babel-transformer')

const NODE_MODULES = `${path.sep}node_modules${path.sep}`

function shouldUseTaroTransformer(filename) {
  if (!filename) return true
  // Taro entry and RN runtime live under node_modules/@tarojs and must
  // keep Taro's transformer. Third-party packages must not: babel-plugin-
  // global-define rewrites `function define()` in regenerator-runtime.
  if (
    filename.includes(`${path.sep}@tarojs${path.sep}`) ||
    filename.includes(`${path.sep}taro-ui${path.sep}`) ||
    filename.includes(`${path.sep}packages${path.sep}taro-ui${path.sep}`)
  ) {
    return true
  }
  return !filename.includes(NODE_MODULES)
}

module.exports.transform = function transform(args) {
  if (!shouldUseTaroTransformer(args.filename)) {
    return metroTransformer.transform(args)
  }
  return taroTransformer.transform(args)
}

module.exports.getCacheKey = metroTransformer.getCacheKey
