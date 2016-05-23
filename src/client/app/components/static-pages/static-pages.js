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

      }]);

  //
})();
