/***
 *
 * AAT GulpJS file v.1.7
 *
 * @author : Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @type {*|exports|module.exports}
 *
 */

// Base folder
var base = './../';

// Build Destination
var dest = '../deploy/assets/';

// Vendor JS files
var vendorJsFiles = require('./includes/vendor');

// Source JS files
var customJsFiles = require('./includes/source');

// Sass files
var sassFiles = [
  '../src/client/sass/app.scss',
  '../src/client/app/**/*.scss'
];
//HTML files
var htmlFiles = ['../src/client/app/**/*.html'];

var sourceJsFiles = vendorJsFiles.concat(customJsFiles);

// Include Gulp
var gulp = require('gulp');
// include all Gulp Plugin
var plugins = require('gulp-load-plugins')();
//Load Gulp tasks from gulp-tasks folder
//// Include Plugins
//var Server = require('karma').Server;

require('gulp-task-loader')(
  {
    plugins: plugins,
    customJsFiles: customJsFiles,
    sourceJsFiles: sourceJsFiles,
    sassFiles: sassFiles,
    dest: dest,
    base: base
  }
);




// WATCHERS
gulp.watch(sassFiles, ['css']);
gulp.watch(customJsFiles, ['lint', 'style', 'docs', 'scripts']);
gulp.watch(htmlFiles, ['lint', 'style', 'docs', 'scripts']);
gulp.watch(['../src/client/app/index.html'], ['html']);















