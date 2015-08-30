'use strict';

module.exports = angular.module('ASS.directive.flowTopbar', [])
    .directive('flowTopbar', [function () {
        return {
            restrict: "A",
            scope: true,
            templateUrl: 'apps/src/blocks/directivetpl/flowTopbar.html',
            link: function ($scope, ele, attrs, ngModelCtrl) {
            }
        };
    }]);