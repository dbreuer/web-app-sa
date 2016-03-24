//social.js
/**
 * Created by David Breuer on 22/02/2016.
 *
 * @file social.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.social', [])
    .directive('socialContent', socialContent);

  socialContent.$inject = [];

  /* @ngInject */
  function socialContent() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/social/social.html',
      controller: socialController,
      controllerAs: 'sc',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  socialController.$inject = [];

  /* @ngInject */
  function socialController() {

  }

})();

