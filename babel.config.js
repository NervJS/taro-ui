/* eslint-disable import/no-commonjs */
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        spec: true,
        useBuiltIns: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'Nerv.createElement'
      }
    ],
    ['@babel/plugin-proposal-object-rest-spread']
  ]
}
