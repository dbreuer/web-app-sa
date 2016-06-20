describe('NodeController', function() {

  var $controller, $injector, $rootScope, $scope, $httpBackend, $q, $routeParams;

  // load main app module
  beforeEach(module('project'));


  beforeEach(inject(function(_$controller_, _$injector_) {
    $controller = _$controller_;
    $injector = _$injector_;
    $rootScope = $injector.get('$rootScope');
    $routeParams = $injector.get('$routeParams');
    $scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    $q = $injector.get('$q');
  }));

  describe('instance', function() {
    it('should be defined', function() {
      var controller = $controller('NodeController', {$scope: {}});
      expect(controller).toBeDefined();
    });

    it('should be defined', function() {
      var controller = $controller('NodeController', {$scope: $scope});
      spyOn(controller, 'init').and.callThrough();
      controller.init();
      expect(controller.init).toHaveBeenCalled();
    });

    it('should be PostType', function() {
      var controller = $controller('NodeController', {$scope: $scope});
      var postMock = {body: {und:[{value: 'value'}]}, title: 'mock title', slug: 'slug', created: Math.round(new Date().getTime()/1000), field_news_photos: []};

      spyOn(controller, 'PostType').and.callThrough();
      var article = new controller.PostType(postMock);
      expect(controller.PostType).toHaveBeenCalled();
    });

    it('should be PostTabs', function() {
      var controller = $controller('NodeController', {$scope: $scope});
      var tabidarrayMock = [{nid: 1234}, {nid: 2345}];

      spyOn(controller, 'PostTabs').and.callThrough();
      var tab = new controller.PostTabs(tabidarrayMock);
      expect(controller.PostTabs).toHaveBeenCalled();
    });
  });

  describe('httpBackend', function() {

    var singPostResponse = {body: {und: [{id: 20082}]}, field_page_signpost: {und: []}, field_tabs_page_signpost: {und: []}, field_tabs_page_tab_items: {und: []}};
    var tabPostResponse = {body: {und: [{id: 20082}]}, field_page_signpost: {und: []}, field_tabs_page_signpost: {und: []}, field_tabs_page_tab_items: {und: []}};

    beforeEach(function(){
      //console.log('Node HTTP:\r\n');
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should pageLoadContent success', function () {
      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20070')
        .respond(200, singPostResponse);
      var controller = $controller('NodeController', {$scope: $scope, $rootScope: $rootScope, $routeParams: $routeParams});
      $routeParams.sectionID = 'about';
      $routeParams.nodeID = 'what-we-do';
      controller.init();
      //$httpBackend.expectGET('http://sa.aws.aat.org.uk/api/v1/node/20070');
      // make your actual test
      $httpBackend.flush();
    });

    it('should pageLoadContent success sign post links', function () {
      singPostResponse.field_page_signpost.und = [{url: '/hello'}];

      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20070')
        .respond(200, singPostResponse);
      var controller = $controller('NodeController', {$scope: $scope, $rootScope: $rootScope, $routeParams: $routeParams});
      $routeParams.sectionID = 'about';
      $routeParams.nodeID = 'what-we-do';
      controller.init();
      //$httpBackend.expectGET('http://sa.aws.aat.org.uk/api/v1/node/20070');
      // make your actual test
      $httpBackend.flush();
    });

    it('should pageLoadContent success sign tabs links', function () {
      singPostResponse.field_tabs_page_signpost.und = [{url: '/hello'}];

      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20070')
        .respond(200, singPostResponse);
      //$httpBackend.expectGET('http://sa.aws.aat.org.uk/api/v1/node/20070');
      var controller = $controller('NodeController', {$scope: $scope, $rootScope: $rootScope, $routeParams: $routeParams});
      $routeParams.sectionID = 'about';
      $routeParams.nodeID = 'what-we-do';
      controller.init();

      // make your actual test
      $httpBackend.flush();
    });

    it('should pageLoadContent success tabs page', function () {
      singPostResponse.field_tabs_page_tab_items.und = [{nid: '1234'}];
      singPostResponse.field_tabs_page_tab_style = {und: [{value: 'tab_style'}]};
      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20070')
        .respond(200, singPostResponse);
      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/1234')
        .respond(200, tabPostResponse);
      //$httpBackend.expectGET('http://sa.aws.aat.org.uk/api/v1/node/20070');
      var controller = $controller('NodeController', {$scope: $scope, $rootScope: $rootScope, $routeParams: $routeParams});
      $routeParams.sectionID = 'about';
      $routeParams.nodeID = 'what-we-do';
      controller.init();


      // make your actual test
      $httpBackend.flush();
    });

    it('should pageLoadContent error', function () {

      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20070')
        .respond(500);
      //$httpBackend.expectGET('http://sa.aws.aat.org.uk/api/v1/node/20070');
      $routeParams.sectionID = 'about';
      $routeParams.nodeID = 'what-we-do';
      var controller = $controller('NodeController', {$scope: $scope});
      controller.init();

      // make your actual test
      $httpBackend.flush();
    });

  });

});
