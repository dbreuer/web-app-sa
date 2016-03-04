/***
 *
 * APP JS
 *
 * @file
 * This is the main application file and defines the scope for the project
 *
 */


'use strict';

// Declare app level module which depends on views, and components
angular.module('project', [

        // CORE
        'ngRoute',
        //'ngSanitize',
        'ngAnimate',
        'angular-jwt',
        'angular-storage',
        'formly',
        'formlyBootstrap',
        'ui.bootstrap',

        // SHARED
        'mobile-menu',
        'search-bar',
        'bookmarks',
        'meta',
        'menu',
        'landing-page',

        // CUSTOM
        'project.auth',
        'project.frontpage',
        'project.news',
        'project.about',
        'project.maintenance',
        'project.dashboard',
        'project.contact',
        'project.login',
        'project.auth',
        'project.user',
        'project.api',

        'shared'

    ])

    // App config
    .config([

        '$routeProvider',
        '$locationProvider',
        '$httpProvider',
        'jwtInterceptorProvider',

        function ($routeProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {

            // @todo - use the HTML5 History API (only set in the main app.js not individual routes...)
            // @todo - needs nginx proxy to rewrite request to index.html

            //if (window.history && window.history.pushState) {
            //    $locationProvider.html5Mode(true);
            //}

            //$httpProvider.interceptors.push('AuthInterceptor');
            $routeProvider.otherwise({redirectTo: '/frontpage'});

            // Add JWT Token to each request
            jwtInterceptorProvider.tokenGetter = function () {
                return localStorage.getItem('aat-auth-token');
            }
            $httpProvider.interceptors.push('jwtInterceptor');

        }])

    // Define App constants (ref env vars)
    .constant('API_URL', 'https://api.aat-sa-prod.elasticbeanstalk.com/')

    .run(appRun);

// Inject Deps
appRun.$inject = ['$rootScope', '$location', 'MetaDataService'];


/**
 *
 * App RUN scope
 *
 * @param $rootScope
 * @param $location
 *
 */

function appRun($rootScope, $location, MetaDataService) {

    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function (event, current, next) {

        // Page Title
        //$rootScope.pageTitle = MetaDataService.pageTitle();
        //$rootScope.metaDescription = MetaDataService.pageTitle();

        console.log("CURRENT -> " , current);
        console.log("NEXT -> " + next);

        // Check token
        var token = localStorage.getItem('aat-auth-token');

        if (current.access.requiresLogin == true) {

            //console.log("@RUN - " - token);

            if (!token) {
                console.log("REQUIRES Login + user has no JWT token...");
                event.preventDefault();
                $location.path("/login");
            }

        }

    });


    // Page Title
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        console.log(current.hasOwnProperty('$$route'));

        if (current.hasOwnProperty('$$route')) {
            $rootScope.pageTitle = current.$$route.pageTitle;
            $rootScope.metaDescription = current.$$route.metaDescription;
        }
    });



}
