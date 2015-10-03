'use strict';

var groceryControllers = angular.module('groceryControllers', ['ngRoute'])

groceryControllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'GroceryCtrl'
  });
}])

//groceryControllers.controller('GroceryCtrl', ['$scope', 'CurrentGroceryData', function($scope, CurrentGroceryData) {
groceryControllers.controller('GroceryCtrl', ['CurrentGroceryData', function(CurrentGroceryData) {
  var localGrocery = null;
  localGrocery = CurrentGroceryData.getGrocery();
  
  //$scope.grocery = localGrocery;
}]);