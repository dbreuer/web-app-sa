describe('AboutController', function() {

  var $controller, $rootScope, $scope;

  // load main app module
  beforeEach(module('project'));

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
  }));

  describe('instance', function() {
    it('should be defined', function() {
      var controller = $controller('AboutController', {$scope: {}});
      expect(controller).toBeDefined();
    });
  });

});
