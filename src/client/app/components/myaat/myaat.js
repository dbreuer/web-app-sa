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

  angular.module('project.myaat', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/myaat', {
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
  MyaatController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MyaatController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('myaat');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'MyAAT - online tools for success',
          'text': 'Assessment results, revision guides, career help, exclusive discounts, and more.',
          'image': {
            'src': '/assets/img/hero/edith_bayoli_2.jpg',
            'alt': 'MyAAT - online tools for success'
          },
          'button': {
            'text': 'Log in to MyAAT',
            'url': 'http://www.aat.org.uk/myaat'
          }
        },
        {
          'id': 2,
          'title': 'MyAAT - training providers',
          'text': 'Study support and e-learning content, marketing support, administration services, and more.',
          'image': {
            'src': '/assets/img/hero/sebathu_bengani_2.jpg',
            'alt': 'MyAAT - training providers'
          },
          'button': {
            'text': 'Log in to MyAAT',
            'url': 'http://www.aat.org.uk/myaat'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'What is MyAAT?',
          'text': 'Tailored to you, MyAAT provides interactive services and ' +
          'resources designed to help you get the most out of AAT.',
          'image': {
            'src': '/assets/img/landing_pages/tapiwa_obert_2.jpg?itok=jR1IsKOu',
            'alt': 'What is MyAAT?'
          },
          'button': {
            'text': 'Find out more about MyAAT',
            'url': '/myaat/about'
          }
        },
        {
          'id': 2,
          'title': 'Register for your MyAAT account',
          'text': 'Registration is simple - you just need your email address and AAT membership number.',
          'image': {
            'src': '/assets/img/landing_pages/sylvia_segone_2.jpg?itok=AICzP4vt',
            'alt': 'Register for your MyAAT account'
          },
          'button': {
            'text': 'Register today',
            'url': 'http://www.aat.org.uk/get-myaat/options'
          }
        },
        {
          'id': 3,
          'title': 'Log in to MyAAT',
          'text': 'Log in to MyAAT to access your exclusive member benefits and services.',
          'image': {
            'src': '/assets/img/landing_pages/jessie_bosco_2.jpg?itok=d33I8BNH',
            'alt': 'Log in to MyAAT'
          },
          'button': {
            'text': 'Log in now',
            'url': 'http://www.aat.org.uk/myaat'
          }
        },
        {
          'id': 4,
          'title': 'Log in help for MyAAT',
          'text': 'Having problems logging in to MyAAT? Get help here.',
          'image': {
            'src': '/assets/img/landing_pages/lawrence_mtolo.jpg?itok=yZTt6ykX',
            'alt': 'Log in help for MyAAT'
          },
          'button': {
            'text': 'Forgotten your password?',
            'url': 'http://www.aat.org.uk/user/password'
          }
        }
      ]
    };

  }

}());
