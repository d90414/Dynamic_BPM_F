'use strict';

require('./components/service/service');
require('./components/directive/directive');
require('./components/filter/filter');

require('./template/template');
require('./index/index');
require('./account/account');


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
    'ASS.account'


	])
	.value('myRoot', '/kfps/')
    .value('kibhRoot', '/kibh_service/')
    .value('kibhFile', '/kibh_file/')
    .value('SMVC', true)
    //.config([])
    .controller('baseCtrl',['$scope','$rootScope', '$http',function($scope,$rootScope,$http){
    	
    }]);

angular.bootstrap(document, ['ASS']);