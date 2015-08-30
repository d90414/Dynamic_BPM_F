'use strict';

var login = angular.module('ASS.login', ['ui.router', 'oc.lazyLoad']);

login.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('auth.login', {
            url: '/login',
            templateUrl: 'apps/src/login/main.html',//template: require('./main.html'),
            controller: 'LoginCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([ 'apps/src/login/controller.js' ]);
                }]
            }
        })
}]);

module.exports = login;