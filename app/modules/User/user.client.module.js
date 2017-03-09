/**
 * Created by zhangxu on 2017/3/9.
 */
(function (app) {
    app.registerModule('user', []);
    angular.module('user').config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('signIn', {
                url: '/signIn',
                templateUrl: 'User/views/user.signIn.view.html',
                controller:'user.signIn.controller',
                controllerAs:'vm'

            }).state('signUp', {
                url: '/signUp',
                templateUrl: 'User/views/user.signUp.view.html',
                controller:'user.signUp.controller',
                controllerAs:'vm'
            });
        }]);
})(ApplicationConfiguration);