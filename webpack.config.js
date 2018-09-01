const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    entry: './src/app.js',
    // entry: './playground/destructuring.js',
    // entry: './playground/redux-101.js',
    // entry: './playground/redux-102.js',
    // entry: './playground/redux-103.js',
    // entry: './playground/redux-expensify.js',
    // entry: './playground/hoc.js',

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
      CSSExtract
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
