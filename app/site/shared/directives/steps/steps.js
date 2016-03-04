//steps.js
/**
 * Created by David Breuer on 22/02/2016.
 *
 * @file steps.js
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.steps', [])
        .directive('stepsContent', stepsDirective);

    stepsDirective.$inject = [];

    /* @ngInject */
    function stepsDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/steps/steps.html',
            controller: stepsController,
            controllerAs: 'steps',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    stepsController.$inject = [];

    /* @ngInject */
    function stepsController() {

    }

})();

