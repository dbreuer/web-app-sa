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
    .module('shared.slideshow', [])
    .directive('slideshowContent', slideshowDirective);

  slideshowDirective.$inject = [];

  /* @ngInject */
  function slideshowDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/slideshow/slideshow.html',
      replace: true,
      restrict: 'E'
    };
    return directive;
  }

})();

