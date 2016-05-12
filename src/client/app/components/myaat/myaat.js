/**
 *
 * MYAAT COMPONENT
 *
 * @file
 * Provide the custom user myaat for logged in users.
 *
 */

(function() {

  'use strict';

  angular.module('project.myaat', [
      'ngRoute',
      'ui.bootstrap'
    ])

    // Define route
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/myaat', {
        title: 'myaat',
        templateUrl: 'components/myaat/myaat.tpl.html',
        controller: 'MyAATController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])
    // Define controller
    .controller('MyAATController', MyAATController);

  // Inject Deps
  MyAATController.$inject = [ ];

  /**
   *
   * MyAAT Controller
   *
   * @param {object} MyAATDataService
   * @param {object} API_URL
   * @param {object} jwtHelper
   * @constructor
   */
  function MyAATController() {

    var vm = this;

    vm.term = 'myaat data';
    vm.myaat = [];
    vm.listings = [];

    // Call main controller
    //activate();

    /**
     *
     * Main controller function
     *
     * @returns {*}
     */
    function activate() {
      console.log('Activated myaat View');
    }

  }

}());
