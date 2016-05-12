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
    .module('header',[])
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = [];

  /* @ngInject */
  function HeaderController() {
    var vm = this;
    vm.title = 'HeaderController';

    vm.toggleMenu = toggleMenu;

    ////////////////
  //@todo: need to use the toggle function and see the result on page overlay menu.
    function toggleMenu() {

      vm.isActive = (vm.isActive) ? false : true;
    }
  }

})();

