/**
 *
 *
 * FRONTPAGE COMPONENT
 *
 * @file
 *
 *
 */

'use strict';

angular.module('project.frontpage', ['ngRoute', 'project.api'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/frontpage', {
            pageTitle: 'AAT - Welcome',
            templateUrl: './site/components/frontpage/frontpage.tpl.html',
            controller: 'FrontpageController',
            controllerAs: 'vm',
            access: {
                requiresLogin: false,
                roles: []
            }
        });
    }])


    .controller('FrontpageController', FrontpageController);


/**
 *
 * Controller
 *
 * @constructor
 */
function FrontpageController(API, $timeout) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    API.getPageById("frontpage", false)
        .then( function(response){
            console.log("get it", response.data.data);
            vm.pageContent = response.data.data;
            //$timeout(function(){vm.isPageLoading = false;}, 1000);
            vm.isPageLoading = false;
        }).catch( function(err){
        vm.isPageLoading = false;
        vm.pageContent = {"error": 500}
    });


}