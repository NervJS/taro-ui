module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/test/**/*.test.js', '<rootDir>/test/**/test.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    weui: '<rootDir>/test/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mock__/styleMock.js'
  }
}
