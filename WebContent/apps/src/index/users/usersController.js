'use strict';

angular.module('ASS.index').controller('UsersCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService','myConfirm',
    function ($rootScope, $scope, $window, $state, myAlert,flowService,myConfirm) {
        flowService["getAllUser"]().then(function (data) {
                $scope.users = data.data;
                if($scope.users.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
        });
        $scope.delete = function(id){
           myConfirm("确定要删除流程用户吗？", function () {
                flowService["deleteUser"](id).then(function (data) {
                        console.log(data)
                        $state.reload();
                }); 
            });
         };

    }]);