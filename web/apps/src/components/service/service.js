'use strict';

require('./default/uiLoad');
require('./default/myHttp');
require('./default/myAlert');
require('./default/myConfirm');
require('./default/rsa');

require('./custom/accountService');
require('./custom/loginService');
require('./custom/registerService');
require('./custom/accountSafetyService');

require('./custom/flowService');

var service = angular.module('ASS.service', [
/********************default*********************/
    'ASS.service.uiLoad',
    'ASS.service.myHttp',
    'ASS.service.myAlert',
    'ASS.service.myConfirm',
    'ASS.service.rsa',

    'ASS.service.accountService', // 我的账户
    'ASS.service.loginService', // 登录
    'ASS.service.registerService', // 注册
    'ASS.service.accountSafetyService', //账户安全

    'ASS.service.flowService' //流程

]);

module.exports = service;