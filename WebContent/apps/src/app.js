'use strict';

require('./components/service/service');
require('./components/directive/directive');
require('./components/filter/filter');

require('./template/template');
require('./index/index');
require('./account/account');
require('./login/login');

var AngularSeedSpm = angular.module('ASS',[
	 //'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.utils',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ASS.service',
    'ASS.directive',
    'ASS.filter',

    'ASS.template',
    'ASS.index',
    'ASS.account',
    'ASS.login'


	])
	.value('myRoot', '/kfps/')
    .constant('bpmRoot', 'http://localhost:18082/Dynamic_BPM')
    .constant('bpmApiRoot', 'http://localhost:18082/BPM_API')
    .value('SMVC', true)
    //.config([])
    .controller('baseCtrl',['$scope','$rootScope', '$http','$state','$localStorage','$window','myConfirm','myAlert',function($scope,$rootScope,$http,$state, $localStorage,$window,myConfirm,myAlert){
    	$scope.$state = $state;
        $localStorage.hasLoginAlert = false;
        $http.get("./data/menu.json").then(function (resp) {
            $scope.menuconfig = resp.data;
        })

        var reg = /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/;
        var browser = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        var userAgent = navigator.userAgent.toLowerCase();
        var rwebkit = /(webkit)\/([\w.]+)/, ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/, rmsie = /(msie) ([\w.]+)/, rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;
        var match = rwebkit.exec(userAgent) || ropera.exec(userAgent) || rmsie.exec(userAgent) || userAgent.indexOf("compatible") < 0 && rmozilla.exec(userAgent) || [];

        /*获得浏览器的名称及版本信息*/
        $.browser = {
            version: match[2] || "0",
            safari: /version.+safari/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            firefox: /firefox/.test(userAgent),
            msie: /msie/.test(userAgent),
            opera: /opera/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
        };
        $.browser.msie10 = $.browser.msie && /msie 10\.0/i.test(userAgent);
        $.browser.msie9 = $.browser.msie && /msie 9\.0/i.test(userAgent);
        $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
        $.browser.msie7 = $.browser.msie && /msie 7\.0/i.test(userAgent);
        $.browser.msie6 = !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(userAgent);

        $rootScope.global = {
            isLogin: false
        };
        $rootScope.ie8 = $.browser.msie8;
        $rootScope.protocolHeight = "400px";


        $rootScope.getNoReadMessages = function (forceRefresh) {
                console.log('获取用户消息');
        };
        $rootScope.logout = function (cfm) {
            var logout = function () {
                $window.sessionStorage.isLogin = '-1';
                $window.sessionStorage.removeItem("sessionid");
                $window.sessionStorage.removeItem("favorites");

                $rootScope.global && ($rootScope.global = {});
                $rootScope.beforeRechargeUrl && ($rootScope.beforeRechargeUrl = null);
                $rootScope.beforeRiskTestUrl && ($rootScope.beforeRiskTestUrl = null);
                $rootScope.beforeOpenFundUrl && ($rootScope.beforeOpenFundUrl = null);
                $rootScope.goBackTo && ($rootScope.goBackTo = null);

                $state.go("auth.login", {}, {location: "replace"});
            };

            if (cfm) {
                myConfirm("确定要退出系统吗？", function () {
                    logout();
                });
            } else {
                logout();
            }
        };

         $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.global.account  = {
                    'USER_NAME':$window.sessionStorage.sessionid,
                    'FUNDSACCT_CODE':'11111111111'//资金账户
                 };
            if (toState.name && toState.name.indexOf('page.account') != -1
                && toState.name != 'auth.bindregaccount' && toState.name != 'auth.binddealaccount') {
                  console.log('$stateChangeStart');
            }
          

         });


    }]);

angular.bootstrap(document, ['ASS']);