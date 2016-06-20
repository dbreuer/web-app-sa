//404
/**
 * Created by David Breuer on 23/02/2016.
 *
 * @file 404
 *
 * @class Error
 *
 * @description Default error page
 *
 * @memberof app
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.404', [])
    .directive('pageNotFound', error404Directive);

  error404Directive.$inject = [];

  /* @ngInject */
  function error404Directive() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/404/404.html',
      controller: error404Controller,
      controllerAs: 'error',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  error404Controller.$inject = [];

  /* @ngInject */
  function error404Controller() {

  }

})();

