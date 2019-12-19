/* eslint-disable import/no-commonjs */
const apis = require('@tarojs/taro-h5/dist/taroApis')

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        spec: true,
        useBuiltIns: false
      }
    ],
    '@babel/typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'React.createElement'
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
      }
    ],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['babel-plugin-transform-taroapi', {
      apis,
      packageName: '@tarojs/taro-h5'
    }]
  ]
}
