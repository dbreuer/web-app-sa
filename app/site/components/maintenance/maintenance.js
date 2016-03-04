'use strict';

angular.module('project.maintenance', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/maintenance', {
            templateUrl: './site/components/maintenance/maintenance.tpl.html',
            controller: 'MaintenanceCtrl',
            controllerAs: 'vm'
        });
    }])

    .controller('MaintenanceCtrl', [function () {

    }]);