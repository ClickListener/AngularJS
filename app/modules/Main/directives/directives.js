'use strict';

/* Directives */

// (function (app) {
//     angular.module(app.applicationModuleName).
//     directive('appVersion', ['version', function(version) {
//         return function(scope, elm, attrs) {
//             elm.text(version);
//         };
//     }]);
// })(ApplicationConfiguration);
(function () {
    angular.module('iHealth').
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
})();
