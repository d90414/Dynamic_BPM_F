'use strict';

angular.module('ASS.index').controller('HistoryCtrl', ['$rootScope', '$scope', '$window', '$state', 'myAlert','flowService',
    function ($rootScope, $scope, $window, $state, myAlert,flowService) {
        console.log('HistoryCtrl');
         flowService["getAllHistoryTask"]().then(function (data) {
                $scope.historyTask = data.data;

            });
    }]);