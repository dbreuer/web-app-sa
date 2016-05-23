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

    $rootScope.menu = menuService.getMenu($routeParams.sectionID);

    nodeService.getPage($routeParams.sectionID, $routeParams.nodeID)
      .then(
        function(response) {
          vm.pageContent = new PostType(response, nodeService);
          $rootScope.pageTitle = response.title;
        }, function(err) {
          console.log('error:', err);
        });

  }

  function PostType(post, nodeService) {
    this.body = post.body.und[0].safe_value;
    this.title = post.title;
    this.slug = post.slug;
    this.date = new Date(post.created * 1000);
    this.signpost = [];
    if (post.field_page_signpost && post.field_page_signpost.und &&
      post.field_page_signpost.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_page_signpost.und.length;/* jshint ignore:line */
      while (spl--) {
        this.signpost.push(post.field_page_signpost.und[spl]);/* jshint ignore:line */
      }
    }

    if (post.field_tabs_page_signpost && post.field_tabs_page_signpost.und &&
      post.field_tabs_page_signpost.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_tabs_page_signpost.und.length;/* jshint ignore:line */
      while (spl--) {
        this.signpost.push(post.field_tabs_page_signpost.und[spl]);/* jshint ignore:line */
      }
    }
    this.tabIDs = [];
    this.tabs = [];
    if (post.field_tabs_page_tab_items && post.field_tabs_page_tab_items.und &&
      post.field_tabs_page_tab_items.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_tabs_page_tab_items.und.length;/* jshint ignore:line */
      while (spl--) {
        this.tabIDs.push(post.field_tabs_page_tab_items.und[spl]);/* jshint ignore:line */
      }
      this.tabs = new PostTabs(this.tabIDs, nodeService);
      this.tabsStyle = post.field_tabs_page_tab_style.und[0].value;
    }
    return this;
  }

  function PostTabs(tabidarray, nodeService) {
    var Tabs = [];
    function successTabsDetails(response) {
      Tabs.push(new PostType(response));
    }
    for (var tb = 0; tb < tabidarray.length; tb++) {
      nodeService.getPage(tabidarray[tb].nid, '', true).then(successTabsDetails);
    }
    return Tabs;
  }

}());

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
