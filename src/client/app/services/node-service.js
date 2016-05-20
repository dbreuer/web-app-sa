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

  nodeService.$inject = ['$http', '$sce', '$q'];
  /* @ngInject */
  function nodeService($http, $sce, $q) {
    var settings = {};
    settings.apiBase = 'http://sa.aws.aat.org.uk/api/v1';
    var pages = {};
    /**
     * Menu Items
     */
    return {
      $get: isExist,
      api: api,
      getPage: getPage
    };

    function api(endpoint, method, cache, params, data, headers) {
      var deferred = $q.defer();

      $http({
        url: settings.apiBase + endpoint,
        method: method ? method : 'GET',
        params: params,
        data: data,
        headers: headers,
        cache: cache ? cache : false,
        withCredentials: false
      })
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function isExist(params) {
      return true;
    }

    function getPage(parent, slug) {
      var pageID = getNodeIDBySlug(parent, slug);
      return this.api('/node/' + pageID, 'GET', true);
    }
  }

  function getNodeIDBySlug(parent, slug) {
    var pageMap = {
      'qualifications': {
        'accounting-qualification': 20072,
        'level3': 20068,
        'level4': 20082,
        'level5': 20088,
        'assessed': 20089,
        'how-long': 20090,
        'fees': 20091,
        'student-membership': 20094
      },
      'employers': {
        'business-training': 20100,
        'staff-membership': 20069,
        'learnerships': 20101,
        'level3': 20108,
        'level4': 20113,
        'level5': 20117,
        'lgac': 20123,
        'lgaac-fet': 20135
      }
    };
    if (!pageMap[parent]) {
      return false;
    }
    return pageMap[parent][slug];
  }
})();

