'use strict';
module.exports = angular.module('ASS.index', ['ui.router', 'oc.lazyLoad'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('page.index', {
            abstract: true,
            url: '/index',
            templateUrl: 'apps/src/index/main.html',
            controller: 'IndexCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([ 'apps/src/index/controller.js' ]);
                }]
            },
            ncyBreadcrumb: {
                label: '首页'
            }
        })
        .state('page.index.mytodo', {
            url: '/mytodo',
            templateUrl: 'apps/src/index/todo/mytodo.html',
            controller: 'MytodoCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/todo/mytodoController.js']);
                }]
            }
        })
        .state('page.index.alltodo', {
            url: '/alltodo',
            templateUrl: 'apps/src/index/todo/alltodo.html',
            controller: 'AlltodoCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/todo/alltodoController.js']);
                }]
            }
        })
        .state('page.index.processdefinition', {
            url: '/processdefinition',
            templateUrl: 'apps/src/index/processdefinition/processdefinition.html',
            controller: 'ProcessdefinitionCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/processdefinition/processdefinitionController.js']);
                }]
            }
        })
        .state('page.index.processinstance', {
            url: '/processinstance',
            templateUrl: 'apps/src/index/processinstance/processinstance.html',
            controller: 'ProcessinstanceCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/processinstance/processinstanceController.js']);
                }]
            }
        })
        .state('page.index.users', {
            url: '/users',
            templateUrl: 'apps/src/index/users/users.html',
            controller: 'UsersCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/users/usersController.js']);
                }]
            }
        })
        .state('page.index.history', {
            url: '/history',
            templateUrl: 'apps/src/index/history/history.html',
            controller: 'HistoryCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['apps/src/index/history/historyController.js']);
                }]
            }
        });
}]);