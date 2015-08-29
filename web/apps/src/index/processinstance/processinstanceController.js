'use strict';

angular.module('ASS.index').controller('ProcessinstanceCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        console.log('ProcessinstanceCtrl');

        flowService["getAllProcessInstance"]().then(function (data) {
                $scope.processInstance = data.data;

            });
    }]);