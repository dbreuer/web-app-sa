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

    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'AAT(SA) membership',
          'text': 'Join a professional accountancy body that recognises your ' +
          'achievements and provides you with a range of benefits.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/lungile_mawonga_2.jpg',
            'alt': ''
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/about'
          }
        },
        {
          'id': 2,
          'title': 'AAT(SA) qualifications',
          'text': 'The AAT(SA) qualification can enable your career in finance and accounting' +
          ' and help you make a truly positive contribution to your business, department or unit.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/ayton_namwaza_banda_1.jpg',
            'alt': ''
          },
          'button': {
            'text': 'Find out more',
            'url': '/qualifications/accounting-qualification'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'What we do',
          'text': 'We are a professional body dedicated to the education, development,' +
          ' regulation and support of accounting technicians in South Africa.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/israel_mogobe.jpg?itok=vXbL54nk',
            'alt': 'What we do'
          },
          'button': {
            'text': 'Find out more',
            'url': '/about/what-we-do'
          }
        },
        {
          'id': 2,
          'title': 'Contact us',
          'text': 'You can call or email us with queries or to request more information about what we do.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim.jpg?itok=KQngkAag',
            'alt': 'Contact us'
          },
          'button': {
            'text': 'Contact us',
            'url': '/about/contact-us'
          }
        },
        {
          'id': 3,
          'title': 'AAT UK',
          'text': 'Visit the Association of Accounting Technician\'s UK web site.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/edward_makwana_saica.jpg?itok=-35K2xUE',
            'alt': 'AAT UK'
          },
          'button': {
            'text': 'Visit the AAT UK website',
            'url': 'http://www.aat.org.uk/'
          }
        },
        {
          'id': 4,
          'title': 'Terms and conditions',
          'text': 'Access to and use of AAT(SA)\'s website constitutes ' +
          'acceptance of the terms and conditions listed here.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/sylvia_segone_2.jpg?itok=OaqGU7O3',
            'alt': 'Ts & Cs'
          },
          'button': {
            'text': 'Read our terms and conditions',
            'url': 'http://sa.aws.aat.org.uk/about/terms-conditions'
          }
        }
      ]
    };
  }

}());
