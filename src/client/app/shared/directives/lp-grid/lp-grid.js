/***
 *
 * SEARCH BAR COMPONENT
 *
 * @file
 *  Provides the search bar functionality for the site, including directives
 *
 */

'use strict';

angular.module('search-bar', [])

  // Directives
  .directive('searchBar', searchBar);
/**
 *
 * SEARCH BAR Directive : Provides the search icon and the expanding functionality.
 *
 * @returns {{replace: boolean, restrict: string, template: string, link: link}}
 *
 */
function searchBar() {

  return {
    replace: true,
    restrict: 'AEC',
    templateUrl: 'site/shared/directives/search-bar/search-bar.tpl.html'
  }

}
