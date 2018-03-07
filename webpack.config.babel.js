// import fs from 'fs';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import webpack from 'webpack';
const fs= require('fs');
const path= require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const webpack= require('webpack');

const root = process.cwd();
const directories = path.resolve(root, 'src/Page');
// let entries = {};
// fs.readdirSync(directories).forEach(dir => {
//   const identifier = dir;
//   entries[identifier] = `./Page/${dir}`;
// })

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    home: './page/home/index.js'
  },
  // entry: entries,
  output: {
    // path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'about.bundle.js' // [name] will take the options in entry, ie app and about
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, 'src')}, 
      {test: /\.html$/, loader: 'html-loader'}, // loading html files
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, // css-loader to load the css, style-loader to render the css
      // {test: /\.jpg$/, use: ['file-loader']},
      {test: /\.(png|jp(e*)g)$/, use: [{
        loader: 'url-loader', 
        options: {
          name: '[name].[ext]',
          outputPath: 'test',
        }
      }]}
    ]
  },

  
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // inline: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: path.join(__dirname, 'src', 'page/home/index.html'),
      chunks: ['home'], 
      inject: 'body'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery'
    }),
  ]
};