//style
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file style
 * @description
 *
 */
// Code styling
module.exports = function() {
  return this.gulp
    .src(this.opts.customJsFiles, {cwd: this.opts.base})
    .pipe(this.opts.plugins.jscs())
    .pipe(this.opts.plugins.jscs.reporter());
};

module.exports.dependencies = ['scripts', 'css', 'docs', 'lint'];
