const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist'
       },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'}),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Output Management'
    })
       ],
  module: {
         rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          },  
           { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
           }
         ]
       },
    };