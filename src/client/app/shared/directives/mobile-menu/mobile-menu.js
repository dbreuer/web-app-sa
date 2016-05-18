/***
 *
 * MOBILE MENU COMPONENT
 *
 * @file
 *  Provides the mobile menu functionality for the site, including directives
 *
 */
(function() {
'use strict';

angular.module('mobile-menu', [])

  // Directives
  .directive('mobileMenu', mobileMenu);

// Inject Deps
mobileMenu.$inject = [];

/**
 *
 * Mobile Meny Directive : Provides the hamburger icon and menu overlay functionality.
 *
 * @returns {{replace: boolean, restrict: string, template: string, link: link}}
 *
 */
function mobileMenu() {

  return {
    replace: true,
    restrict: 'AE',
    scope: {},

    templateUrl: 'shared/directives/mobile-menu/mobile-menu.tpl.html',

    link: function(scope, elem, attrs) {

      // Toggle Menu
      scope.isActive = false;
      scope.closeMenu = closeMenu;
      scope.toggleMenu = toggleMenu;

      function toggleMenu() {
        scope.isActive = (scope.isActive) ? false : true;
      }

      function closeMenu() {
        scope.isActive = false;
      }

    }
  };

}

}());
