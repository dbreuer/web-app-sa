//module.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file module.js
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.module', [])
        .directive('moduleContent', moduleDirective);

    moduleDirective.$inject = [];

    /* @ngInject */
    function moduleDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/module/module.html',
            replace: true,
            restrict: 'AE'
        };
        return directive;
    }

})();

