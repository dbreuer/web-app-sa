//html
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file html
 * @description
 *
 */
// HTML
module.exports = function() {
  var opts = {
    conditionals: true,
    spare: true
  };
  return this.gulp
    .src('../src/client/app/index.html')
    //.pipe(this.opts.plugins.minifyHTML(opts))
    .pipe(this.opts.plugins.rename('index.html'))
    .pipe(this.gulp.dest('../deploy/'));
};