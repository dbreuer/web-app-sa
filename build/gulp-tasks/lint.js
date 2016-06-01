//lint
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file lint
 * @description
 *
 */
// Linting
module.exports = function() {
  return this.gulp
    .src(this.opts.customJsFiles, {cwd: this.opts.base})
    .pipe(this.opts.plugins.jshint())
    .pipe(this.opts.plugins.jshint.reporter('default', {verbose: true}));
};
