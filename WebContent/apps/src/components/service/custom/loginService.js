'use strict';

module.exports = angular.module('ASS.service.loginService', [])
    .factory('loginService', ['$http','bpmRoot', function ($http,bpmRoot) {
        return {

            /**
             * 用户登录
             *
             * @param login_type          登录类型
             * @param login_name          用户名
             * @param user_password      密码
             * @param validator_code       验证码
             * @returns {*}
             */
            subLogin: function (loginuser) {
               return $http({
                            method:"POST",
                            url:bpmRoot+'/user/loginJson',
                            params:loginuser,
                            data:{}
                        })
            }
        }
    }]);
