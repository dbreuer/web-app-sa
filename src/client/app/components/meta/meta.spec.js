//meta.spec.js
/**
 * Created by David Breuer on 20/06/2016.
 *
 * @file meta.spec.js
 * @description
 *
 */
describe('meta', function () {

  var MetaTagsProvider;
  var MetaTags;
  var $rootScope;

  beforeEach(function() {
    module('metatags');
  });

  beforeEach(function () {
    module(['MetaTagsProvider', function (_MetaTagsProvider) {
      MetaTagsProvider = _MetaTagsProvider; // to use the provider in other parts
      MetaTagsProvider.otherwise({title: 'mock title', description: 'heloo world'});

      MetaTagsProvider.when('/home', {title: 'mock title', description: 'heloo world' });
      MetaTagsProvider.getMetaTags('/home');

      MetaTagsProvider.when('/home/fake', {title: 'mock title', description: 'heloo world' });
      MetaTagsProvider.getMetaTags('/home/fake');

      MetaTagsProvider.when(':fakeparam', {});
      MetaTagsProvider.getMetaTags(':fakeparam');
      //
      //MetaTagsProvider.when('/fake');
    }]);
  });

  beforeEach(function () {
    inject(['MetaTags', function (_MetaTags, _$rootScope, _$location) {
      MetaTags = _MetaTags;    // to use the instance in other parts
      $rootScope = _$rootScope;
      $location = _$location;
    }]);
  });

  it('should be nodeService defined', function() {
    MetaTags.initialize();
  });

  //@todo: routScope $on test


});