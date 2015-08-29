'use strict';

angular.module('ASS.index').controller('MytodoCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        flowService["getMyTodo"]($window.sessionStorage.sessionid).then(function (data) {
                $scope.tasks = data.data;
                if($scope.tasks.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
            });
    }]);