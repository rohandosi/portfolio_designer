'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/pages/home.html',
            controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', [function() {
        console.log('home ctrl called');
    }]);