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
    .module('node-service', [])
    .service('nodeService', nodeService);

  nodeService.$inject = ['$http', '$sce'];
  /* @ngInject */
  function nodeService($http, $sce) {
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
      return $http.get('pagedata.json', {nodeid: pageID})
        .then(function success(response) {
          var out = response.data[pageID];
          if (!response.data[pageID]) {
            return {
              data: {
                body: 'The page not found! <br/>Error: 404.',
                title: 'Something doesn\'t add up here...'
              }
            };
          }
          out.body = $sce.trustAsHtml(out.body);
          return out;
        });
    }
  }
})();

