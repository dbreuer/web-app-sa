//spinner.js
/**
 * Created by David Breuer on 26/05/2016.
 *
 * @file spinner.js
 * @description Spinner component
 * @author David Breuer <dbreuer83@gmail.com>
 *
 */

(function() {
  'use strict';

  angular
    .module('spinner', [])
    .directive('spinner', spinnerDirective);

  spinnerDirective.$inject = [];

  /* @ngInject */
  function spinnerDirective() {
    var directive = {
      templateUrl: 'shared/directives/spinner/spinner.tpl.html',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {
        show: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
})();
