'use strict';

module.exports = angular.module('ASS.template', ['oc.lazyLoad'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/page/index');
        $urlRouterProvider.when('/', '/page/index');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'apps/src/template/404.html'
            }).state('page', {
                abstract: true,
                url: '/page',
                templateUrl: 'apps/src/template/kibh.html',
                controller: 'templateCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([ 'apps/src/template/templateController.js' ]);
                    }]
                }
            })
            .state('auth', {
                abstract: true,
                url: '/auth',
                templateUrl: 'apps/src/template/auth.html',
                controller: 'templateCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([ 'apps/src/template/templateController.js' ]);
                    }]
                }
            });
    }]);