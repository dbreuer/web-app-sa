/**
 *
 * QUALIFICATIONS COMPONENT
 *
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.qualifications
 *
 * @description Provides the qualifications functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.qualifications', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/qualifications', {
        pageTitle: 'AAT - Qualifications',
        templateUrl: 'components/qualifications/qualifications.tpl.html',
        controller: 'QualificationsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('QualificationsController', QualificationsController);

  // Inject Deps
  QualificationsController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function QualificationsController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('qualifications');

    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Find a training provider',
          'text': 'Use our online search tool to find an AAT(SA) approved training provider in your area.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'Find a training provider'
          },
          'button': {
            'text': 'Download our list of training providers (Word)',
            'url': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/assets/AATSA-provider-list.docx'
          }
        },
        {
          'id': 2,
          'title': 'The AAT(SA) Accounting Qualification',
          'text': 'Based on practical, real world accounting knowledge you can put to use from day one.',
          'image': {
            'src': '../img/hero/sebathu_bengani_2.jpg',
            'alt': 'The AAT(SA) Accounting Qualification'
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
          'title': 'The AAT(SA) Accounting qualification',
          'text': 'The AAT(SA) Accounting qualification can enable your career in finance and ' +
          'accounting and help you make a positive contribution to your business, department.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=QNoYKYfq',
            'alt': 'The AAT(SA) Accounting qualification'
          },
          'button': {
            'text': 'Find out more',
            'url': 'http://sa.aws.aat.org.uk/qualifications/accounting-qualification'
          }
        },
        {
          'id': 2,
          'title': 'How long does it take to qualify?',
          'text': 'You can study full-time, part-time, from home or ' +
          'online - so how long you take to qualify is up to you.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/event.jpg?itok=tq_vtYjt',
            'alt': 'How long does it take to qualify?'
          },
          'button': {
            'text': 'Read more about your options',
            'url': '/qualifications/how-long'
          }
        },
        {
          'id': 3,
          'title': 'Becoming a student member',
          'text': 'We advise that you register with us as soon as you enrol with ' +
          'your training provider to avoid any delays in taking your assessments.',
          'image': {
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=KimL61vx',
            'alt': 'Becoming a student member'
          },
          'button': {
            'text': 'Find out more',
            'url': '/qualifications/student-membership'
          }
        },
        {
          'id': 4,
          'title': 'Find a training provider',
          'text': 'Download our comprehensive list to find an AAT(SA) approved training provider in your area.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim_0.jpg?itok=5P2xwBka',
            'alt': 'Download our list of training providers (PDF)'
          },
          'button': {
            'text': 'Download our list of training providers (PDF)',
            'url': 'http://sa.aws.aat.org.uk/sites/default/files/public/assets/AATSA-provider-list.pdf'
          }
        }
      ]
    };

  }

}());
