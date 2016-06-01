//templates
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file templates
 * @description
 *
 */
// Angular Template Cache

var addStream = require('add-stream');

module.exports = function() {
  return this.gulp
    .src('../src/client/app/**/*.tpl.html')
    .pipe(this.opts.plugins.debug({title: 'templates:'}))
    .pipe(this.opts.plugins.angularTemplatecache())
    .pipe(this.gulp.dest(this.opts.dest + 'tmp/js'));
};