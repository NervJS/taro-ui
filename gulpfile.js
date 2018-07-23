/* eslint-disable import/no-commonjs */
const glob = require('glob')
const gulp = require('gulp')
const path = require('path')
const fsExtra = require('node-fs-extra')
const gSass = require('gulp-sass')
const gClean = require('gulp-clean')
const gConcat = require('gulp-concat')

const THEME_PATH = path.join('./dist/theme')
const PATTERN = './src/{style,components}/**/*.scss'

const getSassFile = () => {
  const filesPath = glob.sync(PATTERN).reverse()
  const content = filesPath
    .map(item => {
      const realPath = path.relative(THEME_PATH, item)
      return `@import '${realPath}'; `
    })
    .join('\n')
  return new Promise((resolve, reject) => {
    const FILE_PATH = path.join(THEME_PATH, 'default.scss')
    fsExtra.outputFile(FILE_PATH, content, err => {
      if (err) {
        return reject(err)
      }
      resolve({ sucess: true })
    })
  })
}

gulp.task('theme', () => {
  getSassFile().then(() => {
    gulp.src('./src/style/theme/**').pipe(gulp.dest('./dist/theme/'))
  })
})

gulp.task('cleanTheme', () => {
  gulp
    .src('./dist/theme', {
      read: false
    })
    .pipe(gClean())
})

gulp.task('sass', () => {
  gulp
    .src(['./src/**/*.scss', '!./src/style/theme/*'])
    .pipe(
      gSass({
        outputStyle: 'compressed'
      }).on('error', gSass.logError)
    )
    .pipe(gConcat('main.css'))
    .pipe(gulp.dest('./dist/theme'))
})
