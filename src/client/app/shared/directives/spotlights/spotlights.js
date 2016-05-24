//spotlights.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file spotlights.js
 *
 */
(function() {
  'use strict';

  angular
    .module('spotlights', [])
    .controller('spotlightsController', spotlightsController)
    .directive('spotlightsContent', spotlightsDirective);

  spotlightsController.$inject = [];
  spotlightsDirective.$inject = [];

  /* @ngInject */
  function spotlightsDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/spotlights/spotlights.tpl.html',
      controller: 'spotlightsController',
      controllerAs: 'vm',
      replace: true,
      scope: {
        spotlights: '='
      },
      restrict: 'E'
    };
    return directive;
  }

  function spotlightsController() {

  }

})();

