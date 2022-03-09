const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')

const conf = require('./conf')
const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()

module.exports = {
  mode: 'none',
  output: {
    path: path.resolve(projectRoot, conf.output),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
    publicPath: '//pages.anjukestatic.com/fe/hbg_ajk_tiga_ui/'
  },
  resolve: {
    mainFields: ['main']
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        `${path.resolve(projectRoot, conf.output)}/*`,
        `!${path.resolve(projectRoot, conf.output)}/lib/*`
      ]
    }),
    new webpack.DefinePlugin({
      BASE_NAME: `'/tiga-ui'`
    }),
    new FaviconWebpackPlugin({
      logo: path.resolve(projectRoot, 'assets/favicon.png'),
      prefix: 'favicons/'
    })
  ]
}
