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
    const API_BASE = 'http://localhost:9099';
    // Inject as service
    const userEndpoint = API_BASE + '/api/user';
    const searchEndpoint = API_BASE + '/api/search';
    const menuEndpoint = API_BASE + '/api/menu/';
    const pageEndpoint = API_BASE + '/api/page/';



    return {
      doSearch: doSearch,
      getUser: getUser,
      getMenu: getMenu,
      getPageById: getPageById,
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
