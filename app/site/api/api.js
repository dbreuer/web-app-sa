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

    .service('API', ["$http",  function ($http) {
        const API_BASE = 'http://localhost:9099';
        // Inject as service
        const userEndpoint = API_BASE + '/api/user';
        const searchEndpoint = API_BASE + '/api/search';
        const menuEndpoint = API_BASE + '/api/menu/';
        const pageEndpoint = API_BASE + '/api/page/';
        /**
         *
         * Perform Search
         *
         * @param term
         * @returns {*}
         */

        this.doSearch = function (term) {

            var route = 'search';
            var args = {
                term: term

            };

            return $http.get(searchEndpoint).then(function (response) {
                return response.data;
            });
        };



        /**
         *
         * Get User Detail
         *
         * @param id
         * @returns {HttpPromise}
         */

        this.getUser = function (id) {
            return $http.get(userEndpoint + '/' + id);
        };


        /**
         * Get menu object
         *
         */

        this.getMenu = function(menuid) {
            return $http.get(menuEndpoint + menuid);
        };

        /**
         * Get page object
         * @param {string|number} page id
         */

        this.getPageById = function(pageid, subpageid) {
            var page_path =pageEndpoint + pageid;
            if (subpageid) {
                page_path += '/'+subpageid;
            }
            return $http.get(page_path, {cache: true});
        };

        /**
         *
         * Get Movie Detail (example $http call using promises)
         *
         * @param term
         * @returns {{}}
         */
        this.fetchMovie = function (term) {

            var data = {};

            $http.get("http://www.omdbapi.com/?t=" + term + "&tomatoes=true&plot=full")
                .success(function(response) {
                    data.details = response;
                });

            $http.get("http://www.omdbapi.com/?s=" + term)
                .success(function(response) {
                    data.related = response;
                });


            return data;

        }



    }]);
