'use strict';

describe('shared 404 module', function() {
var element;
  beforeEach(function() {
    module('shared.404');
    element = angular.element('<page-not-found/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('shared/directives/404/404.html',
        '<h1>404</h1>');
      element = $compile(element)(scope);
      scope.$digest();
    });
  });

  describe('404 directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log(404);
    }));

  });
});