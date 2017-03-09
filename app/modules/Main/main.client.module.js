/**
 * Created by zhangxu on 2017/3/8.
 */

(function (app) {

    app.registerModule('main',[]);
    angular.module('main').config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("home", {
                url: "/home",
                templateUrl: "Main/views/main.home.view.html"
            }).state("about", {
                url: "/about",
                templateUrl: "Main/views/main.about.view.html"
            });
            // $urlRouterProvider.otherwise("/home");
        }
    ]);
})(ApplicationConfiguration);




