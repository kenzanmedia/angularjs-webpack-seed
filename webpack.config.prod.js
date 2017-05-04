const path = require('path');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new NgAnnotatePlugin({
      add: true
    }),
    new WebpackMd5Hash(),
    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false,
      sourceMap: true
    }),
    new ExtractTextPlugin('[name].[chunkhash].style.css')
  ]

});