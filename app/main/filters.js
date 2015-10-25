'use strict';

var groceryFilters = angular.module('groceryFilters', []);

// this filter show in web template the green check for true or the red corss for false, be applied to boolean
groceryFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


groceryFilters.filter('reverse' , function(){
  return function(input, uppercase) {
    input = input || '';
    console.log('Length of string: ' + input.length);
    var out = "";
    for (var i = 0 ; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };    
});

groceryFilters.filter('filterArrayWithArray',function(){
  return function(dataArray, filterArray) {
    var itemToFilter = [];
    if (!dataArray) {
      return
    }
    else if (!filterArray) {
      return dataArray
    } 
    else {
      //console.log('Length of data Array : ' + dataArray.length);
      //console.log('Length of filter Array : ' + filterArray.length);
      for (var i = 0 ; i < filterArray.length; i++) {
        console.log('id of current Array item to filter: ' + filterArray[i].id);
        itemToFilter.push(filterArray[i].id);
      };
      //console.log('itemToFilter: ' + itemToFilter);
      return dataArray.filter( function(item) {
        return itemToFilter.indexOf(item.id) === -1;
      });
    }
  
  }
});