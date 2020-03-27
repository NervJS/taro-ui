const merge = require('webpack-merge')
const buildConfig = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = merge(buildConfig, {
  plugins: [new BundleAnalyzerPlugin()]
})
