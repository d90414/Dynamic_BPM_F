'use strict';

angular.module('ASS.index').controller('ProcessdefinitionCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService','myConfirm',
    function ($rootScope, $scope, $window, $state, myAlert,flowService,myConfirm) {
         flowService["getAllProcessDefinition"]().then(function (data) {
                $scope.processDefinition = data.data;
                if($scope.processDefinition.length == 0){
                	$scope.showType = '-01';
                }else{
					$scope.showType = '1';
                }
            });

         $scope.delete = function(id){
           myConfirm("确定要删除流程定义吗？", function () {
                flowService["deleteProcessDefinition"](id).then(function (data) {
                        console.log(data)
                        $state.reload();
                }); 
            });
         };
    }]);