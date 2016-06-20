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
    vm.isLoading = true;
    vm.pageContent = {};
    vm.pageError = false;

    vm.init = init;
    vm.PostType = PostType;
    vm.PostTabs = PostTabs;

    function init() {
      getMenuItems();
      pageLoadContent();
    }

    function getMenuItems() {
      $rootScope.menu = menuService.getMenu($routeParams.sectionID);
    }

    function pageLoadContent() {
      //console.log('$routeParams', $routeParams);
      nodeService.getPage($routeParams.sectionID, $routeParams.nodeID)
        .then(_successPageLoadCallback)
        .catch(_errorPageLoadCallback);
    }

    function _successPageLoadCallback(response) {
      vm.pageContent = new PostType(response, nodeService);
      $rootScope.pageTitle = response.title;
      //console.log('success:', response);
      vm.isLoading = false;
    }

    function _errorPageLoadCallback(err) {
      //console.log('catch:', err);
      $rootScope.pageTitle = 'Page not Found: 404';
      vm.isLoading = false;
      vm.pageError = true;
      vm.pageContent = {
        title: 'Something doesn\'t add up here...',
        body: '<h4>There seems to be an error on this page.</h4> <ul> <li>If you followed a link to get here,' +
        ' it must be broken. Please <a href="/about-aat/contact-aat">contact us</a> ' +
        'and we\'ll fix it.</li> <li>If you typed in the address, ' +
        'please check you typed it in correctly.</li> </ul>'
      };
    }

    function PostType(post) {
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

    function PostTabs(tabidarray) {
      var Tabs = [];
      function successTabsDetails(response) {
        Tabs.push(new PostType(response));
      }
      for (var tb = 0; tb < tabidarray.length; tb++) {
        nodeService.getPage(tabidarray[tb].nid, '', true).then(successTabsDetails);
      }
      return Tabs;
    }

  }

}());

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
