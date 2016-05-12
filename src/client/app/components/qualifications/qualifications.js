/**
 *
 * QUALIFICATIONS COMPONENT
 *
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.qualifications
 *
 * @description Provides the qualifications functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.qualifications', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/qualifications', {
        pageTitle: 'AAT - Qualifications',
        templateUrl: 'components/qualifications/qualifications.tpl.html',
        controller: 'QualificationsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('QualificationsController', QualificationsController);

  // Inject Deps
  QualificationsController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function QualificationsController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('qualifications', false)
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
