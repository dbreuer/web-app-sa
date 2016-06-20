//header.js
/**
 * Created by David Breuer on 12/05/2016.
 *
 * @file header.js
 * @description This is a heade controller component
 *
 */

(function() {
  'use strict';

  angular
    .module('header', [])
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = [];

  /* @ngInject */
  function HeaderController() {
    var vm = this;
    vm.title = 'HeaderController';
    vm.isActive = false;
    vm.toggleMenu = toggleMenu;
    vm.closeMenu = closeMenu;

    function toggleMenu() {
      vm.isActive = (vm.isActive) ? false : true;
    }

    function closeMenu() {
      vm.isActive = false;
    }
  }

})();

