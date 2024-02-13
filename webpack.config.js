const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: [
    './client/index.js'
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
      //had to add id='root' into index.html, but webpack plug in HTML wasn't creating it so to do that we had to make an index.html in client folder to make the HTMLplugin make a template of it with the root id when we build the webpack
      template: './client/index.html',
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