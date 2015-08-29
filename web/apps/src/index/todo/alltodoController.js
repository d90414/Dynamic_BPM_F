'use strict';

angular.module('ASS.index').controller('AlltodoCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        flowService["getAllTodo"]().then(function (data) {
                $scope.tasks = data.data;

            });
    }]);