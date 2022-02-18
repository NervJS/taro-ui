const postcss = require('postcss')

module.exports = postcss.plugin(
  'postcss-crossplatformcomments',
  function (options = {}) {
    return function (css) {
      for (let i = 0; i < css.nodes.length; i++) {
        if (css.nodes[i].type === 'comment') {
          if (css.nodes[i].text === 'postcss-pxtransform disable') {
            return
          } else {
            break
          }
        }
      }

      // delete code between comment in RN
      if (options.platform === 'rn') {
        css.walkComments(comment => {
          if (comment.text === 'postcss-pxtransform rn eject enable') {
            let next = comment.next()
            while (next) {
              if (
                next.type === 'comment' &&
                next.text === 'postcss-pxtransform rn eject disable'
              ) {
                break
              }
              const temp = next.next()
              next.remove()
              next = temp
            }
          }
        })
      }

      /*  #ifdef  %PLATFORM%  */
      // 平台特有样式
      /*  #endif  */
      css.walkComments(comment => {
        const wordList = comment.text.split(' ')
        // 指定平台保留
        if (wordList.indexOf('#ifdef') > -1) {
          // 非指定平台
          if (wordList.indexOf(options.platform) === -1) {
            let next = comment.next()
            while (next) {
              if (next.type === 'comment' && next.text.trim() === '#endif') {
                break
              }
              const temp = next.next()
              next.remove()
              next = temp
            }
          }
        }
      })

      /*  #ifndef  %PLATFORM%  */
      // 平台特有样式
      /*  #endif  */
      css.walkComments(comment => {
        const wordList = comment.text.split(' ')
        // 指定平台剔除
        if (wordList.indexOf('#ifndef') > -1) {
          // 指定平台
          if (wordList.indexOf(options.platform) > -1) {
            let next = comment.next()
            while (next) {
              if (next.type === 'comment' && next.text.trim() === '#endif') {
                break
              }
              const temp = next.next()
              next.remove()
              next = temp
            }
          }
        }
      })
    }
  }
)
