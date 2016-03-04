//spotlights.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file spotlights.js
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.spotlights', [])
        .directive('spotlightsContent', spotlightsDirective);

    spotlightsDirective.$inject = [];

    /* @ngInject */
    function spotlightsDirective() {
        var directive = {
            bindToController: true,
            templateUrl: 'site/shared/directives/spotlights/spotlights.html',
            replace: true,
            restrict: 'E'
        };
        return directive;
    }

})();

