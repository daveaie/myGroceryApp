var groceryServices = angular.module('groceryServices', ['ngResource']);

groceryServices.factory('CurrentGroceryData', ['$resource', function($resource) {
  // Get the current produnct in the grocery chart from Json file - fake data
  return $resource('data_demo/defaultGrocery.json', {}, {
    getGrocery: {method:'GET', isArray:false}
  });
}]);

groceryServices.factory('AvailableProductList', ['$resource', function($resource){
  // Get the list from Json file - fake data
  return $resource('data_demo/availableProductList.json', {}, {
    query: {method:'GET', isArray:true}
  });
}]);
