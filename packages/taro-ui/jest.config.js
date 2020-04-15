module.exports = {
  verbose: true,
  rootDir: __dirname,
  testMatch: ['<rootDir>/test/**/*.test.js', '<rootDir>/test/**/test.js'],
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      {
        rootMode: 'upward'
      }
    ]
  },
  moduleNameMapper: {
    '@tarojs/components': '<rootDir>/../../node_modules/@tarojs/components/h5/react'
  }
}
