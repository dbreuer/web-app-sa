//title.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file title.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.title', [])
    .directive('titleContent', titleDirective);

  titleDirective.$inject = [];

  /* @ngInject */
  function titleDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/title/title.html',
      replace: true,
      restrict: 'E'
    };
    return directive;
  }

})();

