//news-service
/**
 * Created by David Breuer on 20/05/2016.
 *
 * @file news-service
 * @description News service
 *
 */
(function() {
  'use strict';

  angular.module('news-service', [])
    .service('NewsService', NewsService);

  NewsService.$inject = ['$http', '$q', '$rootScope'];
  /**
   * News API service
   * @param $http
   * @param $q
   * @returns {{api: api, getNews: getNews, getAllNews: getAllNews}}
   * @constructor
   */
  function NewsService($http, $q, $rootScope) {
    var settings = {};
    settings.apiBase = 'http://sa.aws.aat.org.uk/api/v1';
    settings.limit = 5;
    settings.page = 0;

    return {
      api: api,
      getNews: getNews,
      getAllNews: getAllNews
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
          $rootScope.progressbar.complete();
          deferred.resolve(data);
        })
        .error(function(data) {
          $rootScope.progressbar.stop();
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function getNews(news) {
      /* jshint validthis: true */
      $rootScope.progressbar.start();
      return this.api('/node/' + news, 'GET', true);
    }

    function getAllNews(params) {
      /* jshint validthis: true */
      $rootScope.progressbar.start();
      return this.api('/views/api_news', 'GET', true, {
        limit: (params && params.limit) ? params.limit : 5,
        page: (params && params.page) ? params.page : 0
      });
    }

  }

}());
