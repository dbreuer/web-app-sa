/**
 * Created by David Breuer on 13/05/2016.
 *
 * @file menu-service.js
 * @description Menu service
 *
 */
(function() {
  'use strict';
  angular
    .module('menu-service', [])
    .service('menuService', menuService);

  menuService.$inject = ['$rootScope'];
  /* @ngInject */
  function menuService($rootScope) {
    console.log('service Init');
    if ($rootScope && $rootScope.menus === 'undefined') {
      $rootScope.menus = {};
    }
    console.log('service Init');
    /**
     * Menu Items
     */
    return {
      setMenu: setMenu,
      getMenu: getMenu
    };
    /**
     *
     * Get Menu
     *
     * @returns {items|{}}
     */
    function setMenu(menuObject) {
      $rootScope.menus = angular.extend({}, $rootScope.menus, menuObject);
    }

    function getMenu(menuID) {
      if ($rootScope && $rootScope.menus) {
        if ($rootScope.menus[menuID]) {
          return $rootScope.menus[menuID];
        }
        return {'error': 'Menu does not exist at: ' + menuID};
      }
      return {'error': 'No Route Scope'};
    }
  }
})();

