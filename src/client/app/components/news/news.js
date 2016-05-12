/**
 *
 * News Module
 *
 * @file Simple page component to surface news content from the API
 *
 */

(function() {

  'use strict';

  angular.module('project.news', ['ngRoute'])

    //
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/news', {
        pageTitle: 'News',
        templateUrl: 'components/news/news.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    //
    .controller('NewsController', NewsController);

  NewsController.$inject = [];

  /**
   *
   * News Controller
   *
   * @param {object} $http
   * @constructor
   */
  function NewsController(NewsDataService) {

    var vm = this;

    vm.term = 'News data';
    vm.news = [];
    vm.listings = [];

  }

}());
