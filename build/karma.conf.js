// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
//     files: [
//
//       'src/client/app/bower_components/angular/angular.js',
//       'src/client/app/bower_components/angular-mocks/angular-mocks.js',
//       'src/client/app/bower_components/angular-route/angular-route.js',
//
//       'src/client/app/app.js',
//       'src/client/app/components/**/*.js',
//       'src/client/app/services/**/*.js',
//       'src/client/app/shared/**/*.js'
//
// //       'test/e2e/**/*.js',
// //       'test/unit/**/*.js'
//     ],


    files: [
      'build/js/build.js',
      'src/client/app/bower_components/angular-mocks/angular-mocks.js',
      'src/client/app/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'src/app/**/*.js': 'coverage',

//       'src/app/**/!(.spec).js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'progress', 'junit', 'coverage'],

    junitReporter: {
      outputDir: 'build/logs',
      outputFile: 'junit.xml'
    },

    coverageReporter: {
      dir: 'build/logs',
      reporters: [
        {
          type: 'html',
          dir: 'report-html/'
        },
        {
          type: 'cobertura',
          file: 'coverage.xml'
        }

      ]

    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
