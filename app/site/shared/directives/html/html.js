//html.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file html.js
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.html', [])
    .directive('htmlContent', htmlDirective);

  htmlDirective.$inject = [];

  /* @ngInject */
  function htmlDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/html/html.html',
      replace: true,
      restrict: 'E'
    };
    return directive;
  }

})();

