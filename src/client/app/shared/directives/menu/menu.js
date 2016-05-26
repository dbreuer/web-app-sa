//aat-menu.js
/**
 * Created by David Breuer on 17/02/2016.
 *
 * @file menu.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('menu', ['menu-service'])
    .directive('menu', menuDirective);

  menuDirective.$inject = ['menuService', '$location'];

  /* @ngInject */
  function menuDirective(menuService, location) {
    var directive = {
      templateUrl: 'shared/directives/menu/menu.tpl.html',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

      menuService.getMenu(attrs.position);
      console.log('this type:', typeof scope.menu);
      //scope.menu.isActive = function(item) {
      //  if (!location.path()) {
      //    return false;
      //  }
      //  return (item.url === location.path());
      //};

    }
  }

})();

