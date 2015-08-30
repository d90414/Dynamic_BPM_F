'use strict';

module.exports = angular.module('ASS.directive.bpmNavbar', [])
    .directive('bpmNavbar', [function () {
        return {
            restrict: "A",
            scope: true,
            templateUrl: 'apps/src/blocks/directivetpl/bpmNavbar.html',
            link: function ($scope, ele, attrs) {	
            }
        };
    }]);