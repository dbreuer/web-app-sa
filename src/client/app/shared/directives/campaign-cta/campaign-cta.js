//campaign-cta.js
/**
 * Created by David Breuer on 22/02/2016.
 *
 * @file campaign-cta.js
 *
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.campaign-cta', [])
        .directive('cctaContent', cctaDirective);

    cctaDirective.$inject = [];

    /* @ngInject */
    function cctaDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/campaign-cta/campaign-cta.html',
            controller: cctaController,
            controllerAs: 'cta',
            link: link,
            restrict: 'AEC',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    cctaController.$inject = [];

    /* @ngInject */
    function cctaController() {

    }

})();

