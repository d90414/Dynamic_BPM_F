'use strict';

angular.module('ASS.index').controller('ProcessinstanceCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService','myConfirm',
    function ($rootScope, $scope, $window, $state, myAlert,flowService,myConfirm) {
        flowService["getAllProcessInstance"]().then(function (data) {
                $scope.processInstance = data.data;
                if($scope.processInstance.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
            });

        $scope.delete = function(id){
           myConfirm("确定要删除流程实例吗？", function () {
                flowService["deleteProcessInstance"](id).then(function (data) {
                        console.log(data)
                        
                }); 
            });
         };


    }]);