/**
 *
 * KARMA CONF
 *
 * @param config
 */

module.exports = function(config) {

  var files = require('./includes/vendor.js');

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // VENDOR CODE
      'src/client/bower_components/angular/angular.js',

      'src/client/bower_components/angular-mocks/angular-mocks.js',
      'src/client/bower_components/angular-route/angular-route.js',
      'src/client/bower_components/angular-aria/angular-aria.js',
      'src/client/bower_components/angular-animate/angular-animate.js',
      'src/client/bower_components/angular-sanitize/angular-sanitize.js',
      'src/client/bower_components/angular-jwt/dist/angular-jwt.js',
      'src/client/bower_components/a0-angular-storage/dist/angular-storage.js',
      'src/client/bower_components/angular-bootstrap/ui-bootstrap.js',
      'src/client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'src/client/bower_components/angular-socialshare/dist/angular-socialshare.js',

      'src/client/bower_components/api-check/dist/api-check.js',
      'src/client/bower_components/angular-formly/dist/formly.js',
      'src/client/bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',

      //'app/bower_components/slick-carousel/slick/slick.js',
      'src/client/bower_components/ngprogress/build/ngprogress.js',

      'src/client/bower_components/jquery/dist/jquery.js',
      'src/client/bower_components/slick-carousel/slick/slick.js',
      'src/client/bower_components/angular-slick/dist/slick.js',
      'src/client/app/app.js',
      'src/client/app/app.config.js',

      //SERVICE
      'src/client/app/services/menu-service.js',
      'src/client/app/services/node-service.js',
      'src/client/app/services/news-service.js',

      // COMPONENTS
      'src/client/app/components/myaat/myaat.js',
      'src/client/app/components/node/node.js',
      'src/client/app/components/header/header.js',
      'src/client/app/components/frontpage/frontpage.js',
      'src/client/app/components/news/news.js',
      'src/client/app/components/static-pages/static-pages.js',
      'src/client/app/components/qualifications/qualifications.js',
      'src/client/app/components/employers/employers.js',
      'src/client/app/components/deliver/deliver.js',
      'src/client/app/components/membership/membership.js',
      'src/client/app/components/about/about.js',
      'src/client/app/components/meta/meta.js',

      //SHARED
      'src/client/app/shared/shared.js',

      //'src/client/app/shared/directives/component/component.js',
      //
      'src/client/app/shared/directives/mobile-menu/mobile-menu.js',
      //'src/client/app/shared/directives/search-bar/search-bar.js',


      'src/client/app/shared/directives/menu/menu.js',

      //'src/client/app/shared/directives/landing-page/landing-page.js',

      'src/client/app/shared/directives/hero/hero.js',
      //'src/client/app/shared/directives/steps/steps.js',
      //'src/client/app/shared/directives/campaign-cta/campaign-cta.js',
      //'src/client/app/shared/directives/secondary-cta/secondary-cta.js',
      //'src/client/app/shared/directives/html/html.js',
      'src/client/app/shared/directives/social/social.js',
      //'src/client/app/shared/directives/image/image.js',
      //'src/client/app/shared/directives/module/module.js',
      'src/client/app/shared/directives/slideshow/slideshow.js',
      'src/client/app/shared/directives/spotlights/spotlights.js',
      'src/client/app/shared/directives/spinner/spinner.js',
      //'src/client/app/shared/directives/title/title.js',
      //
      'src/client/app/shared/directives/404/404.js',
      'build/tmp/js/templates.js',
      'src/client/app/**/*spec.js'
    ],

    // list of files to exclude
    exclude: [
      '*.spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/client/app/**/!(*spec).js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'dots', 'coverage', 'junit'],

    junitReporter: {
      suite: 'unit',
      outputFile: 'build/test/logsjunit.xml'
    },

    coverageReporter: {
      dir: 'build/test/logs/coverage',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'cobertura', subdir: 'xml'}
      ]
    },
    plugins: [
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage',
      'karma-phantomjs2-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],

    // web server port
    port: 9999,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS2'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    //concurrency: Infinity,
    //
    //captureTimeout: 60000,
    //
    //browserDisconnectTimeout: 10000,
    //browserDisconnectTolerance: 1,
    //browserNoActivityTimeout: 60000,

  });
};
