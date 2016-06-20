'use strict';

describe('hero module', function() {
var element;
  beforeEach(function() {
    module('shared.hero');
    element = angular.element('<hero-content/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('site/shared/directives/hero/hero.html',
        '<h1>HERO</h1>');
      element = $compile(element)(scope);
      scope.$digest();
    });
  });

  describe('hero directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log(element);
    }));

  });
});