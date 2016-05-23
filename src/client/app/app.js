/**
 *
 * WEB APP SA
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @description Main angular application
 *
 * @namespace app
 *
 */

(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('project', [

      // CORE
      'ngRoute',
      'templates',
      'ngSanitize',
      'ngAnimate',
      'angular-jwt',
      'angular-storage',
      'slick',
      '720kb.socialshare',

      //'formly',
      //'formlyBootstrap',
      'ui.bootstrap',

      // SHARED
      'mobile-menu',
      //'search-bar',
      //'bookmarks',
      //'meta',
      'slideshow',
      'social',
      'menu',
      //'landing-page',
      'header',

      // CUSTOM
      'project.frontpage',
      'project.myaat',
      'project.news',
      'project.static-pages',
      'project.qualifications',
      'project.employers',
      'project.deliver',
      'project.membership',
      'project.about',
      'project.node'

  ])

  // App config
    .config([

      '$routeProvider',
      '$locationProvider',
      '$httpProvider',
      'jwtInterceptorProvider',
      '$sceProvider',

      function($routeProvider, $locationProvider, $httpProvider, jwtInterceptorProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        //$httpProvider.interceptors.push('AuthInterceptor');
        $routeProvider.otherwise({redirectTo: '/frontpage'});

        // Add JWT Token to each request
        jwtInterceptorProvider.tokenGetter = function() {
          return sessionStorage.getItem('auth-token');
        };

        $httpProvider.interceptors.push('jwtInterceptor');

      }])

    // Define App constants (ref env vars)
    .constant('API_URL', 'http://sa.aws.aat.org.uk/api/v1')
    .filter('slug',  function() {
      return function(input) {
        return input
          .toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');
      };
    })
    .run(appRun);

  // Inject Deps
  appRun.$inject = ['$route', '$rootScope', '$location'];

  /**
   *
   * App RUN scope
   *
   * @param {object} $rootScope
   * @param {object} $location
   *
   */

  function appRun($route, $rootScope, $location) {
    //var original = $location.path;
    //$location.path = function(path, reload) {
    //  if (reload === false) {
    //    var lastRoute = $route.current;
    //    var un = $rootScope.$on('$locationChangeSuccess', function() {
    //      $route.current = lastRoute;
    //      un();
    //    });
    //  }
    //  return original.apply($location, [path]);
    //};

    // register listener to watch route changes
    $rootScope.$on('$routeChangeStart', function(event, current, next) {

      // Page Title
      //$rootScope.pageTitle = MetaDataService.pageTitle();
      //$rootScope.metaDescription = MetaDataService.pageTitle();

      // Check token
      var token = localStorage.getItem('auth-token');

      if (current.access && current.access.requiresLogin === true) {

        if (!token) {
          console.log('REQUIRES LOGIN');
          event.preventDefault();
          $location.path('/login');
        }

      }

    });

    // Page Title
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

      //console.log(current.hasOwnProperty('$$route'));

      if (current.hasOwnProperty('$$route')) {
        $rootScope.pageTitle = current.$$route.pageTitle;
        $rootScope.metaDescription = current.$$route.metaDescription;
      }
    });

  }

  // Precompile .tpls
  angular.module('templates', []);

}());
