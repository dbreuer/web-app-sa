'use strict';

describe('spotlights module', function() {
var element;
  beforeEach(function() {
    module('spotlights');
    element = angular.element('<spotlights-content/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('shared/directives/spotlights/spotlights.tpl.html',
        '<h1>spotlightsContent</h1>');
      element = $compile(element)(scope);
      scope.$apply();
    });
  });

  describe('spotlightsContent directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log('hello');
    }));

  });
});