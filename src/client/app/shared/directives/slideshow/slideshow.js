//slideshow.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file slideshow.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('slideshow', [])
    .directive('slideshowContent', slideshowDirective);

  slideshowDirective.$inject = [];

  /* @ngInject */
  function slideshowDirective() {
    var directive = {
      templateUrl: 'shared/directives/slideshow/slideshow.tpl.html',
      replace: true,
      restrict: 'E',
      scope: {
        slideshow: '='
      }
    };
    return directive;
  }

})();

