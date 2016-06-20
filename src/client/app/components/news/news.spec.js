describe('NewsController', function() {

  var $rootScope, $controller, $httpBackend,$q, NewsSrv, MenuSrv, $scope, expectedResponse, vm;

  // load main app module
  var mockEmployee = {success: {
    elements: [1, 2, 3]
  }};

  beforeEach(function() {
    module('ngProgress');
    module('project');
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $controller = $injector.get('$controller');

      $q = $injector.get('$q');

      NewsSrv = $injector.get('NewsService');
      //MenuSrv = $injector.get('menuService');
      $scope = $rootScope.$new();
    });
  });

  afterEach(function() {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });

  describe('instance', function() {

    beforeEach(function() {
      $httpBackend.expect('GET', 'http://sa.aws.aat.org.uk/api/v1/views/api_news?limit=5&page=0');
      $httpBackend.whenGET('http://sa.aws.aat.org.uk/api/v1/views/api_news?limit=5&page=0').respond({
        success: {
          elements: [1, 2, 3]
        }
      });

      $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20237')
        .respond(200, {success: true});

      // causes the http requests which will be issued by myService to be completed synchronously, and thus will process the fake response we defined above with the expectGET
      //$httpBackend.flush();
    });

    it('should be defined', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      expect(controller).toBeDefined();
    });

    it('should be getNewsListing', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'getNewsListing').and.callThrough();
      controller.getNewsListing();
      expect(controller.getNewsListing).toHaveBeenCalled();
      expect(controller.news).toBeDefined();
    });


    it('should be getSinglePost', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'getSinglePost').and.callThrough();
      //$rootScope.nodeid = 20237;
      controller.getSinglePost();
      expect(controller.getSinglePost).toHaveBeenCalled();
    });

    it('should be goToNews', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'goToNews').and.callThrough();
      controller.goToNews();
      expect(controller.goToNews).toHaveBeenCalled();
    });

    it('should be nextPage', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'nextPage').and.callThrough();
      controller.nextPage();
      expect(controller.nextPage).toHaveBeenCalled();
    });

    it('should be nextPage and has next', function() {
      var controller = $controller('NewsController', {$scope: $scope, $rootScope: $rootScope});
      spyOn(controller, 'nextPage').and.callThrough();
      $rootScope.params.hasNext = true;
      controller.nextPage();
      expect(controller.nextPage).toHaveBeenCalled();
    });

    it('should be prevPage', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'prevPage').and.callThrough();
      controller.prevPage();
      expect(controller.prevPage).toHaveBeenCalled();
    });


    it('should be prevPage and has prev', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'prevPage').and.callThrough();
      $rootScope.params.page = 1;
      controller.prevPage();
      expect(controller.prevPage).toHaveBeenCalled();
    });

    it('should be showMore', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'showMore').and.callThrough();
      controller.showMore();
      expect(controller.showMore).toHaveBeenCalled();
    });

    it('should be showMore has more page', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'showMore').and.callThrough();
      $rootScope.params.page = 1;
      controller.showMore();
      expect(controller.showMore).toHaveBeenCalled();
    });

    it('should be PostImages', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      var mockImages = [
        {filename: 'img.png', alt: 'alt text'}, {filename: 'img2.png', alt: 'alt text 2'}
      ];

      spyOn(controller, 'PostImages').and.callThrough();
      var images = new controller.PostImages(mockImages);
      expect(controller.PostImages).toHaveBeenCalled();
    });

    it('should be PostType', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      var postMock = {body: {und:[{value: 'value'}]}, title: 'mock title', slug: 'slug', created: Math.round(new Date().getTime()/1000), field_news_photos: []};

      spyOn(controller, 'PostType').and.callThrough();
      var article = new controller.PostType(postMock);
      expect(controller.PostType).toHaveBeenCalled();
    });

    it('should be PostType with images', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      var postMock = {
        body: {
          und: [
            {value: 'value'}
          ]
        },
        title: 'mock title',
        slug: 'slug',
        created: Math.round(new Date().getTime() / 1000),
        field_news_photos: [
          {
            und: [
              {filename: 'img.png', alt: 'alt text'},
              {filename: 'img2.png', alt: 'alt text 2'}
            ]
          }
        ]
      };

      spyOn(controller, 'PostType').and.callThrough();
      var article = new controller.PostType(postMock);
      expect(controller.PostType).toHaveBeenCalled();
    });


    it('should be convertToSlug', function() {
      var controller = $controller('NewsController', {$scope: $scope});
      spyOn(controller, 'convertToSlug').and.callThrough();
      var slug = controller.convertToSlug('Hello world 2016');
      expect(controller.convertToSlug).toHaveBeenCalled();
      expect(slug).toEqual('hello-world-2016');
    });
  });

  describe('httpBackend', function() {
    var newsPostResponse = {body:{und: [{id: 20237}]}, field_news_photos: {und: []}};
    var newsPostWithImagesResponse = {body:{und: [{id: 20237}]}, field_news_photos: {und: [{filename: 'img.png', alt: 'alt text'}, {filename: 'img2.png', alt: 'alt text 2'}]}};
    var newListResponse = {success: true};
    beforeEach(function(){
      //console.log('news HTTP:\r\n');

    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });



      it('should getNewsListing success', function () {
        $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/views/api_news?limit=5&page=0')
          .respond(200, newListResponse);

        var controller = $controller('NewsController', {$scope: $scope});
        controller.getNewsListing({limit: 10, page: 2 });

        // make your actual test
        $httpBackend.flush();
      });


      it('should getNewsListing error', function () {
        $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/views/api_news?limit=5&page=0')
          .respond(500);
        var controller = $controller('NewsController', {$scope: $scope});
        controller.getNewsListing();

        // make your actual test
        $httpBackend.flush();
      });


      it('should getSinglePost success with images', function () {
        $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20237')
          .respond(200, newsPostWithImagesResponse);
        var controller = $controller('NewsController', {$scope: $scope, $rootScope: $rootScope});
        $rootScope.nodeid = 20237;
        controller.getSinglePost();

        // make your actual test
        $httpBackend.flush();
      });

      it('should getSinglePost success', function () {
        $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20082')
          .respond(200, newsPostResponse);
        var controller = $controller('NewsController', {$scope: $scope, $rootScope: $rootScope});
        $rootScope.nodeid = 20082;
        controller.getSinglePost();

        // make your actual test
        $httpBackend.flush();
      });

      it('should getSinglePost error', function () {
        $httpBackend.when('GET', 'http://sa.aws.aat.org.uk/api/v1/node/20082')
          .respond(500);
        $rootScope.nodeid = 20082;
        var controller = $controller('NewsController', {$scope: $scope});
        controller.getSinglePost();

        // make your actual test
        $httpBackend.flush();
      });

  });


});
