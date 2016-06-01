//clean-template
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file clean-template
 * @description
 *
 */
// Clean template
module.exports = function() {
  return this.gulp.src('build/tmp', {cwd: this.opts.base, read: false})
    .pipe(this.opts.plugins.clean());
};
