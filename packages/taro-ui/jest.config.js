module.exports = {
  verbose: true,
  rootDir: __dirname,
  testMatch: ['<rootDir>/test/**/*.test.js', '<rootDir>/test/**/test.js'],
  transform: {
    '^.+.js$': [
      'babel-jest',
      {
        rootMode: 'upward'
      }
    ]
  },
  transformIgnorePatterns: ['node_modules']
}
