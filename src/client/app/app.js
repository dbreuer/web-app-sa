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
      'ngProgress',
      'spinner',

      //'formly',
      //'formlyBootstrap',
      'ui.bootstrap',

      // SHARED
      'mobile-menu',
      //'search-bar',
      //'bookmarks',
      'metatags',
      'slideshow',
      'spotlights',
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
      'MetaTagsProvider',

      function($routeProvider, $locationProvider, $httpProvider, jwtInterceptorProvider,
                $sceProvider, MetaTagsProvider) {

        MetaTagsProvider
          .when('/:page', {
            title: 'AAT (SA) | The professional body for accounting technicians',
            description: 'The Association of Accounting Technician\'s web site with information about' +
            ' the Association, benefits of membership, and student information.',
            keywords: 'accontant, qualifications, bookkeeping, computerised, membership, professional, ' +
            'training providers, case study',
            fb_title: 'AAT | The professional body for accounting technicians',
            fb_site_name: 'AAT South Africa',
            fb_url: 'http://sa.aws.aat.org.uk',
            fb_description: 'The Association of Accounting Technician\'s web site with information about' +
            ' the Association, benefits of membership, and student information.',
            fb_type: 'Educational Organization',
            fb_image: 'fb_share_image.jpg'
          })
          .when('/:page/:subpage', {
            title: 'AAT (SA) | The professional body for accounting technicians',
            description: 'The Association of Accounting Technician\'s web site with information about' +
            ' the Association, benefits of membership, and student information.',
            keywords: 'accontant, qualifications, bookkeeping, computerised, membership, professional, ' +
            'training providers, case study',
          });

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
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');
      };
    })
    .run(appRun);

  // Inject Deps
  appRun.$inject = ['$route', '$rootScope', '$location', 'ngProgressFactory', 'MetaTags'];

  /**
   *
   * App RUN scope
   *
   * @param {object} $rootScope
   * @param {object} $location
   *
   */

  function appRun($route, $rootScope, $location, ngProgressFactory, MetaTags) {
    // Initialise metaTagsProvider
    MetaTags.initialize();
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
    $rootScope.progressbar = ngProgressFactory.createInstance();
    $rootScope.progressbar.setColor('#00746f');
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
