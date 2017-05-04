const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var'
  },

  devServer: {
    contentBase: './build',
    compress: true,
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api/*': {
        target: 'http://<your-domain>',
        secure: false,
        changeOrigin: true
      }
    }
  }

});