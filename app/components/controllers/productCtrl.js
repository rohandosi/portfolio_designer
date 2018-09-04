'use strict';

angular.module('myApp.product', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/product', {
            templateUrl: 'components/pages/product.html',
            controller: 'productCtrl'
        });
    }])
    .controller('productCtrl', [function() {
        console.log('product ctrl called');

    }
    ]);


