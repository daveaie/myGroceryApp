'use strict';

describe('myGroceryApp', function() {

  // instazite needed modulo to test
  beforeEach(module('groceryControllers'));
  beforeEach(module('groceryServices'));
  
  describe('GroceryCtrl', function(){
    // variable declaretion to be visible in all following tests for this module/controller
    var scope, ctrl, item;
    
    // inject the service in the istnziation of the controller
    beforeEach(inject(function($rootScope, $controller) {
      // scope inizializzation with new rootScope
      scope = $rootScope.$new();
      // controller inizialization
      ctrl = $controller('GroceryCtrl', {$scope: scope});
      
// ------- change here to http REST declaration to mock data with this (put thet in a json file?) --------- //      
      ctrl.localGrocery = {
                      id: 0,
                      name: 'TEST - Prima spesa',
                      date: 'TEST - 10/09/2015',
                      location: 'TEST - Ipercoop',
                      items: [{
                          id: 0,
                          name: 'TEST - Passata di pomodoro',
                          barcode: '',
                          qta: 2,
                          brand: 'TEST - Coop',
                          img:'',
                          buyed: true
                        },{
                          id: 1,
                          name: 'TEST - petti di pollo',
                          barcode: '',
                          qta: 300,
                          brand: 'TEST - coop',
                          img:'https://www.google.it/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJLyu_ncl8gCFWj-cgodqQ4FZA&url=http%3A%2F%2Fwww.aziendagricolamelwill.com%2Fprodotto%2Fpetto-di-pollo%2F&psig=AFQjCNGmx9kMr2BIiyJtNs2ZGgO4T60dNQ&ust=1443460878426102',
                          buyed: true
                      }]
                  };
      
      item = ctrl.localGrocery.items[0];
      
    })); 

    it('should view if ctr is istanziated', function() {
      expect(ctrl).toBeDefined();
    });

    it('should view the selected grocery details', function() {
      expect(ctrl.localGrocery.name).toEqual('TEST - Prima spesa');
      expect(ctrl.localGrocery.location).toEqual('TEST - Ipercoop');
    });
    
    
    it('should view the selected grocery first item', function() {
      expect(item.name).toEqual('TEST - Passata di pomodoro');
      expect(item.qta).toEqual(2);
    });
  });

/*
// ------- Test sevice funzionality --------- //      
  describe('CurrentGroceryData', function(){
    var serv;
    beforeEach(inject(function($factory) {
      serv = $factory('CurrentGroceryData');
    }));
    // Test service availability
    it('check the existence of Phone factory', function() {
      expect(serv).toBeDefined();
    });
    // Test service fake data
//    it('check the existence of Phone factory', function() {
//      expect(serv.fakeGrocery.name).toEqual('TEST - Prima spesa');
//      expect(serv.fakeGrocery.location).toEqual('TEST - Ipercoop');
//    });

  });
*/
});