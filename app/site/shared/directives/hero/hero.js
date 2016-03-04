//hero.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file hero.js
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.hero', [])
        .directive('heroContent', heroContentDirective);

    heroContentDirective.$inject = [];

    /* @ngInject */
    function heroContentDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/hero/hero.html',
            replace: true,
            restrict: 'E'
        };
        return directive;
    }

})();

