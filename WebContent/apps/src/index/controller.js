'use strict';

angular.module('ASS.index').controller('IndexCtrl', ['$rootScope', '$scope','$window','$state','bpmApiRoot',
    function ($rootScope, $scope,$window,$state,bpmApiRoot) {
        if (!$window.sessionStorage.sessionid) {
            $state.go("auth.login");
            return;
        }
        $scope.apiUrl = bpmApiRoot;

        $scope.$on('$viewContentLoaded', function () {
            if ($.browser.msie && $.browser.version <= 9) {
                if ($.browser.version <= 8) {
                    $('label').removeClass('i-checks i-checks-sm i-checks-lg');
                }
                // Invoke the plugin
                $('input, textarea').placeholder();
            }
        });

    }]);
