//component
/**
 * Created by David Breuer on 23/02/2016.
 *
 * @file component
 * @description
 *
 */
(function () {
    'use strict';

    angular
        .module('shared.component', [])
        .directive('component', component);

    component.$inject = ['$compile', '$timeout'];

    /* @ngInject */
    function component($compile, $timeout) {
        console.log(scope);
        var directive = {
            link: link,
            bindToController: true,
            replace: true,
            restrict: 'E',
            scope: {
                type: '=',
                section: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

