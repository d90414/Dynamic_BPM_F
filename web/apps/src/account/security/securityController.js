'use strict';

angular.module('ASS.account').controller('SecurityCtrl', ['$rootScope', '$scope', '$window', '$state', 'accountService','myAlert',
    function ($rootScope, $scope, $window, $state, accountService,myAlert) {

        //$rootScope.global.myAccountMenu = "安全设置";

        $scope.setJBPM = function(){
           var fn = $('input[name="inlineRadioOptions"]:checked').val();
           $rootScope.flowName=fn;
           myAlert("认证方式修改成功");
        }
    }]);
