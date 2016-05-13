/**
 * Created by David Breuer on 13/05/2016.
 *
 * @file content.js
 * @description Node content component
 *
 */
(function() {
  'use strict';

  angular
    .module('content-component', ['ngRoute', 'menu-service'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/:sectionid/:nodeid', {
        pageTitle: 'AAT - Node',
        templateUrl: 'components/content/content.tpl.html',
        controller: 'contentController',
        controllerAs: 'vm',
      });
    }])
    .controller('contentController', contentController);

  contentController.$inject = [];

  /* @ngInject */
  function contentController() {
    var vm = this;
    vm.title = 'ControllerName';
    vm.content = '';

  }

})();

