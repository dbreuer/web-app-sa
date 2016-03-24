//aat-landing-page.js
/**
 * Created by David Breuer on 17/02/2016.
 *
 * @file landing-page.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('landing-page', ['ngAnimate'])
    .directive('landingPage', landingPageDirective);

  landingPageDirective.$inject = [];

  /* @ngInject */
  function landingPageDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/landing-page/landing-page.html',
      controller: landingPageController,
      replace: true,
      controllerAs: 'page',
      link: link,
      restrict: 'AE'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.page = scope.$eval(attrs.ngPage);
    }
  }

  landingPageController.$inject = [];

  /* @ngInject */
  function landingPageController() {

  }

})();

