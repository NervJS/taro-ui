const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// packages/taro-ui-docs/dist/h5
fs.emptyDirSync(path.resolve(__dirname, '../dist/h5'))

// 轮询
function ensueCopy() {
  const result = fs.existsSync(
    path.resolve(__dirname, '../../tiga-ui-demo/dist/index.html')
  )
  console.log('tiga-ui-demo/dist 文件拷贝中', result)
  if (result) {
    fs.copy(
      path.resolve(__dirname, '../../tiga-ui-demo/dist'),
      path.resolve(__dirname, '../dist/h5')
    )
      .then(() => {
        spinner.stop()
        console.log('tiga-ui-demo/dist 文件拷贝完毕')
      })
      .catch(err => console.error(err))
  } else {
    setTimeout(() => {
      ensueCopy()
    }, 1000)
  }
}

ensueCopy()
