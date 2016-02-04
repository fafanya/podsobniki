(function ()
{
    "use strict";
    var app = WinJS.Application;

    app.onactivated = function (args)
    {
    };

    app.oncheckpoint = function (args)
    {
    };

    app.start();
})();

var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '../html/main_page.html',
        controller: 'mainController'
    })
    .when('/enter_as', {
        templateUrl: '../html/enter_page.html',
        controller: 'enterController'
    })
    .when('/enter_as_customer', {
        templateUrl: '../html/enter_customer_page.html',
        controller: 'enterCustomerController'
    })
    .when('/enter_as_performer', {
        templateUrl: '../html/enter_performer_page.html',
        controller: 'enterPerformerController'
    });
});
mainApp.controller('mainController', function ($scope) {
});
mainApp.controller('enterController', function ($scope) {
});
mainApp.controller('enterCustomerController', function ($scope) {
});
mainApp.controller('enterPerformerController', function ($scope) {
});