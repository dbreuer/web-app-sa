'use strict';

describe('mobile-menu module', function() {
var $rootScope, element, $scope, $templateCache, $compile;
  beforeEach(function() {
    module('mobile-menu');
    element = angular.element('<mobile-menu/>');

    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $templateCache = $injector.get('$templateCache');
      $compile = $injector.get('$compile');
      $scope = $rootScope.$new();
      $templateCache.put('shared/directives/mobile-menu/mobile-menu.tpl.html',
        '<h1>mobile-menu</h1>');
      element = $compile(element)($scope);
      $scope.$digest();
      //mobileMenu = $injector.get('mobileMenu');
    });
  });

  describe('mobile-menu directive', function() {

    it('should element isActive defined', inject(function() {
      //spec body

      expect(element.isolateScope().isActive).toBeDefined();
      expect(element.isolateScope().isActive).toEqual(false);
    }));


    it('should element closeMenu defined', inject(function() {
      expect(element.isolateScope().toggleMenu).toBeDefined();
      element.isolateScope().toggleMenu();
      expect(element.isolateScope().isActive).toEqual(true);
      element.isolateScope().toggleMenu();
    }));


    it('should element closeMenu defined', inject(function() {
      expect(element.isolateScope().closeMenu).toBeDefined();
      element.isolateScope().closeMenu();
      expect(element.isolateScope().isActive).toEqual(false);
    }));

  });
});