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

      }]);

  //
})();
