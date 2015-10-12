'use strict';

var groceryControllers = angular.module('groceryControllers', [
              'groceryFilters','ngRoute'])

groceryControllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'GroceryCtrl'
  });
}])

groceryControllers.controller('GroceryCtrl', ['$scope', 'CurrentGroceryData', 'AvailableProductList',
      function($scope, CurrentGroceryData, AvailableProductList) {
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

  //this function suppose that the arrayToBeFiltered's items and the fitlerArray'items have a property called "id"
  $scope.filterArrayWithArray = function(filterArray){
    return function(item) {
      //console.log('id of current Array item to be filtered: ' + item.id);
      //console.log('Length of filter Array : ' + filterArray.length);
      var result = true;
      // http://stackoverflow.com/questions/13843972/angular-js-break-foreach
      // says taht is faster to use native for loop instead of forEach, and i suppose to need filter many product
//      angular.forEach(filterArray, function(filterItem){
      for (var i = 0 ; i < filterArray.length; i++) {
        if (item.id === filterArray[i].id){
          result = false;
          break;
          //console.log('id of forEach filterItem: ' + filterItem.id);
        };
      };
//      });
      return result;
    };
  };
  
}]);