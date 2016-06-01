//webdriver_standalone
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file webdriver_standalone
 * @description
 *
 */
// this run following task will keep running indefinitely.
module.exports = function() {
  this.opts.plugins.protractor.webdriver_standalone;
};
module.exports.dependencies = ['webdriver_update'];
