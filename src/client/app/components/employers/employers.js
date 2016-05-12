/**
 *
 * employers COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.employers
 *
 * @description Provides the employers functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.employers', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/employers', {
        pageTitle: 'AAT Employers',
        templateUrl: 'components/employers/employers.tpl.html',
        controller: 'EmployersController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('EmployersController', EmployersController);

  // Inject Deps
  EmployersController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function EmployersController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('employers', false)
    //    .then(function(response) {
    //        console.log('get it', response.data.data);
    //        vm.pageContent = response.data.data;
    //        //$timeout(function(){vm.isPageLoading = false;}, 1000);
    //        vm.isPageLoading = false;
    //    }).catch(function(err) {
    //    vm.isPageLoading = false;
    //    vm.pageContent = {'error': 500};
    //});

  }

}());
