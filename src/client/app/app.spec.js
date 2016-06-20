//app.spec.js
/**
 * Created by David Breuer on 20/06/2016.
 *
 * @file app.spec.js
 * @description
 *
 */
describe('App', function() {

  // load main app module
  var $locationProvider, $filter, MetaTags, ngProgressFactory, $rootScope, localStorage, token;

  beforeEach(function() {

    // Storage Mock
    function storageMock() {
      var storage = {};

      return {
        setItem: function(key, value) {
          storage[key] = value || '';
        },
        getItem: function(key) {
          return storage[key] || null;
        },
        removeItem: function(key) {
          delete storage[key];
        },
        get length() {
          return Object.keys(storage).length;
        },
        key: function(i) {
          var keys = Object.keys(storage);
          return keys[i] || null;
        }
      };
    }

    angular.module('locationProviderConfig', [])
      .config(function(_$locationProvider_) {
        $locationProvider= _$locationProvider_;
        spyOn($locationProvider, 'html5Mode');
      });
    module('locationProviderConfig');

    module('project', function ($provide) {
      $provide.value('MetaTags', {
        initialize: jasmine.createSpy()
      });

      //$provide.value('ngProgressFactory', {
      //  createInstance: jasmine.createSpy()
      //});
    });

    inject(function(_$filter_, _MetaTags_, _ngProgressFactory_, _$rootScope_, _localStorage_){
      $filter = _$filter_;
      MetaTags = _MetaTags_;
      ngProgressFactory = _ngProgressFactory_;
      $rootScope = _$rootScope_;
      localStorage = _localStorage_;
    });

    var store = {};
    window.localStorage = storageMock();



  });

  describe('config', function() {
    it('should be defined', function() {

      expect($locationProvider.html5Mode)
        .toHaveBeenCalledWith({
          enabled: true,
          requireBase: false
        });
    });
  });

  describe('constant', function() {
    it('should be defined', function() {
      //console.log($filter('slug'));
      expect($filter('slug')).toBeDefined();
    });
    it('should return true if the input is not equal to  or an empty array ',
      inject(function (slugFilter) {
        expect(slugFilter('HELLO')).toBeTruthy();
        //@todo: false handler
      })
    );
  });

  describe('appRun', function() {
    it('should initialize MetaTags service', function() {
      expect(MetaTags.initialize).toHaveBeenCalled();
    });
    //@todo: set color property
    //it('should initialize ngProgressFactory service', function() {
    //  expect(ngProgressFactory.createInstance).toHaveBeenCalled();
    //});

    it('should $routeChangeStart access false', function() {
      $rootScope.$broadcast('$routeChangeStart', {access: false});
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

    it('should $routeChangeStart access requires true', function() {
      $rootScope.$broadcast('$routeChangeStart', {access: {requiresLogin: true}});
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

    it('should $routeChangeStart access requires true', function() {
      spyOn(window.localStorage, 'getItem').and.callFake(function () {
        return true;
      });

      $rootScope.$broadcast('$routeChangeStart', {access: {requiresLogin: true}});

      spyOn($rootScope, '$broadcast').and.callThrough();
    });


    it('should $routeChangeSuccess access false', function() {
      $rootScope.$broadcast('$routeChangeSuccess', {});
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

    it('should $routeChangeSuccess access requires true', function() {
      $rootScope.$broadcast('$routeChangeSuccess', {$$route: {pageTitle: 'Mock title', metaDescription: 'mock description'}});
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

  });
});
