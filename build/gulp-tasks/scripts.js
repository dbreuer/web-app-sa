//scripts
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file scripts
 * @description
 *
 */
// Angular Template Cache

// Concatenate/Uglify JS Files
var addStream = require('add-stream');

module.exports = function() {
  this.prepareTemplates = function() {
    return this.gulp.src('src/client/app/**/*.tpl.html', {cwd: this.opts.base})
      .pipe(this.opts.plugins.angularTemplatecache());
  };

  return this.gulp
    .src(this.opts.sourceJsFiles, {cwd: this.opts.base})
    //.pipe(sourcemaps.write('.map'))
    .pipe(addStream.obj(this.prepareTemplates()))
    .pipe(this.opts.plugins.concat('build.js'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(this.gulp.dest(this.opts.dest + 'js'));
};
module.exports.dependencies = ['css'];
