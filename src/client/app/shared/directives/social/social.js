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
    .module('social', [])
    .directive('socialContent', socialContent)
    .directive('socialShareButtons', socialShareButtons);

  socialContent.$inject = [];
  socialShareButtons.$inject = [];

  /* @ngInject */
  function socialContent() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/social/social.tpl.html',
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

  /* @ngInject */
  function socialShareButtons() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/social/social-share-buttons.tpl.html',
      controller: socialController,
      controllerAs: 'sc',
      link: link,
      restrict: 'AE',
      scope: {
        'pageTitle': '=pageTitle',
        'pageSlug': '=pageSlug'
      }
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

