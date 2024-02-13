const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    })
  ],
  devServer: {
    static: {
      publicPath: '/',
      // directory: './dist'
      directory: path.join(__dirname, 'dist')
    }, 
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: [{
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    }],
    historyApiFallback: true, 
    hot: true,
  }
};
