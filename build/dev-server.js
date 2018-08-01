const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const ora = require('ora')

const { getProjectRoot, prepareUrls, formatTime } = require('./util')
const conf = require('./conf')
const webpackBaseConf = require('./webpack.base.config')
const webpackDevConf = require('./webpack.dev.config')
const formatWebpackMessage = require('./format_webpack_message')
const open = require('./open')

const serveSpinner = ora('Starting build...').start()

const projectRoot = getProjectRoot()
const host = '0.0.0.0'
const port = 8002
const protocol = 'http'
const urls = prepareUrls(protocol, host, port)
const webpackConf = webpackMerge(webpackBaseConf, webpackDevConf)
for (const key in webpackConf.entry) {
  const entryItem = webpackConf.entry[key]
  if (Array.isArray(entryItem)) {
    entryItem.unshift(require.resolve('webpack/hot/dev-server'))
    entryItem.unshift(`${require.resolve('webpack-dev-server/client')}?/`)
  } else {
    webpackConf.entry[key] = [
      `${require.resolve('webpack-dev-server/client')}?/`,
      require.resolve('webpack/hot/dev-server'),
      entryItem
    ]
  }
}
const compiler = webpack(webpackConf)
const webpackDevServerConf = require('./devServer.conf')({
  publicPath: '/',
  contentBase: path.join(projectRoot, conf.output),
  protocol,
  host,
  publicUrl: urls.lanUrlForConfig
})

const server = new WebpackDevServer(compiler, webpackDevServerConf)
server.listen(port, host, err => {
  if (err) {
    return console.log(err)
  }
})
let isFirstCompile = true
compiler.plugin('invalid', filepath => {
  console.log(chalk.grey(`[${formatTime()}]Modified: ${filepath}`))
  serveSpinner.text = 'Compiling...🤡~'
  serveSpinner.render()
})
compiler.plugin('done', stats => {
  const { errors, warnings } = formatWebpackMessage(stats.toJson({}, true))
  const isSuccess = !errors.length && !warnings.length
  if (isSuccess) {
    serveSpinner.succeed(chalk.green('Compile successfully!\n'))
  }
  if (errors.length) {
    errors.splice(1)
    serveSpinner.fail(chalk.red('Compile failed!\n'))
    console.log(errors.join('\n\n'))
    console.log()
  }
  if (isFirstCompile) {
    console.log(chalk.cyan(`> Listening at ${urls.lanUrlForTerminal}`))
    console.log(chalk.cyan(`> Listening at ${urls.localUrlForBrowser}`))
    console.log()
    open(urls.localUrlForBrowser)
    isFirstCompile = false
  }
})
