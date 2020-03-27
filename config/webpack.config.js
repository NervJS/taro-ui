const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '..', 'src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'umd',
    library: 'taro-ui'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'src', 'style'),
        to: path.resolve(__dirname, '..', 'dist', 'style')
      }
    ])
  ],
  resolve: {
    alias: {
      'taro-ui': path.resolve(__dirname, '..', 'src/index.ts')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@tarojs/components': '@tarojs/components',
    '@tarojs/runtime': '@tarojs/runtime',
    '@tarojs/taro': '@tarojs/taro',
    '@tarojs/react': '@tarojs/react',
    // TODO: Taro 3 bug
    vue: 'Vue'
  }
}
