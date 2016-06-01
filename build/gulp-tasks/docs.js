//template
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file docs
 * @description
 *
 */
// Documentation (JSDoc)

module.exports = function () {
  return this.gulp
    .src(this.opts.customJsFiles, {cwd: this.opts.base, read: false})
    .pipe(this.opts.plugins.jsdoc3(require('../jsdoc.json')));
};
module.exports.dependencies = ['scripts'];