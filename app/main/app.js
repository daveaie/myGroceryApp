'use strict';

// Declare app level module which depends on views, and components
var groceryApp = angular.module('myGroceryApp', [
              'ngRoute',
              'groceryControllers', 
              'groceryServices',
              'myGroceryApp.version'
            ]);

groceryApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/grocery'});
}]);
