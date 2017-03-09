'use strict';


// Declare app level module which depends on filters, and services

(function (window) {
    var applicationModuleName = 'iHealth';

    var service = {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: ['ui.router','ngAnimate'],
        registerModule:registerModule
    };

    window.ApplicationConfiguration = service;

    function registerModule(moduleName, dependencies) {
        //Create angular module
        angular.module(moduleName, dependencies || []);
        //Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    angular.module(applicationModuleName, service.applicationModuleVendorDependencies);
    angular.element(document).ready(function () {
        angular.bootstrap(document, [applicationModuleName]);
    });

})(window);




