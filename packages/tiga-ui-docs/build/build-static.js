const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// packages/taro-ui-docs/dist/h5
fs.emptyDirSync(path.resolve(__dirname, '../dist/h5'))

fs.copy(
  // packages/taro-ui-demo/dist
  path.resolve(__dirname, '../../taro-ui-demo/dist'),
  path.resolve(__dirname, '../dist/h5')
)
  .then(() => {
    spinner.stop()
  })
  .catch(err => console.error(err))
