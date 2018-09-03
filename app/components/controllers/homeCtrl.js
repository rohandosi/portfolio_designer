'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/pages/home.html',
            controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', ['$scope', '$window', '$location', function($scope, window, location) {
        console.log('home ctrl called');

        $scope.openProject = function () {
           location.path('/product');
        }
    }
    ]);