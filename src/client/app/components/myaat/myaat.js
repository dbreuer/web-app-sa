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
  MyaatController.$inject = ['menuService'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MyaatController(menuService) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    menuService.setMenu(
      {
        'myaat': {
          'data': [
            {'name': 'What is MyAAT?', 'url': '/myaat/about', 'id': 11},
            {'name': 'Register for your MyAAT account', 'url': 'http://www.aat.org.uk/get-myaat/options',
              'id': 12, external: true},
            {'name': 'AAT privacy policy', 'url': '/myaat/privacy', 'id': 13},
            {'name': 'AAT use of cookies', 'url': '/myaat/cookies', 'id': 14},
            {'name': 'Help logging in to MyAAT', 'url': '/myaat/help', 'id': 15}
          ],
          'title': 'MyAAT',
          'class': 'sidebar__menu'
        }
      }
    );

    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'MyAAT - online tools for success',
          'text': 'Assessment results, revision guides, career help, exclusive discounts, and more.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/edith_bayoli_2.jpg',
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
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/sebathu_bengani_2.jpg',
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
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=jR1IsKOu',
            'alt': 'What is MyAAT?'
          },
          'button': {
            'text': 'Find out more about MyAAT',
            'url': 'http://sa.aws.aat.org.uk/myaat/about'
          }
        },
        {
          'id': 2,
          'title': 'Register for your MyAAT account',
          'text': 'Registration is simple - you just need your email address and AAT membership number.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=AICzP4vt',
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
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=d33I8BNH',
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
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=yZTt6ykX',
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
