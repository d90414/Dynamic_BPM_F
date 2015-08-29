'use strict';

angular.module('ASS.template').controller('templateCtrl', ['$rootScope','$scope','$http', function ($rootScope,$scope,$http) {
   
    // 兼容IE
    $scope.initPlaceholder = function () {
        if ($.browser.msie && $.browser.version <= 9) {
            if ($.browser.version <= 8) $('label').removeClass('i-checks i-checks-sm i-checks-lg');
            $('input, textarea').placeholder();
        }
    };
}]);