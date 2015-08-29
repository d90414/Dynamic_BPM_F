'use strict';

module.exports = angular.module('ASS.service.flowService', [])
    .factory('flowService', ['$http', '$window','bpmRoot', function ($http, $window,bpmRoot) {
        return {
            getMyTodo: function (username) {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/todo',
                            params:{username:username},
                            data:{}
                        })
            },
            getAllTodo: function () {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/alltodo',
                            params:{},
                            data:{}
                        })
            },
            getAllProcessDefinition:function () {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/pd',
                            params:{},
                            data:{}
                        })
            },
            getAllProcessInstance:function () {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/pi',
                            params:{},
                            data:{}
                        })
            },
            getAllUser:function () {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/user',
                            params:{},
                            data:{}
                        })
            },
            getAllHistoryTask:function () {
                return $http({
                            method:"GET",
                            url:bpmRoot+'/flow/history/task',
                            params:{},
                            data:{}
                        })
            }

        }
    }]);
