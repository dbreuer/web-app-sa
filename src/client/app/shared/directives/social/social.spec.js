'use strict';

describe('social module', function() {
var element, elementSecond;
  beforeEach(function() {
    module('social');
    element = angular.element('<social-content/>');
    elementSecond = angular.element('<social-share-buttons/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('shared/directives/social/social.tpl.html',
        '<h1>social</h1>');
      $templateCache.put('shared/directives/social/social-share-buttons.tpl.html',
        '<h1>social-share-buttons</h1>');
      element = $compile(element)(scope);
      elementSecond = $compile(elementSecond)(scope);
      scope.$digest();
    });
  });

  describe('social directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log(element);
      //console.log(elementSecond);
    }));

  });
});