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
    var errorMessage = {
      title: 'Something doesn\'t add up here...',
      body: '<h4>There seems to be an error on this page.</h4> <ul> <li>If you followed a link to get here,' +
      ' it must be broken. Please <a href="/about-aat/contact-aat">contact us</a> ' +
      'and we\'ll fix it.</li> <li>If you typed in the address, ' +
      'please check you typed it in correctly.</li> </ul>'
    };

    var vm = this;
    vm.pageContent = {};
    vm.isLoading = true;
    vm.news = [];
    vm.newsSinglePost = {};
    vm.currentPage = 0;
    vm.limit = 5;

    $rootScope.menu = menuService.getMenu('news');
    $rootScope.params = {
      limit: 5,
      steps: 5,
      page: 0,
      hasNext: false,
      hasMore: true
    };

    vm.getNewsListing = getNewsListing;
    vm.getSinglePost = getSinglePost;
    vm.goToNews = goToNews;
    vm.nextPage = nextPage;
    vm.prevPage = prevPage;
    vm.showMore = showMore;

    function getNewsListing() {
      NewsService.getAllNews({page: $rootScope.params.page, limit: $rootScope.params.limit})
        .then(function(response) {
          vm.news = response;
          vm.isLoading = false;
          NewsService.getAllNews({page: $rootScope.params.page + 1})
            .then(function(response) {
              $rootScope.params.hasNext = (response.length > 0) ? true : false;
              $rootScope.params.hasMore =
                (response.length > 0 && vm.news.length >= $rootScope.params.limit) ? true : false;
            })
            .catch(function(err) {
              console.log('catch:', err);
              $rootScope.pageTitle = 'Page not Found: 404';
              vm.isLoading = false;
              vm.pageError = true;
              vm.pageContent = errorMessage;
            });
        })
        .catch(function(err) {
          console.log('catch:', err);
          $rootScope.pageTitle = 'Page not Found: 404';
          vm.isLoading = false;
          vm.pageError = true;
          vm.pageContent = errorMessage;
        });
    }

    function getSinglePost() {
      if (!$rootScope.nodeid) {
        $location.path('/news');
      }
      NewsService.getNews($rootScope.nodeid)
        .then(function(response) {
          vm.newsSinglePost = new PostType(response);
          if (response.field_news_photos.length > 0) {/* jshint ignore:line */
            vm.newsSinglePost.images = new PostImages(response.field_news_photos.und);/* jshint ignore:line */
          }
          vm.isLoading = false;
        })
        .catch(function(err) {
          console.log('catch:', err);
          $rootScope.pageTitle = 'Page not Found: 404';
          vm.isLoading = false;
          vm.pageError = true;
          vm.pageContent = errorMessage;
        });
    }

    function goToNews(nodeid, slug) {
      $rootScope.nodeid = nodeid;
      $location.path('/news/' + slug);
    }

    function nextPage() {
      if ($rootScope.params.hasNext) {
        $rootScope.params.page += 1;
      }
      $rootScope.params.limit = 5;
      getNewsListing();
      console.log($rootScope.params);
    }

    function prevPage() {
      if ($rootScope.params.page > 0) {
        $rootScope.params.page -= 1;
      }
      $rootScope.params.limit = 5;
      getNewsListing();
      console.log($rootScope.params);
    }

    function showMore() {
      if ($rootScope.params.page > 0) {
        $rootScope.params.limit = $rootScope.params.page * $rootScope.params.limit;
        $rootScope.params.page = 0;
      } else {
        $rootScope.params.limit += 5;
      };
      getNewsListing();
      console.log($rootScope.params);
    }

  }

  function PostImages(images) {
    var out = [];
    for (var im = 0; im < images.length; im++) {
      out.push('<img src="http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/' +
        'styles/news_thumb/public/' + images[im].filename + '?itok=Mmd7w4oG" alt="' + images[im].alt + '" />');
    }
    return out[0];
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
