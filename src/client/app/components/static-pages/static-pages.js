/**
 *
 * STATIC FILES COMPONENT
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class App.Staticpages
 *
 * @memberof App.Staticpages
 *
 * @description Provides the static pages for the website.
 *
 */

(function() {

  'use strict';

  angular.module('project.static-pages', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

        $routeProvider.when('/about', {
          title: 'About',
          metaDescription: 'Information about the AAT',
          templateUrl: 'components/static-pages/about.tpl.html',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

        //AAT privacy policy
        $routeProvider.when('/get-myaat/privacy-policy', {
          pageTitle: 'AAT(SA) privacy policy',
          templateUrl: 'components/static-pages/privacy.tpl.html',
          controller: 'MyaatController',
          controllerAs: 'vm',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

        //AAT cookie policy
        $routeProvider.when('/get-myaat/aat-cookie-policy', {
          pageTitle: 'AAT cookie policy',
          templateUrl: 'components/static-pages/cookie.tpl.html',
          controller: 'MyaatController',
          controllerAs: 'vm',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

        //Equality of opportunity
        $routeProvider.when('/get-myaat/aat-equal-opportunities-policy', {
          pageTitle: 'Equality of opportunity',
          templateUrl: 'components/static-pages/equal.tpl.html',
          controller: 'MyaatController',
          controllerAs: 'vm',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

        //Terms and conditions
        $routeProvider.when('/get-myaat/aat-website-terms-and-conditions', {
          pageTitle: 'Terms and conditions',
          templateUrl: 'components/static-pages/terms.tpl.html',
          controller: 'MyaatController',
          controllerAs: 'vm',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

      }]);

  //
})();
