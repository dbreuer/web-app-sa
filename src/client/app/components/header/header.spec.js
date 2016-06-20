'use strict';

describe('header module', function() {

  beforeEach(module('header'));

  describe('header controller', function() {

    it('should ....', inject(function($controller) {
      //spec body
      var HeaderController = $controller('HeaderController');
      expect(HeaderController).toBeDefined();
    }));

    it('should toggleMenu', inject(function($controller) {
      //spec body
      var HeaderController = $controller('HeaderController');
      spyOn(HeaderController, 'toggleMenu').and.callThrough();
      HeaderController.toggleMenu();
      expect(HeaderController.toggleMenu).toHaveBeenCalled();
      HeaderController.toggleMenu();
      expect(HeaderController.toggleMenu).toHaveBeenCalled();
    }));

    it('should closeMenu', inject(function($controller) {
      //spec body
      var HeaderController = $controller('HeaderController');
      spyOn(HeaderController, 'closeMenu').and.callThrough();
      HeaderController.closeMenu();
      expect(HeaderController.closeMenu).toHaveBeenCalled();
    }));

  });
});