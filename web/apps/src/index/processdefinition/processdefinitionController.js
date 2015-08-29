'use strict';

angular.module('ASS.index').controller('ProcessdefinitionCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        console.log('ProcessdefinitionCtrl');
         flowService["getAllProcessDefinition"]().then(function (data) {
                $scope.processDefinition = data.data;

            });
    }]);