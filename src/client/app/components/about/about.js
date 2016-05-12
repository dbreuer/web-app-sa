/**
 *
 * ABOUT COMPONENT
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.About
 *
 * @description Provides the about-us functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        pageTitle: 'AAT - about',
        templateUrl: 'components/about/about.tpl.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('AboutController', AboutController);

  // Inject Deps
  AboutController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function AboutController() {

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
