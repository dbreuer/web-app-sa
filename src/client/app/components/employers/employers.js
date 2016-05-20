/**
 *
 * employers COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.employers
 *
 * @description Provides the employers functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.employers', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/employers', {
        pageTitle: 'AAT Employers',
        templateUrl: 'components/employers/employers.tpl.html',
        controller: 'EmployersController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('EmployersController', EmployersController);

  // Inject Deps
  EmployersController.$inject = ['menuService'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function EmployersController(menuService) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    menuService.setMenu(
      {
        'employers': {
          'data': [
            {
              'name': 'AAT(SA) training for your business',
              'url': '/employers/business-training',
              'id': 41
            },
            {
              'name': 'AAT(SA) membership for your staff',
              'url': '/employers/staff-membership',
              'id': 42
            },
            {
              'name': 'The AAT(SA) Learnerships', 'url': '/employers/learnerships', 'id': 43,
              'data': [
                {
                  'name': 'Certificate: Accounting Technician - Level 3',
                  'url': '/employers/level3',
                  'id': 431
                },
                {
                  'name': 'FET Certificate Accounting Technician - Level 4',
                  'url': '/employers/level4',
                  'id': 432
                },
                {
                  'name': 'Certificate: Accounting - Level 5',
                  'url': '/employers/level5',
                  'id': 433
                },
                {
                  'name': '(LGAC) Local Government Accounting Certificate',
                  'url': '/employers/lgac',
                  'id': 434
                },
                {
                  'name': '(LGAAC) FET Certificate: Local Government Accounting - Level 4',
                  'url': '/employers/lgaac-fet',
                  'id': 435
                }
              ]
            }
          ],
          'title': 'AAT(SA) qualification',
          'class': 'sidebar__menu'
        }
      }
    );
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Membership for your staff',
          'text': 'We offer a range of benefits and services to our members long ' +
          'after they have completed their initial qualification.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/ayton_namwaza_banda.jpg',
            'alt': 'Membership for your staff'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/staff-membership'
          }
        },
        {
          'id': 2,
          'title': 'Training for your business',
          'text': 'We offer a range of flexible training options, designed to suit your organisation and employees.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/hero/edith_bayoli.jpg',
            'alt': 'Training for your business'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/business-training'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'Training for your business',
          'text': 'We offer a range of flexible training options, carefully' +
          ' designed to suit the needs of your organisation and employees.',
          'image': {
            'src': '../img/landing_pages/israel_mogobe.jpg?itok=vH2K6Qn2',
            'alt': 'Training for your business'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/business-training'
          }
        },
        {
          'id': 2,
          'title': 'Membership for your staff',
          'text': 'We offer a range of benefits and services that will enable our ' +
          'members to continue their professional development.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=6HqACUwI',
            'alt': 'Membership for your staff'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/staff-membership'
          }
        },
        {
          'id': 3,
          'title': 'The AAT(SA) learnerships',
          'text': 'Aimed at learners who are employed or want to prepare themselves ' +
          'for employment in the accounting environment at technician level.',
          'image': {
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=3z-GVVw8',
            'alt': 'The AAT(SA) learnerships'
          },
          'button': {
            'text': 'More information',
            'url': '/employers/learnerships'
          }
        },
        {
          'id': 4,
          'title': 'Find a training provider',
          'text': 'We have AAT(SA) approved training providers all over South Africa. ' +
          'Download our list below to contact a training provider in your province.',
          'image': {
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=kZmOK4q0',
            'alt': 'Download our list of training providers (PDF)'
          },
          'button': {
            'text': 'Download our list of training providers (PDF)',
            'url': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/assets/AATSA-provider-list.pdf'
          }
        }
      ]
    };

  }

}());
