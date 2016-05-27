/**
 *
 * deliver COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.deliver
 *
 * @description Provides the deliver functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.deliver', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/deliver', {
        pageTitle: 'AAT deliver',
        templateUrl: 'components/deliver/deliver.tpl.html',
        controller: 'DeliverController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('DeliverController', DeliverController);

  // Inject Deps
  DeliverController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function DeliverController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('deliver');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Deliver AAT(SA) qualifications',
          'text': 'Find out how you can become approved to deliver AAT(SA) qualifications,' +
          ' and join our network of approved training providers.',
          'image': {
            'src': '/assets/img/hero/sebathu_bengani_2.jpg',
            'alt': 'Deliver AAT(SA)qualifications'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 2,
          'title': 'Become a CBA venue',
          'text': 'Become associated with one of the largest professional' +
          ' membership bodies by offering computer based assessments.',
          'image': {
            'src': '/assets/img/hero/lungile_mawonga.jpg',
            'alt': 'Become a CBA venue'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/cba-venue'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'Deliver AAT(SA) qualifications',
          'text': 'Find out how you can become approved to deliver AAT(SA) qualifications, ' +
          'and join our network of approved training providers.',
          'image': {
            'src': '/assets/img/landing_pages/edward_makwana_saica.jpg?itok=Z4Vq3N6g',
            'alt': 'Deliver AAT(SA) qualifications'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 2,
          'title': 'Become a CBA venue',
          'text': 'Become associated with one of the largest professional membership ' +
          'bodies by offering computer based assessments.',
          'image': {
            'src': '/assets/img/landing_pages/lawrence_mtolo.jpg?itok=zknYNy3W',
            'alt': 'Become a CBA venue'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/cba-venue'
          }
        },
        {
          'id': 3,
          'title': 'Contact AAT(SA)',
          'text': 'You can email us with your details if you are interested ' +
          'in delivering AAT(SA) qualifications, or find out more below.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/event_2.jpg?itok=FI87SI0_',
            'alt': 'Contact AAT(SA)'
          },
          'button': {
            'text': 'Register your interest',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 4,
          'title': 'Marketing support',
          'text': 'We\'ve provided a range of marketing materials designed ' +
          'to help you promote AAT(SA) to your students and members.',
          'image': {
            'src': '/assets/img/landing_pages/sylvia_segone_2.jpg?itok=B-wDsPO4',
            'alt': 'Marketing support'
          },
          'button': {
            'text': 'Access the resources',
            'url': '/deliver/marketing'
          }
        }
      ]
    };

  }

}());
