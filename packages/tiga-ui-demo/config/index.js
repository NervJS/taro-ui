const path = require('path')

const config = {
  projectName: 'taro-demo',
  date: '2022-1-5',
  designWidth: 375,
  deviceRatio: {
    375: 4 / 2,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  alias: {
    react: path.resolve(__dirname, '../node_modules/react')
  },
  mini: {
    debugReact: true,
    postcss: {
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      pxtransform: {
        enable: false,
        config: {}
      },
      './crossPlatformComments': {
        enable: true,
        config: {
          platform: 'weapp'
        }
      }
    }
  },
  rn: {
    resolve: {
      include: ['tiga-ui']
    },
    enableSvgTransform: true,
    postcss: {
      pxtransform: {
        enable: false
      },
      scalable: false,
      './crossPlatformComments': {
        enable: true,
        config: {
          platform: 'rn'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
