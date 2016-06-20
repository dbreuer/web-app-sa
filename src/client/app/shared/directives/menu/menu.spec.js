'use strict';

describe('menu module', function() {
var $httpBackend, element, $scope, $rootScope, $templateCache, $compile, menuService;
  beforeEach(function() {
    module('menu');
    element = angular.element('<menu/>');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $templateCache = $injector.get('$templateCache');
      menuService = $injector.get('menuService');
      $compile = $injector.get('$compile');
      $scope = $rootScope.$new();
      $templateCache.put('shared/directives/menu/menu.tpl.html',
        '<h1>menu</h1>');
      element = $compile(element)($scope);
      $scope.$digest();
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('menu directive', function() {
    var menuListResponse = {'menu1': { data: [{name: 'elem1'}, {name: 'elem2'}]}}
    it('should MENU SERVICE API success', function () {
      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/menu')
        .respond(200, menuListResponse);

      menuService.api('/menu', 'GET', false);

      // make your actual test
      $httpBackend.flush();
    });

    it('should MENU SERVICE API error', function () {
      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/menu')
        .respond(500, menuListResponse);

      menuService.api('/menu', 'GET', true);
      menuService.api('/menu', 'GET');
      menuService.api('/menu');
      // make your actual test
      $httpBackend.flush();
    });

  });
});