/***
 *
 * AAT GulpJS file v.0.6
 *
 * @author : Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @type {*|exports|module.exports}
 *
 */

'use strict';

// Include Gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsdoc = require('gulp-jsdoc3');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var Server = require('karma').Server;
var addStream = require('add-stream');
var angularTemplateCache = require('gulp-angular-templatecache');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var sourcemaps = require('gulp-sourcemaps');
var gzip = require('gulp-gzip');
var protractor = require('gulp-protractor');

// Build Destination
var dest = 'build';

// Vendor JS files
var vendorJsFiles = [
  'src/client/app/bower_components/angular/angular.js',
  'src/client/app/bower_components/angular-route/angular-route.js',
  'src/client/app/bower_components/angular-animate/angular-animate.js',
  'src/client/app/bower_components/angular-sanitize/angular-sanitize.js',
  'src/client/app/bower_components/angular-jwt/dist/angular-jwt.js',
  'src/client/app/bower_components/a0-angular-storage/dist/angular-storage.js',
  'src/client/app/bower_components/angular-bootstrap/ui-bootstrap.js',
  'src/client/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'src/client/app/bower_components/angular-socialshare/dist/angular-socialshare.js',

  'src/client/app/bower_components/api-check/dist/api-check.js',
  'src/client/app/bower_components/angular-formly/dist/formly.js',
  'src/client/app/bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',

  //'app/bower_components/slick-carousel/slick/slick.js',
  'src/client/app/bower_components/ngprogress/build/ngprogress.js',

  'src/client/app/bower_components/jquery/dist/jquery.js',
  'src/client/app/bower_components/slick-carousel/slick/slick.js',
  'src/client/app/bower_components/angular-slick/dist/slick.js'

];

// Source JS files
var customJsFiles = [

  //SHARED
  'src/client/app/shared/shared.js',

  //'src/client/app/shared/directives/component/component.js',
  //
  'src/client/app/shared/directives/mobile-menu/mobile-menu.js',
  //'src/client/app/shared/directives/search-bar/search-bar.js',
  //'src/client/app/shared/meta/meta.js',

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
  //'src/client/app/shared/directives/title/title.js',
  //
  'src/client/app/shared/directives/404/404.js',

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

  //SERVICE
  'src/client/app/services/menu-service.js',
  'src/client/app/services/node-service.js',
  'src/client/app/services/news-service.js',

  // MAIN
  'src/client/app/app.js'
];

var sourceJsFiles = vendorJsFiles.concat(customJsFiles);

// Source SCSS files
var sassFiles = [
  '!src/client/app/sass/**/_*.scss',
  'src/client/app/sass/app.scss',
  'src/client/app/components/**/*.scss'
];

// Compile CSS from SCSS files
gulp.task('css', function() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.write('.map'))
    .pipe(concat('build.css'))
     .pipe(rename({suffix: '.min'}))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(dest + '/css'));
});

// Concatenate/Uglify JS Files
gulp.task('scripts', ['css'], function() {
  return gulp
    .src(sourceJsFiles)
    //.pipe(sourcemaps.write('.map'))
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('build.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(dest + '/js'));

});

// Linting
gulp.task('lint', [], function() {
  return gulp
    .src(customJsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default', {verbose: true}));
});

// Code styling
gulp.task('style', ['scripts', 'css', 'docs', 'lint'], function() {
  return gulp
    .src(customJsFiles)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

// HTML
gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare: true
  };
  return gulp
    .src('./app/index.html')
    //.pipe(minifyHTML(opts))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./build/'));
});


/// Documentation (JSDoc)
gulp.task('docs', ['scripts'], function(callback) {
  gulp
    .src(
      ['README.md'].concat(customJsFiles)
      , {read: false})
    .pipe(jsdoc(callback));
});


gulp.task('fontello', function() {
  return gulp.src('./app/fontello.config.json')
    .pipe(fontello())
    .pipe(print())
    .pipe(gulp.dest('./build/'));
});

// Angular Template Cache
function prepareTemplates() {
  return gulp
    .src([
      './src/client/app/**/*.tpl.html'
    ])
    .pipe(angularTemplateCache());
}


// WATCHERS
gulp.task('watch', function() {

  gulp.watch([
      './src/client/app/sass/**/*.scss',
      './src/client/app/components/**/*.scss',
      './src/client/app/shared/directives/**/*.scss'
    ],
    ['css']
  );

  gulp.watch([
    './src/client/app/components/**/*.js',
    './src/client/app/shared/**/*.js',
    './src/client/app/services/**/*.js',
    './src/client/app/app.js'
  ], ['lint', 'style', 'docs', 'scripts']);

  gulp.watch('./src/client/app/**/*.html', ['lint', 'style', 'docs', 'scripts']);

  gulp.watch(['./src/client/app/index.html'], ['html']);

});

// Unit Testing
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


//e2e testing
gulp.task('webdriver_update', protractor.webdriver_update);

// this run following task will keep running indefinitely.
gulp.task('webdriver_standalone', ['webdriver_update'], protractor.webdriver_standalone);

gulp.task('e2e', ['webdriver_update'], function(done) {
  gulp.src(['src/test/**/*.spec.js'])
    .pipe(protractor.protractor({
      configFile: 'src/test/protractor.conf.js'
    }), done());
});

// Default
gulp.task('default', [
  'scripts', 'css', 'lint', 'style', 'docs', 'html', 'watch'
]);

// @todo : deployment task
