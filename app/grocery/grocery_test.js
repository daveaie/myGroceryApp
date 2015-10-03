'use strict';

describe('myGroceryApp', function() {

  //beforeEach(module('myGroceryApp'));
  beforeEach(module('groceryControllers'));
  beforeEach(module('groceryServices'));
  
  describe('GroceryCtrl', function(){
    var scope, ctrl;
    scope = {};
    //serv = new groceryServices
    //ctrl = new groceryCtrl();
    //groceryCtrl = $controller('GroceryCtrl', {$scope : scope});
    /*beforEach(inject(function( $rootScope) {
      //define new scope
      scope = {};
      

      //inject data to service parameter of controller
      //CurrentGroceryData = groceryData;

      //istanziate parameter
      //groceryCtrl = $controller('GroceryCtrl', {$scope : scope})
    }));
*/
    it('should view if ctr is istanziated', inject(function($controller) {
      var scope, ctrl;
      scope = {};
      ctrl = $controller('GroceryCtrl');
      expect(ctrl).toBeDefined();
    }));


    /*it('should view the selected grocery details', function() {
      expect(scope.grocery.name).toEqual('TEST - Prima spesa');
      expect(scope.grocery.location).toEqual('Ipercoop');

    });
*/
  });
});