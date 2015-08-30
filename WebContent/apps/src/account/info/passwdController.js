'use strict';

angular.module('ASS.account').controller('PasswdCtrl', ['$rootScope', '$scope', '$window', '$state', 'accountService', 'myAlert','$http','bpmRoot','bpmService',
    function ($rootScope, $scope, $window, $state, accountService, myAlert,$http,bpmRoot,bpmService) {
       if(!$rootScope.flowName){
            $state.go("page.account.security.start");
            return;
        }
       $rootScope.userName = $window.sessionStorage.sessionid;
       $scope.flowTaskName = "密码验证";

        bpmService['getFlowNav']($rootScope.flowName,$rootScope.userName).then(function(res){
                    $scope.flowActive = res.data.active;
                    $scope.taskId = res.data.activeTaskId;
                    $scope.flowNav = res.data.activities;
                    if($scope.flowTaskName != $scope.flowActive){
                        nextPage($scope.flowActive)
                    }
        });
        
        ///下一步提交按钮
        $scope.doReply = function(){
              $http({
                method:"POST",
                url:bpmRoot+'/auth/reply',
                params:{
                    flowName: $rootScope.flowName,
                    userName:$rootScope.userName,
                    taskId:$scope.taskId
                },
                data:{}
            }).success(function(data) {
                console.log('replay:');
               console.log(data);
                var newTaskId = data.newTaskId;
                var end = data.end;
                 var url = data.url;
                if(end==false){
                  console.log('is not end');
                    nextPage(url)
                }else{
                  console.log('end');
                  $state.go('page.account.end');
                }

            }).error(function(error) {
                console.log(error)
            });
          }

        function nextPage(url){
          console.log('url:'+url);
            if(url=='密码验证'){
                $state.go('page.account.passwd');
              }else if(url=='手机号验证'){
                $state.go('page.account.photoNum');
              }if(url=='身份验证'){
                $state.go('page.account.shengfen');
              }
        }

    }]);
