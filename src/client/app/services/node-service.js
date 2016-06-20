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

  nodeService.$inject = ['$http', '$sce', '$q', '$rootScope'];
  /* @ngInject */
  function nodeService($http, $sce, $q, $rootScope) {
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
        .success(_successAPICallback)
        .error(_errorAPICallback);

      function _successAPICallback(data) {
        $rootScope.progressbar.complete();
        deferred.resolve(data);
      }

      function _errorAPICallback(data) {
        $rootScope.progressbar.stop();
        deferred.reject(data);
      }

      return deferred.promise;
    }



    function isExist(params) {
      return true;
    }

    function getPage(parent, slug, hasParent) {
      /* jshint validthis: true */

      var pageID = getNodeIDBySlug(parent, slug);
      if (hasParent) {
        pageID = parent;
      }
      $rootScope.progressbar.start();
      return this.api('/node/' + pageID, 'GET', true);
    }
  }

  function getNodeIDBySlug(parent, slug) {
    var pageMap = {
      'myaat': {
        'about': 20130,
        'privacy': 20136,
        'cookies': 20137,
        'help': 179
      },
      'about': {
        'what-we-do': 20070,
        'contact-us': 20071,
        'terms-conditions': 20144
      },
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
      },
      'deliver': {
        'qualifications': 20124,
        'cba-venue': 20126,
        'marketing': 20181
      },
      'membership': {
        'about': 20096,
        'benefits': 20097,
        'apply': 20098,
        'cpd': 20146,
        'cpd--what-counts': 20148,
        'cpd--record': 20153,
        'cpd--resources': 20154,
        'professional-standards': 20226
      }
    };
    if (!pageMap[parent]) {
      return false;
    }
    return pageMap[parent][slug];
  }
})();

