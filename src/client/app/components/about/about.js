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

  angular.module('project.about', ['ngRoute', 'menu-service'])

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
  AboutController.$inject = ['menuService'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function AboutController(menuService) {
    menuService.setMenu(
      {
        'about': {
          'data': [
            {'name': 'What we do', 'url': '/about/what-we-do', 'id': 11},
            {'name': 'Contact us', 'url': '/about/contact-us', 'id': 12},
            {'name': 'AAT UK', 'url': 'http://www.aat.org.uk', 'id': 13, external: true},
            {'name': 'Terms and conditions', 'url': '/about/terms-conditions', 'id': 14},
            {'name': 'Link to the SAICA website', 'url': 'http://www.saica.co.za', 'id': 15, external: true},
          ],
          'title': 'About Us',
          'class': 'sidebar__menu'
        }
      }
    );

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
