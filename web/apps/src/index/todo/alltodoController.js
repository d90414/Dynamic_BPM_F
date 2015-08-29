'use strict';

angular.module('ASS.index').controller('AlltodoCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        flowService["getAllTodo"]().then(function (data) {
                $scope.tasks = data.data;
                if($scope.tasks.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
            });
    }]);