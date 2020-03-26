module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  mini: {
    postcss: {
      // 小程序端样式引用本地资源内联
      url: {
        enable: true,
        config: {
          limit: 2046
        }
      }
    }
  },
  h5: {
    publicPath: './'
  }
}
