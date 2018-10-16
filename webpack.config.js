const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV == 'test') require('dotenv').config({ path: '.env.test' });
if (process.env.NODE_ENV == 'development') require('dotenv').config({ path: '.env.development' });

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    entry: ['babel-polyfill', './src/app.js'],
    // entry: './playground/destructuring.js',
    // entry: './playground/redux-101.js',
    // entry: './playground/redux-102.js',
    // entry: './playground/redux-103.js',
    // entry: './playground/redux-expensify.js',
    // entry: './playground/hoc.js',
    // entry: './playground/promises.js',

    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },

    // loaders
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, // files ending in .js
        exclude: /node_modules/
      }, {
        use: [
          // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        test: /\.s?css$/, // files ending in .css or .scss
        // exclude: /node_modules/
      }]
    },

    // Plugins to be used
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABSE_URL': JSON.stringify(process.env.FIREBASE_DATABSE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],

    // Dev Tools
    // devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map': 'inline-source-map', // work-around for source map webpack bug

    // Dev Server
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      port: 7000
    }
  }
}
