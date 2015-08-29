'use strict';

angular.module('ASS.login').controller('LoginCtrl', ['$rootScope', 'rsa', '$scope', '$window', '$timeout', '$state', '$localStorage', 'loginService', 'myAlert', 'myConfirm', 'myRoot', 'registerService', 'accountService',
    function ($rootScope, rsa, $scope, $window, $timeout, $state, $localStorage, loginService, myAlert, myConfirm, myRoot, registerService, accountService) {

        console.log('LoginCtrl');

        $scope.loginuser = {
            logintype: 1,
            email:'xxg3053@qq.com'
        };

        $scope.submitting = 1;
        $scope.user = [];
        $scope.session_id = "";
        $scope.codetip = "验证手机号";
        $scope.checktype = 0;
        $scope.pwdfocus = false;
        $scope.sub = 0;
        $scope.bind_type = 0;
        $scope.browserType = 0; //浏览器类型
        // 是否渤海证券
        $scope.isBhzq = '';

       $scope.subForm = function () {
            $scope.submitting = 0;
            loginService["subLogin"]($scope.loginuser).then(function (data) {
                console.log(data);
            	 $scope.submitting = 1;
            	 $window.sessionStorage.isLogin = '1';
                 $window.sessionStorage.sessionid = data.data.username;
                 $rootScope.global.account  = {
                    'USER_NAME':data.data.username,
                    'FUNDSACCT_CODE':'11111111111'//资金账户
                 };
                 $rootScope.global.isLogin = true;
                 $state.go("page.index.mytodo");

            });
        }

        
}]);