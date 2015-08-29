'use strict';

angular.module('ASS.index').controller('HistoryCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
         flowService["getAllHistoryTask"]().then(function (data) {
                $scope.historyTask = data.data;
                if($scope.historyTask.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
            });
    }]);