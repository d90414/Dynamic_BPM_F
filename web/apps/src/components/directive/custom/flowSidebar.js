'use strict';

module.exports = angular.module('ASS.directive.flowSidebar', [])
    .directive('flowSidebar', ['$state', function ($state) {
        return {
            restrict: "A",
            replace: true,
            scope: {},
            templateUrl: 'apps/src/blocks/directivetpl/flowSidebar.html',
            link: function ($scope, ele, attrs, ngModelCtrl) {
                $scope.sideLinks = [{
                    name: '个人待办',
                    url: 'page.index.mytodo',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png)"
                    }
                }, {
                    name: '所有待办',
                    url: 'page.index.alltodo',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png) 0 -154px"
                    }
                }, {
                    name: '流程定义',
                    url: 'page.index.processdefinition',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png) 0 -110px"
                    }
                }, {
                    name: '流程实例',
                    url: 'page.index.processinstance',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png) 0 -176px"
                    }
                }, {
                    name: '用户中心',
                    url: 'page.index.users',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png) 0 -22px"
                    }
                }, {
                    name: '历史记录',
                    url: 'page.index.history',
                    iconUrl: {
                        width: "22px",
                        height: "22px",
                        background: "url(public/images/myaccount-icons2.png) 0 -44px"
                    }
                }];

                $scope.$state = $state;

                $scope.isActive = function (url) {
                    var classValue = false;
                    if (url == $state.current.name ||
                        (url == 'page.account.security.start' && $state.current.name.indexOf('page.account.security.') != -1) ||
                        (url == 'page.account.messages' && $state.current.name.indexOf('page.account.message') != -1) ||
                        (url == 'page.account.products' && $state.current.name.indexOf('page.account.product') != -1) ||
                        (url == 'page.account.info' && $state.current.name.indexOf('page.account.info') != -1) ||
                        (url == 'page.account.stockRiskTest({businessId: 106007})' && $state.current.name.indexOf('page.account.stockRiskTest') != -1)) {
                        classValue = true;
                    }
                    return classValue;
                };

                $scope.checkIfRefresh = function (url) {
                    if (url == $state.current.name) {
                        $state.reload();
                    }
                };
            }
        };
    }]);
