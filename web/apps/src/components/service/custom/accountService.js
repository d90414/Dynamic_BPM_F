'use strict';

module.exports = angular.module('ASS.service.accountService', [])
    .factory('accountService', ['$http', '$window','bpmRoot', function ($http, $window,bpmRoot) {
        return {
            /**
             * 获取登陆用户信息。
             *
             * @param param
             * @returns {*}
             */
            getLoginUserInfo: function () {
                return $http({
                            method:"POST",
                            url:bpmRoot+'/user/'+$window.sessionStorage.sessionid,
                            params:{},
                            data:{}
                        })
            }

        }
    }]);
