/***
 *
 * AAT GulpJS file v.1.7
 *
 * @author : Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @type {*|exports|module.exports}
 *
 */

'use strict';

// Base folder
var base = './../';

// Build Destination
var dest = '../deploy/assets/';

// Vendor JS files
var vendorJsFiles = require('./includes/vendor');

// Source JS files
var customJsFiles = require('./includes/source');

var sourceJsFiles = vendorJsFiles.concat(customJsFiles);

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
var clean = require('gulp-clean');
var protractor = require('gulp-protractor');


// Source SCSS files
var sassFiles = [
  'src/client/sass/app.scss',
  'src/client/app/**/*.scss'
];

// Compile CSS from SCSS files
gulp.task('css', function() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.write('.map'))
    .pipe(concat('build.css'))
    //     .pipe(rename({suffix: '.min'}))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(dest + 'css'));
});

// Concatenate/Uglify JS Files
gulp.task('scripts', ['css'], function() {
  return gulp
    .src(sourceJsFiles, {cwd: base})
    //.pipe(sourcemaps.write('.map'))
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('build.js'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(gulp.dest(dest + 'js'));

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


// Documentation (JSDoc)
gulp.task('docs', ['scripts'], function() {
  return gulp
    .src(sourceJsFiles, {cwd: base, read: false})
    .pipe(jsdoc(require('./jsdoc.json')));
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
