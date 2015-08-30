'use strict';

module.exports = angular.module('ASS.service.bpmService', [])
    .factory('bpmService', ['$rootScope','$http', '$window','bpmRoot', function ($rootScope,$http, $window,bpmRoot) {
        return {
             getFlowNav: function (flowName,userName) {
                return $http({
                            method:"POST",
                            url:bpmRoot+'/auth/tasks',
                            params:{
                               flowName: flowName,
                               userName: userName
                            },
                            data:{}
                        });
            }
        }
    }]);
