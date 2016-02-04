var app = angular.module('app', [
    'ngRoute',
    'pickadate',
    'angular-loading-bar'
]);

app.config(function ($routeProvider) {


    $routeProvider
        .when("/", {
            controller: "MainController"
        })
        .when("/:sfrom/:sto/:sdate", {
            controller: "SearchController",
            templateUrl: "/app/views/results.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});