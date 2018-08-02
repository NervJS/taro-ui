const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const conf = require('./conf')
const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()

module.exports = {
  output: {
    path: path.resolve(projectRoot, conf.output),
    filename: 'js/[name].js',
    chunkFilename: 'chunk/[name].chunk.js',
    publicPath: './'
  },
  resolve: {
    mainFields: ['main']
  },
  plugins: [
    new CleanWebpackPlugin(path.join(projectRoot, 'siteoutput'), {
      verbose: false,
      exclude: ['lib']
    }),
    new webpack.DefinePlugin({
      BASE_NAME: `'/taro-ui'`
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: false,
        keep_fnames: true,
        properties: false,
        keep_quoted: true
      },
      compress: {
        warnings: false,
        screw_ie8: false,
        properties: false
      },
      output: {
        keep_quoted_props: true
      },
      comments: false,
      sourceMap: true
    })
  ]
}
