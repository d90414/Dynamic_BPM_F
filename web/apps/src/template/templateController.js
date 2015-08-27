'use strict';

angular.module('ASS.template').controller('templateCtrl', ['$scope', '$window', '$state', '$localStorage', 'prdlistService', 'kibhSystem', 'adnotService', function ($scope, $window, $state, $localStorage, prdlistService, kibhSystem, adnotService) {
   
console.log('template');
   
    // 兼容IE
    $scope.initPlaceholder = function () {
        if ($.browser.msie && $.browser.version <= 9) {
            if ($.browser.version <= 8) $('label').removeClass('i-checks i-checks-sm i-checks-lg');
            $('input, textarea').placeholder();
        }
    };
}]);