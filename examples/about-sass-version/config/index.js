/*
 * @Descripttion: your project
 * @Author: QI
 * @Date: 2022-04-01 09:25:23
 * @LastEditors: QI
 * @LastEditTime: 2022-04-01 12:58:27
 */
import { resolve } from "path";

const config = {
  projectName: "taro3-qi-react-cli",
  date: "2022-2-16",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ['taro-plugin-compiler-optimization'], // 优化打包速度 编译速度·
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  mini: {
    webpackChain(chain, webpack) {
      if (process.env.NODE_ENV === 'production') {
        chain.optimization.minimize(true); //使体积优化到最小
        chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []); // 体积地图
        chain.merge({
          plugin: {
            install: {
              plugin: require('terser-webpack-plugin'),
              args: [{
                extractComments: true,
                test: ['common.js', 'taro.js', 'app.js', 'day.js', 'runtime.js','vendors.js'], //匹配的文件
                parallel: true,
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true, // 不改变函数名称
                }
              }]
            }
          }
        });
      };
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    esnextModules: ["taro-ui"],
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  alias: {
    "@": resolve(__dirname, "..", "src"),
    "@components": resolve(__dirname, "..", "src/components"),
    "@utils": resolve(__dirname, "..", "src/utils"),
    "@api": resolve(__dirname, "..", "src/api")
  },

};

export default function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
}
