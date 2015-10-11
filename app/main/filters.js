'use strict';

var groceryFilters = angular.module('groceryFilters', []);

// this filter show in web template the green check for true or the red corss for false, be applied to boolean
groceryFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});



groceryFilters.filter('alreadyAddedProduct',function($scope){
  console.log($scope.grocery.items[0].id);
  return function(itemToAdd) {
    //var posFilterArray = [];
    
    angular.forEach($scope.grocery.items, function(addedItem, key){
      if (addedItem.id == itemToAdd.id)
        return false;
    });
    return true;
  };
});
