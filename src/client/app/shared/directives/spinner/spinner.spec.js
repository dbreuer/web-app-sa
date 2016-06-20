'use strict';

describe('spinner module', function() {
var element;
  beforeEach(function() {
    module('spinner');
    element = angular.element('<spinner/>');

    inject(function ($rootScope, $compile, $templateCache) {
      var scope = $rootScope.$new();
      $templateCache.put('shared/directives/spinner/spinner.tpl.html',
        '<h1>spinner</h1>');
      element = $compile(element)(scope);
      scope.$digest();
    });
  });

  describe('spinner directive', function() {

    it('should ....', inject(function() {
      //spec body

      //console.log('spinner');
    }));

  });
});