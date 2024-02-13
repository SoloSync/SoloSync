const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
    })
  ],
  devServer: {
    port: 8080,
    static: {
      publicPath: '/dist',
      // directory: './dist'
      directory: path.join(__dirname, 'dist')
    }, 
    client: {
      logging: 'info',
    },
    proxy: {
      'api': 'http://localhost:3000',
      historyApiFallback: true, 
    },
    hot: true
  }
};

module.exports = config;