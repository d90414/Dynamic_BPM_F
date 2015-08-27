'use strict';

require('./template/template');
require('./index/index');
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

    'ASS.template',
    'ASS.index'
	])
	.value('myRoot', '/kfps/')
    .value('kibhRoot', '/kibh_service/')
    .value('kibhFile', '/kibh_file/')
    .value('SMVC', true)
    //.config([])
    .controller('baseCtrl',['$scope','$rootScope', '$http',function($scope,$rootScope,$http){
    	
    }]);

angular.bootstrap(document, ['ASS']);