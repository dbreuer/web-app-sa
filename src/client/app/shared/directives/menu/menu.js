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
    .module('menu', ['project.api'])
    .directive('menu', menuDirective);

  menuDirective.$inject = ['API', '$location'];

  /* @ngInject */
  function menuDirective(API, location) {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/menu/menu.html',
      controller: menuController,
      controllerAs: 'menu',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

      scope.menu.items = [];
      scope.menu.class = '';
      scope.menu.title = '';
      scope.menu.isActive = function(item) {
        if (!location.path()) {
          return false;
        }
        return (item.url === location.path());
      };

      API.getMenu(attrs.position).then(function(response) {
        if (response.data) {
          scope.menu.class = (response.data.class) ? response.data.class : '';
          scope.menu.title = (response.data.title) ? response.data.title : '';
          scope.menu.items = response.data.results;
        }
      });
    }
  }

  menuController.$inject = [];

  /* @ngInject */
  function menuController() {

  }

})();

