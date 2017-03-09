'use strict';

/* Filters */
// (function (app) {
//     angular.module(app.applicationModuleName).
//     filter('interpolate', ['version', function(version) {
//         return function(text) {
//             return String(text).replace(/\%VERSION\%/mg, version);
//         }
//     }]);
// })(ApplicationConfiguration);

(function () {
    angular.module('iHealth').
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);
})();

