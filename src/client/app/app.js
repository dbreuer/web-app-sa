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

  ]);
  // Precompile .tpls
  angular.module('templates', []);

}());
