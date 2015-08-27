'use strict';

angular.module('ASS.index').controller('IndexCtrl', ['$rootScope', '$scope', '$window', '$state',
    function ($rootScope, $scope, $window, $state) {


     

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
