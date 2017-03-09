'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// (function (app) {
//     angular.module(app.applicationModuleName).
//     value('version', '0.1');
// })(ApplicationConfiguration);
(function () {
    angular.module('iHealth').
    value('version', '0.1');
})();

