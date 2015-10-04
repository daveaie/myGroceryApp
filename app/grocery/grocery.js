'use strict';

var groceryControllers = angular.module('groceryControllers', ['ngRoute'])

groceryControllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'GroceryCtrl'
  });
}])

groceryControllers.controller('GroceryCtrl', ['$scope', 'CurrentGroceryData', 'AvailableProductList', function($scope, CurrentGroceryData, AvailableProductList) {
  // var for beavior
  $scope.show_search = true;
  //$scope.show_findItems = false; --> replace with serach_field not empty

  // get current grocery to local one
  var localGrocery = null;
  localGrocery = CurrentGroceryData.getGrocery();
  $scope.grocery = localGrocery;
  // get list of available product
  var aPList = [];
  aPList = AvailableProductList.query();
  $scope.grocery.AvaliablaePList = aPList;
  
  // function to add item to current grocery
  $scope.addItemToGrochery = function(serach_field) {
    var name;
    if (serach_field.isString)
      return;
    if (serach_field == null)
      name = prompt('What do you need to buy?');
    else
      name = serach_field;

    var qta = prompt('how many obj?');
    if (name) {
      $scope.grocery.items.push({
        'name': name,
        'qta': qta
      });
    }
  };
}]);