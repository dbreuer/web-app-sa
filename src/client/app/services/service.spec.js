//service.spec.js
/**
 * Created by David Breuer on 17/06/2016.
 *
 * @file service.spec.js
 * @description
 *
 */
describe('Services', function() {

  var $rootScope, $controller, nodeService, NewsService,menuService, $scope, $http;

  // load main app module

  beforeEach(function() {
    module('node-service');
    module('project');
    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $controller = $injector.get('$controller');
      nodeService = $injector.get('nodeService');
      NewsService = $injector.get('NewsService');
      menuService = $injector.get('menuService');
      $scope = $rootScope.$new();
    });
  });

  describe(' Node ', function() {
    it('should be nodeService defined', function() {
      var controller = $controller('NodeController', {$scope: $scope, nodeService: nodeService});
      nodeService.$get();
      expect(nodeService.$get).toBeDefined();
    });

    it('should be nodeService api defined', function() {
      spyOn(nodeService, 'api').and.callThrough();
      nodeService.api();
      expect(nodeService.api).toBeDefined();
    });
  });

  describe(' News ', function() {
    it('should be newsService api defined', function() {
      var controller = $controller('NodeController', {$scope: $scope, NewsService: NewsService});
      spyOn(NewsService, 'api').and.callThrough();
      NewsService.api();
      NewsService.getAllNews();
      expect(NewsService.api).toBeDefined();
    });

  });

  describe(' Menu ', function() {
    it('should be menuService api defined', function() {
      var controller = $controller('NodeController', {$scope: $scope, menuService: menuService});
      var menuApi = menuService.api('/menu', 'GET', false);
      expect(menuService.api).toBeDefined();
      menuApi.then(function(data){
        expect(data).toBeDefined();
      });
    });

    it('should be menuService getMenu defined', function() {
      var controller = $controller('NodeController', {$scope: $scope, menuService: menuService});
      var menu = null;
      spyOn(menuService, 'getMenu').and.callThrough();
      menu = menuService.getMenu('qualifications');
      expect(menu).toBeDefined();
    });

    it('should be menuService setMenu defined', function() {
      var controller = $controller('NodeController', {$scope: $scope, menuService: menuService});
      spyOn(menuService, 'setMenu').and.callThrough();
      menuService.setMenu({qualifications: 1});
      expect($rootScope.menu).toBeDefined();
    });

  });
});