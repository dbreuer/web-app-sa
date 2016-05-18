/**
 * Created by David Breuer on 13/05/2016.
 *
 * @file menu-service.js
 * @description Menu service
 *
 */
(function() {
  'use strict';
  angular
    .module('page-service', [])
    .provider('pageServiceProvider', pageServiceProvider);

  pageServiceProvider.$inject = [];
  /* @ngInject */
  function pageServiceProvider() {
    var pages = {};
    /**
     * Menu Items
     */
    return {
      $get: isExist,
      getPage: getPage,
      setPage: setPage
    };

    function isExist(params) {
      if (pages[params.sectionID][params.nodeID]) {
        return true;
      }
      return false;
    }
    /**
     *
     * Get Menu
     *
     * @returns {items|{}}
     */
    function setPage(pageObject) {
      console.log('SET menu used ', pageObject);
      pages = angular.extend({}, pages, pageObject);
    }

    function getPage(pageID) {
      if ($rootScope && pages) {
        if (pages[pageID]) {
          return pages[pageID];
        }
        return {'error': 'Page does not exist at: ' + pageID};
      }
      return {'error': 'No Route Scope'};
    }
  }
})();

