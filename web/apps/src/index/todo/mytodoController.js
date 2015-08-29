'use strict';

angular.module('ASS.index').controller('MytodoCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        console.log('MytodoCtrl');

        flowService["getMyTodo"]($window.sessionStorage.sessionid).then(function (data) {
                $scope.tasks = data.data;

            });
    }]);