/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  mini: {
    postcss: {
      // 小程序端样式引用本地资源内联
      url: {
        enable: true,
        config: {
          limit: 102400000000
        }
      }
    }
  },
  h5: {
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true,
      port: 8080
    }
  }
}
