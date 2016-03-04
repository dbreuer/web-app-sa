//image.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file image.js
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.image', [])
        .directive('imageContent', imageDirective);

    imageDirective.$inject = [];

    /* @ngInject */
    function imageDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/image/image.html',
            replace: true,
            restrict: 'E'
        };
        return directive;
    }

})();

