'use strict';

describe('slideshow module', function() {
var element;
  beforeEach(function() {
    module('slideshow');
    element = angular.element('<slideshow-content/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('shared/directives/slideshow/slideshow.tpl.html',
        '<h1>slideshowContent</h1>');
      element = $compile(element)(scope);
      scope.$digest();
    });
  });

  describe('slideshow directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log(element);
    }));

  });
});