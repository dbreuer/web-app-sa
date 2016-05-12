/**
 *
 * MY-AAT COMPONENT
 *
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.Frontpage
 *
 * @description Provides the frontpage functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.myaat', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/my-aat', {
        pageTitle: 'AAT - MyAAT',
        templateUrl: 'components/myaat/myaat.tpl.html',
        controller: 'MyaatController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('MyaatController', MyaatController);

  // Inject Deps
  MyaatController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MyaatController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('frontpage', false)
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
