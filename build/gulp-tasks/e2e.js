//e2e
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file e2e
 * @description
 *
 */
module.exports = function(done) {
  this.gulp.src(['src/test/**/*.spec.js'])
    .pipe(this.opts.plugins.protractor.protractor({
      configFile: 'src/test/protractor.conf.js'
    }), done());
};

module.exports.dependencies = ['webdriver_update'];
