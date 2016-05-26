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

  angular.module('project.membership', ['ngRoute', 'menu-service'])

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
  MembershipController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MembershipController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('membership');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Benefits of membership',
          'text': 'Benefits include professional and career advice, networking' +
          ' opportunities, exclusive discounts and more.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'Benefits of membership'
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/benefits'
          }
        },
        {
          'id': 2,
          'title': 'Apply for AAT(SA) membership',
          'text': 'Join a professional accountancy body that recognises your achievements and hard work.',
          'image': {
            'src': '../img/hero/lungile_mawonga.jpg',
            'alt': 'Apply for AAT(SA) membership'
          },
          'button': {
            'text': 'Apply for membership',
            'url': '/membership/apply'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'About AAT(SA) membership',
          'text': 'Be part of a professional accountancy body that recognises' +
          ' your achievements and offers you a range of benefits.',
          'image': {
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=8VpvQaCo',
            'alt': 'About AAT(SA) membership'
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/about'
          }
        },
        {
          'id': 2,
          'title': 'Benefits of membership',
          'text': 'Benefits include professional and career advice, ' +
          'networking opportunities, exclusive discounts and more.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=pkqtVT-_',
            'alt': 'Benefits of membership'
          },
          'button': {
            'text': 'Read more',
            'url': '/membership/benefits'
          }
        },
        {
          'id': 3,
          'title': 'Apply for membership',
          'text': 'Join a professional accountancy body that recognises your achievements and hard work.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim_2.jpg?itok=ucRfdlhh',
            'alt': 'Apply for membership'
          },
          'button': {
            'text': 'Apply for membership',
            'url': '/membership/apply'
          }
        },
        {
          'id': 4,
          'title': 'Continuing Professional Development',
          'text': 'Continuing Professional Development (CPD) is any activity that helps ' +
          'you maintain your knowledge and skills related to your work.',
          'image': {
            'src': '../img/landing_pages/edward_makwana_saica.jpg?itok=lKC6Kry7',
            'alt': 'Marketing support'
          },
          'button': {
            'text': 'Find out more about CPD',
            'url': '/membership/cpd'
          }
        }
      ]
    };
  }

}());
