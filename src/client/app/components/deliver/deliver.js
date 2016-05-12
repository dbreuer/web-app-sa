/**
 *
 * deliver COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.deliver
 *
 * @description Provides the deliver functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.deliver', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/deliver', {
        pageTitle: 'AAT deliver',
        templateUrl: 'components/deliver/deliver.tpl.html',
        controller: 'DeliverController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('DeliverController', DeliverController);

  // Inject Deps
  DeliverController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function DeliverController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('deliver', false)
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
