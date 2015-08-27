'use strict';

angular.module('ASS.template').controller('templateCtrl', ['$rootScope','$scope','$http', function ($rootScope,$scope,$http) {
   
	console.log('template');
	$scope.jbpmBaseUrl = "http://localhost:18082/Dynamic_BPM";
	$scope.flowName = "two";
	$scope.userName = "aa";
	var data = {
		
	};

	//获取认证导航
	$http({
            method:"POST",
            url:$scope.jbpmBaseUrl+'/auth/tasks',
            params:{
               flowName:$scope.flowName,
			   userName:$scope.userName
            },
            data:{}
        }).success(function(data) {
            console.log(data);
        }).error(function(error) {
            console.log(error)
        });

    // 兼容IE
    $scope.initPlaceholder = function () {
        if ($.browser.msie && $.browser.version <= 9) {
            if ($.browser.version <= 8) $('label').removeClass('i-checks i-checks-sm i-checks-lg');
            $('input, textarea').placeholder();
        }
    };
}]);