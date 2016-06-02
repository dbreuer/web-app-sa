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

var sourceJsFiles = vendorJsFiles.concat(customJsFiles);

// Include Gulp
var gulp = require('gulp');

// Include Plugins
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var Server = require('karma').Server;
var addStream = require('add-stream');

// Source SCSS files
var sassFiles = [
  '../src/client/sass/app.scss',
  '../src/client/app/**/*.scss'
];

// Compile CSS from SCSS files
gulp.task('css', function() {
  return gulp.src(sassFiles)
    .pipe($.debug({name: 'css:'}))
    .pipe($.sourcemaps.init())
    //.pipe($.concat('build.min.css'))
    .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dest + 'css'));
});

// Concatenate/Uglify JS Files
gulp.task('scripts', ['css'], function() {
  return gulp
    .src(sourceJsFiles, {cwd: base})
    //.pipe(sourcemaps.init())
    .pipe(addStream.obj(prepareTemplates()))
    .pipe($.concat('build.js'))
    //.pipe(sourcemaps.write('.map'))
    //.pipe(rename({suffix: '.min'}))
    .pipe($.uglify())
    .pipe(gulp.dest(dest + 'js'));

});

// Linting
gulp.task('lint', [], function() {
  return gulp
    .src(customJsFiles, {cwd: base})
    .pipe($.jshint())
    .pipe($.jshint.reporter('default', {verbose: true}));
});

// Code styling
gulp.task('style', ['scripts', 'css', 'docs', 'lint'], function() {
  return gulp
    .src(customJsFiles, {cwd: base})
    .pipe($.jscs())
    .pipe($.jscs.reporter());
});

// HTML
gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare: true
  };
  return gulp
    .src('../src/client/app/index.html')
    //.pipe(minifyHTML(opts))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('../deploy/'));
});

// Documentation (JSDoc)
gulp.task('docs', ['scripts'], function() {
  return gulp
    .src(customJsFiles, {cwd: base, read: false})
    .pipe($.jsdoc3(require('./jsdoc.json')));
});

// Clean template
gulp.task('clean-template', function() {
  return gulp.src('build/tmp', {cwd: base, read: false})
    .pipe($.clean());
});

gulp.task('fontello', function() {
  return gulp.src('./app/fontello.config.json')
    .pipe($.fontello())
    .pipe($.print())
    .pipe(gulp.dest('./build/'));
});

gulp.task('templates', function() {
  return gulp
    .src('templates.js')
    .pipe(addStream.obj(prepareTemplates()))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('tmp/js'));
});

// Angular Template Cache
function prepareTemplates() {
  return gulp.src('src/client/app/**/*.tpl.html', {cwd: base})
    .pipe($.angularTemplatecache());
}

// Unit Testing
gulp.task('test', ['karma'], function(done) {
  gulp.start('clean-template');
});

gulp.task('karma', ['templates'], function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

//e2e testing
gulp.task('webdriver_update', $.protractor.webdriver_update);

// this run following task will keep running indefinitely.
gulp.task('webdriver_standalone', ['webdriver_update'], $.protractor.webdriver_standalone);

gulp.task('e2e', ['webdriver_update'], function(done) {
  gulp.src(['src/test/**/*.spec.js'])
    .pipe($.protractor.protractor({
      configFile: 'src/test/protractor.conf.js'
    }), done());
});

// Default
gulp.task('default', [
//   'scripts', 'css', 'lint', 'style', 'docs', 'html', 'watch'
  'scripts', 'css', 'lint', 'docs', 'html', 'watch'
]);

// Deployment Task
gulp.task('deploy', ['scripts', 'css', 'lint', 'style', 'docs', 'html']);

// WATCHERS
gulp.task('watch', function() {
  gulp.watch([
      '../src/client/sass/**/*.scss',
      '../src/client/app/components/**/*.scss',
      '../src/client/app/shared/**/*.scss'
    ],
    ['css']
  );

  gulp.watch([
    '../src/client/app/components/**/*.js',
    '../src/client/app/shared/**/*.js',
    '../src/client/app/services/**/*.js',
    '../src/client/app/app.js'
  ], ['lint', 'style', 'docs', 'scripts']);

  gulp.watch('../src/client/app/**/*.html', ['lint', 'style', 'docs', 'scripts']);

  gulp.watch(['../src/client/app/index.html'], ['html']);
  gulp.watch(['gulpfile.js'], ['default']);

});
