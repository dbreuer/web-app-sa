// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/**
 *
 * node COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *    David Breuer <dbreuer83@gmail.com>
 *
 * @class app.node
 *
 * @description Provides the subpage nodes functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.node', ['ngRoute', 'menu-service', 'node-service'])
    .config(['$routeProvider',
      function($routeProvider) {
      $routeProvider.when('/:sectionID/:nodeID', {
        pageTitle: 'page node',
        templateUrl: 'components/node/node.tpl.html',
        controller: 'NodeController',
        controllerAs: 'vm'
      });
    }])
    .controller('NodeController', NodeController);

  // Inject Deps
  NodeController.$inject = ['$rootScope', '$routeParams','menuService', 'nodeService'];
  /**
   *
   * Controller
   *
   * @constructor
   */
  function NodeController($rootScope, $routeParams, menuService, nodeService) {
    var vm = this;
    vm.menuNode = $routeParams.sectionID;
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
        },
        'qualifications': {
          'data': [
            {
              'name': 'The AAT(SA) Accounting Qualification',
              'url': '/qualifications/accounting-qualification',
              'id': 31,
              'data': [
                {'name': 'What you\'ll learn at L3', 'url': '/qualifications/level3', 'id': 321},
                {'name': 'What you\'ll learn at L4', 'url': '/qualifications/level4', 'id': 322},
                {'name': 'What you\'ll learn at L5', 'url': '/qualifications/level5', 'id': 323},
                {'name': 'How you\'re assessed', 'url': '/qualifications/assessed', 'id': 324},
                {'name': 'How long it takes to qualify', 'url': '/qualifications/how-long', 'id': 325},
                {'name': 'Course fees', 'url': '/qualifications/fees', 'id': 326}
              ]
            },
            {
              'name': 'Becoming an AAT(SA) student member', 'url': '/qualifications/student-membership', 'id': 32,
              'data': [
                {
                  'name': 'Find a training provider',
                  'url': 'http://www.aatsa.org.za/sites/default/files/public/assets/AATSA-provider-list.pdf',
                  'id': 321
                }
              ]
            }
          ],
          'title': 'AAT(SA) qualification',
          'class': 'sidebar__menu'
        }
      }
    );

    nodeService.getPage($routeParams.sectionID, $routeParams.nodeID)
      .then(
        function(response) {
          vm.pageContent = new PostType(response);
          $rootScope.pageTitle = response.title;
        }, function(err) {
          console.log('error:', err);
        });

  }

  function PostType(post) {
    this.body = post.body.und[0].value;
    this.title = post.title;
    this.slug = post.slug;
    this.date = new Date(post.created * 1000);
    this.signpost = [];
    if (post.field_page_signpost && post.field_page_signpost.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_page_signpost.und.length;/* jshint ignore:line */
      while (spl--) {
        this.signpost.push(post.field_page_signpost.und[spl]);/* jshint ignore:line */
      }
    }
    return this;
  }

}());

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
