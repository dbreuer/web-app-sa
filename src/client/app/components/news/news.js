// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

/**
 *
 * News Module
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @description News template component
 * @class app.news
 * @file Simple page component to surface news content from the API
 * @memberof app
 */
(function() {
  'use strict';

  angular.module('project.news', ['ngRoute', 'menu-service', 'news-service'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/news', {
        pageTitle: 'AAT - news',
        templateUrl: 'components/news/news.tpl.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });

      $routeProvider.when('/news/:slug', {
        pageTitle: 'AAT - news',
        templateUrl: 'components/news/news-single.tpl.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])
    .controller('NewsController', NewsController);
  // Inject Deps
  NewsController.$inject = ['menuService', '$http', '$location', '$routeParams',
    '$rootScope', '$scope', '$timeout', 'NewsService'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function NewsController(menuService, $http, $location, $routeParams, $rootScope, $scope, $timeout, NewsService) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    vm.nomore = false;
    vm.news = [];
    vm.newsSinglePost = {};
    vm.currentPage = 0;
    vm.limit = 5;
    $rootScope.params = {
      limit: 5,
      steps: 5,
      page: 0,
      maxpage: 0
    };

    vm.getNewsListing = getNewsListing;
    vm.getSinglePost = getSinglePost;
    vm.goToNews = goToNews;

    menuService.setMenu({
        'news': {
          'data': [
            {'name': 'News', 'url': '/news', 'id': 71},
            {
              'name': 'Voice of AAT(SA) blog',
              'url': 'http://www.voiceofaatsa.org.za/',
              'id': 72,
              external: true
            }
          ],
          'title': 'News',
          'class': 'sidebar__menu'
        }
      });

    function getNewsListing() {
      NewsService.getAllNews().then(function(response) {
        vm.news = response;
        vm.isPageLoading = false;
      });
    }

    function getSinglePost() {
      NewsService.getNews($rootScope.nodeid).then(function(response) {

        vm.newsSinglePost = new PostType(response);
        if (response.field_news_photos.length > 0) {/* jshint ignore:line */
          vm.newsSinglePost.images = new PostImages(response.field_news_photos.und);/* jshint ignore:line */
        }

        vm.isPageLoading = false;
      });
    }

    function goToNews(nodeid, slug) {
      $rootScope.nodeid = nodeid;
      $location.path('/news/' + slug);
    }

  }

  function PostImages(images) {
    var out = [];
    for (var im = 0; im < images.length; im++) {
      out.push('<img src="http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/' +
        'styles/news_thumb/public/' + images[im].filename + '?itok=Mmd7w4oG" alt="' + images[im].alt + '" />');
    }
    return out;
  }

  function PostType(post) {
    this.body = post.body.und[0].value;
    this.title = post.title;
    this.slug = post.slug;
    this.date = new Date(post.created * 1000);
    this.images = [];
    if (post.field_news_photos.length > 0) {/* jshint ignore:line */
      this.images = new PostImages(post.field_news_photos.und);/* jshint ignore:line */
    }

    return this;
  }

  function convertToSlug(Text) {
    return Text
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
  }

}());

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
