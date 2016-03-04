//secondary-cta
/**
 * Created by David Breuer on 22/02/2016.
 *
 * @file secondary-cta
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.secondary-cta', [])
        .directive('sctaContent', sctaDirective);

    sctaDirective.$inject = [];

    /* @ngInject */
    function sctaDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/secondary-cta/secondary-cta.html',
            controller: sctaController,
            controllerAs: 'cta',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    sctaController.$inject = [];

    /* @ngInject */
    function sctaController() {

    }

})();

