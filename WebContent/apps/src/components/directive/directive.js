'use strict';

require('./default/setNgAnimate');
require('./default/uiBreadcrumb');
require('./default/uiButterbar');
require('./default/uiFocus');
require('./default/uiModule');
require('./default/uiNav');
require('./default/uiScroll');
require('./default/uiShift');
require('./default/uiToggleClass');

require('./custom/accountTopbar');
require('./custom/accountSidebar');
require('./custom/loginPanel');
require('./custom/messagePanel');

require('./custom/flowTopbar');
require('./custom/flowSidebar');
require('./custom/bpmNavbar');

var directive = angular.module('ASS.directive', [
/********************default*********************/
    'ASS.directive.setNgAnimate',
    'ASS.directive.uiBreadcrumb',
    'ASS.directive.uiButterbar',
    'ASS.directive.uiFocus',
    'ASS.directive.uiModule',
    'ASS.directive.uiNav',
    'ASS.directive.uiScroll',
    'ASS.directive.uiShift',
    'ASS.directive.uiToggleClass',

    'ASS.directive.accountTopbar',
    'ASS.directive.accountSidebar',
    'ASS.directive.loginPanel',
    'ASS.directive.messagePanel',

     'ASS.directive.flowTopbar',
     'ASS.directive.flowSidebar',
     'ASS.directive.bpmNavbar'

]);

module.exports = directive;