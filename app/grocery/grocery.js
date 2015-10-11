'use strict';

var groceryControllers = angular.module('groceryControllers', [
              'groceryFilters','ngRoute'])

groceryControllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'GroceryCtrl'
  });
}])

groceryControllers.controller('GroceryCtrl', ['$scope', 'CurrentGroceryData', 'AvailableProductList', //'$log',
      function($scope, CurrentGroceryData, AvailableProductList) { //, $log
  //$scope.console = $log;
  console.log('Start Logging data:');

  // var for beavior
  $scope.show_search = true;
  
  // get current grocery to local one
  var localGrocery = null;
  localGrocery = CurrentGroceryData.getGrocery();
  $scope.grocery = localGrocery;


  // get list of available product
  var aPList = [];
  aPList = AvailableProductList.query();
  $scope.grocery.AvaliablePList = aPList;
  /*
    note: in future this use of all product list, with the filter tha is
    applied in view will become havy in performace...need to find some progressive filter.
    Now the filter is applied also when no item is selected, and is applied to all product (no fileter)
  */

  // function to add item to current grocery
  $scope.addItemToGrochery = function(findItem) {
    if (findItem) {
      var qta = prompt('how many obj?');
      findItem.qta = qta;
      $scope.grocery.items.push(findItem);
      $scope.serach_field = '';
    }
  };
  
}]);