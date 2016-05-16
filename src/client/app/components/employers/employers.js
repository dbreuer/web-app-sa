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

  angular.module('project.employers', ['ngRoute'])

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
  EmployersController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function EmployersController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

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
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/israel_mogobe_0.jpg?itok=vH2K6Qn2',
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
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/lawrence_mtolo_0.jpg?itok=6HqACUwI',
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
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/jessie_bosco_0.jpg?itok=3z-GVVw8',
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
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/tapiwa_obert_1.jpg?itok=kZmOK4q0',
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
