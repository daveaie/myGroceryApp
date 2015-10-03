'use strict';

angular.module('myGroceryApp.version', [
  'myGroceryApp.version.interpolate-filter',
  'myGroceryApp.version.version-directive'
])

.value('version', '0.1');
