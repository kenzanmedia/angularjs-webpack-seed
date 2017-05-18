const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;
const browser = isProductionBuild ? 'PhantomJS' : 'Chrome';
const webpackConfig = require('./webpack.config.common');

// TODO issues with karma and CommonChunksPlugin
// https://github.com/webpack/karma-webpack/issues/24
webpackConfig.plugins[webpackConfig.plugins.length - 1] = function() {};

// dont fail on eslint errors while developing
webpackConfig.module.rules[0].use[1].options.failOnError = isProductionBuild;

module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      { pattern: './node_modules/phantomjs-polyfill-find/find-polyfill.js', watched: false },
      // included here to ensure proper loading order and availablity of jquery + angular + mocks to Karma
      { pattern: './node_modules/jquery/dist/jquery.js', watched: false },
      { pattern: './node_modules/angular/angular.js', watched: false },
      { pattern: './node_modules/angular-mocks/angular-mocks.js', watched: false },
      { pattern: './src/**/*.spec.js', watched: true }
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap', 'coverage']
    },

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    port: 9876,
    browserDisconnectTolerance: 1,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: [browser],
    singleRun: shouldSingleRun,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/',
      outputFile: 'test-results/test-results.xml',
      suite: 'seed-webapp',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'cobertura',
      dir: './reports',
      subdir: 'test-coverage/phantomjs',
      file: 'coverage.xml'
    }
  });

};