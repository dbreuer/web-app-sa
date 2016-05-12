/**
 *
 * membership COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.membership
 *
 * @description Provides the membership functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.membership', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/membership', {
        pageTitle: 'AAT membership',
        templateUrl: 'components/membership/membership.tpl.html',
        controller: 'MembershipController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('MembershipController', MembershipController);

  // Inject Deps
  MembershipController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MembershipController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('membership', false)
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
