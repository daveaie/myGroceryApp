'use strict';

var groceryControllers = angular.module('groceryControllers', [ 'ngRoute' ]);

groceryControllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'GroceryCtrl',
    controllerAs: 'grocery'
  });
}])

groceryControllers.controller('GroceryCtrl', ['CurrentGroceryData', 'AvailableProductList',
      function(CurrentGroceryData, AvailableProductList) {

  //inizialize loval variable
  var localGrocery = this;
  var currentGrocery = {};
  //$scope.console = $log;
  console.log('Start Logging data:');

  // var for beavior of search section
  localGrocery.show_search = true;
  
  // get current grocery to local one and then to scope
  CurrentGroceryData.getGrocery(function (resultGrocery){
    console.log('current grocery chart:');
    console.log(resultGrocery);
    localGrocery.currentGrocery = resultGrocery;
  },function(resultGrocery){
    console.log('error retriveing current Gorcery Chart!!!');
  });
  

  // get list of available product
  AvailableProductList.query(function (resultAPList){
    console.log('all available prduct list:');
    console.log(resultAPList);
    localGrocery.avaliablePList = resultAPList;
  },function(resultAPList){
    console.log('error retriveing all available prduct list!!!');
  });
  /*
    note: in future this use of all product list, with the filter that is
    applied in view will become heavy in performace...need to find some progressive filter.
    Now the filter is applied also when no item is selected, and is applied to all product (no fileter)
  */

  // function to add item to current grocery
  localGrocery.addItemToGrochery = function(findItem) {
    if (findItem) {
      var qta = prompt('how many obj?');
      findItem.qta = qta;
      localGrocery.currentGrocery.items.push(findItem);
      localGrocery.serach_field = '';
    }
  };

  
/*    //rilocate in module groceryFilters
 //this function suppose that the arrayToBeFiltered's items and the fitlerArray'items have a property called "id"
  localGrocery.filterArrayWithArray = function(filterArray){
    return function(item) {
      console.log('id of current Array item to be filtered: ' + item.id);
      console.log('Length of filter Array : ' + filterArray.length);
      var result = true;
      // http://stackoverflow.com/questions/13843972/angular-js-break-foreach
      // says taht is faster to use native for loop instead of forEach, and i suppose to need filter many product
//      angular.forEach(filterArray, function(filterItem){
      for (var i = 0 ; i < filterArray.length; i++) {
        if (item.id === filterArray[i].id){
          result = false;
          break;
          console.log('id of forEach filterItem: ' + filterItem.id);
        };
      };
//      });
      return result;
    };
  };
*/
  
}]);