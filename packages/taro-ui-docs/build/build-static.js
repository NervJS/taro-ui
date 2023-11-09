const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// packages/taro-ui-docs/dist/h5
fs.emptyDirSync(path.resolve(__dirname, '../dist/h5'))

function mergeDemoH5AndDist() {
  const demoH5Path = path.resolve(__dirname, '../../taro-ui-demo/dist')
  if (!fs.existsSync(demoH5Path)) {
    console.log('Please run `npm run build:demo` first')
    spinner.stop()
    return
  }

  const distH5Path = path.resolve(__dirname, '../dist/h5')
  const distPath = path.resolve(__dirname, '../dist')
  const files = fs.readdirSync(demoH5Path)

  const promises = []
  files.forEach(file => {
    if (file !== 'index.html') {
      promises.push(
        fs.copy(path.resolve(demoH5Path, file), path.resolve(distPath, file))
      )
    } else {
      promises.push(
        fs.copy(path.resolve(demoH5Path, file), path.resolve(distH5Path, file))
      )
    }
  })

  Promise.all(promises)
    .then(() => {
      spinner.stop()
    })
    .catch(err => {
      console.log('build static error:', err)
    })
}

mergeDemoH5AndDist()
