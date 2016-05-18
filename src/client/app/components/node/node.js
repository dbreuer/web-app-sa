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

    menuService.setMenu(
      {
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
    nodeService.getPage($routeParams.nodeID).then(
      function(response) {
        vm.pageContent = response.data;
        $rootScope.pageTitle = response.data.title;
      });
  }

}());
