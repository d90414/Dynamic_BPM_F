'use strict';

angular.module('ASS.index').controller('UsersCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        console.log('UsersCtrl');

        flowService["getAllUser"]().then(function (data) {
                $scope.users = data.data;

            });
    }]);