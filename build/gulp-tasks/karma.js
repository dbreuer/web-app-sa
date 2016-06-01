//karma
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file karma
 * @description
 *
 */

var Server = require('karma').Server;

module.exports = function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
};
module.exports.dependencies = ['templates'];