const pack = require('./package.json')

module.exports = {
  verbose: true,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  testMatch: [
    `<rootDir>/packages/${pack.name}/test/**/*.test.js`,
    `<rootDir>/packages/${pack.name}/test/**/test.js`
  ],
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      {
        rootMode: 'upward'
      }
    ]
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@tarojs/api|@tarojs/components)/)'
  ],
  moduleNameMapper: {
    '@tarojs/components': '<rootDir>/node_modules/@tarojs/components/h5/react'
  },
  coverageDirectory: `<rootDir>/packages/${pack.name}/coverage`
}
