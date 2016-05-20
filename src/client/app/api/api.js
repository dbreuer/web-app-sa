/**
 *
 * API Service
 *
 * @file internal API for the application
 *
 * @todo review / complete
 *
 */

angular.module('project.api', [])
  .service('API', ['$http', function($http) {
    const API_BASE = 'http://sa.aws.aat.org.uk/api/v1';
    // Inject as service
    const userEndpoint = API_BASE + '/api/user';
    const searchEndpoint = API_BASE + '/api/search';
    const menuEndpoint = API_BASE + '/api/menu/';
    const pageEndpoint = API_BASE + '/api/page/';
    const newsEndpoint = API_BASE + '/views/api_news';



    return {
      doSearch: doSearch,
      getUser: getUser,
      getMenu: getMenu,
      getPageById: getPageById,
      getNews: getNews,
    };

    /**
     *
     * Perform Search
     *
     * @param term
     * @returns {*}
     */

    function doSearch(term) {

      var route = 'search';
      var args = {
        term: term

      };

      return $http.get(searchEndpoint).then(function(response) {
        return response.data;
      });
    }

    /**
     *
     * Get User Detail
     *
     * @param id
     * @returns {HttpPromise}
     */

    function getUser(id) {
      return $http.get(userEndpoint + '/' + id);
    }

    /**
     * Get menu object
     *
     */

    function getMenu(menuid) {
      return $http.get(menuEndpoint + menuid);
    }

    /**
     *
     * @param params
     * @returns {HttpPromise}
     */
    function getNews(params) {

      return $http.get(newsEndpoint + params);
    }

    /**
     * Get page object
     * @param {string|number} page id
     */

    function getPageById(pageid, subpageid) {
      var pagePath = pageEndpoint + pageid;
      if (subpageid) {
        pagePath += '/' + subpageid;
      }
      return $http.get(pagePath, {cache: true});
    }

  }]);
