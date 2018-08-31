const path = require('path');

module.exports = {

  entry: './src/app.js',
  // entry: './playground/destructuring.js',
  // entry: './playground/redux-101.js',
  // entry: './playground/redux-102.js',
  // entry: './playground/redux-103.js',
  // entry: './playground/redux-expensify.js',
  // entry: './playground/hoc.js',

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },

  // loaders
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // files ending in .js
      exclude: /node_modules/
    }, {
      use: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.s?css$/, // files ending in .css or .scss
    }]
  },

  // Dev Tools
  devtool: 'cheap-module-eval-source-map',

  // Dev Server
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    historyApiFallback: true,
    port: 7000
  }
}
