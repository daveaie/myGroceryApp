/* 
grocery.spec.js -- create on 23/10/15 by Daveaie

This file spec, define all the story of the controller grocery
what we expect from that, what that tell as and so on..

*/

describe('what grocery module do?', function() {

  describe('what grocery controller do?', function() {
    var scope, groceryCtrl;
    var AvailableProductList;
    var $controller;

    beforeEach(module('groceryServices'));
    beforeEach(module('groceryControllers'));

    beforeEach(inject(function(_$controller_){
      // i DO NOT UNTERSTUD IF THIS IS FUNDAMENTAL <<<<<<<-----------------------------
      $controller = _$controller_;
    }));

    // try to moke factory allAvailableProduct
    beforeEach(function(){
      var allAvailableProductList =   [{
                                        "id": 0,
                                        "name": "FAKE - Passata di pomodoro",
                                        "barcode": "",
                                        "brand": "Coop centro italia",
                                        "img":"http://www.coopfirenze.it/uploads/6994/medium/passata_di_pomodori_coop_unicoop_firenze.jpg"
                                      },{
                                        "id": 1,
                                        "name": "FAKE - Petti di pollo",
                                        "barcode": "",
                                        "brand": "Coop centro italia",
                                        "img":"http://www.aziendagricolamelwill.com/wp-content/uploads/2013/11/Petto-di-pollo-924x787.jpg"
                                      },{
                                        "id": 2,
                                        "name": "FAKE - Acqua Rocchetta",
                                        "barcode": "",
                                        "brand": "Rocchetta",
                                        "img":"http://www.consegnaadomicilioacquavinoebevandeverona.it/images/files/rocchetta_1_5_pet_nat.jpg"
                                      },{
                                        "id": 3,
                                        "name": "FAKE - Estathe al limone",
                                        "barcode": "",
                                        "brand": "Nestle",
                                          "img":"http://www.etalianfood.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/e/s/estathe_brick.jpg"
                                      },{
                                        "id": 4,
                                        "name": "FAKE - Polipo",
                                        "barcode": "",
                                        "brand": "Nettuno",
                                        "img":"http://cdn-1.guidecucina.it/o/orig/ricetta-del-polipo-alla-galiziana_4f8f5f6dceb951f0f33f82ee68014f0e.jpg"
                                      }];

      AvailableProductList = {
        query: function() {
          return allAvailableProductList;
        }
      };
      spyOn(AvailableProductList, 'query').and.callThrough();
    });

    beforeEach(function(){;
      //var AvailableProductList = _AvailableProductList_
      $scope = {};

      groceryCtrl = $controller('GroceryCtrl', { $scope: $scope });
      // set FAKE data from static object
      groceryCtrl.currentGrocery = {
        "id": 0,
        "name": "FAKE - Prima spesa",
        "creation_date": "2015-09-10T13:28:06.419Z",
        "complete_data": "",
        "location": "Ipercoop",
        "items": [{
            "id": 0,
            "name": "FAKE - Passata di pomodoro",
            "barcode": "",
            "qta": 2,
            "brand": "Coop",
            "img":"",
            "buyed": true
          },{
            "id": 1,
            "name": "FAKE - petti di pollo",
            "barcode": "",
            "qta": 300,
            "brand": "coop",
            "img":"http://www.aziendagricolamelwill.com/wp-content/uploads/2013/11/Petto-di-pollo-924x787.jpg",
            "buyed": true
          }]
      };
      groceryCtrl.allAvailablePList = AvailableProductList.query();
    });

    // load module
    it('Expect exits of module.', function(){
      expect(groceryCtrl).toBeDefined();
    });
    // load current grocery char FAKE data
    it('Expect current grocery is not empty and contain \'X\' elements.', function() {      
      expect(groceryCtrl.currentGrocery).toBeDefined();
      expect(groceryCtrl.currentGrocery.items.length).toEqual(2);
      expect(groceryCtrl.currentGrocery.name).toMatch('FAKE');
    });
    // add element
    it('Expect current grocery \'X+1\' elements.', function() {
      var newItem = {
                      "id": 4,
                      "name": "FAKE - Polipo",
                      "barcode": "",
                      "brand": "Nettuno",
                      "img":"http://cdn-1.guidecucina.it/o/orig/ricetta-del-polipo-alla-galiziana_4f8f5f6dceb951f0f33f82ee68014f0e.jpg"
                    };
      groceryCtrl.addItemToGrochery(newItem);
//----- CATTURARE MESSAGGIO per QTA --------------- //
      expect(groceryCtrl.currentGrocery.items.length).toEqual(3);
      expect(groceryCtrl.currentGrocery.items[2].qta).toEqual('2');
    });
    // test elements
    // need moke service
    it('Expect that elemts in the current chart contain some specific data from MOKE.', function() {
      //test name, qta , img
      var item1 = groceryCtrl.currentGrocery.items[0]
      var item2 = groceryCtrl.currentGrocery.items[1]
      expect(item1).toEqual({
                              "id": 0,
                              "name": "FAKE - Passata di pomodoro",
                              "barcode": "",
                              "qta": 2,
                              "brand": "Coop",
                              "img":"",
                              "buyed": true
                            });
    });
    // load list of all product
    it('Expect that allAvailableProduct list is populatedwith FAKE data.', function() {
      expect(groceryCtrl.allAvailablePList).toBeDefined();
      expect(groceryCtrl.allAvailablePList.length).toEqual(5);
    });
    it('Expect that some product of allAvailableProduct list contain some specific data.', function() {
      expect(groceryCtrl.allAvailablePList[0].name).toMatch('FAKE');
      expect(groceryCtrl.allAvailablePList[0].name).toEqual(groceryCtrl.currentGrocery.items[0].name);
      expect(groceryCtrl.allAvailablePList[0].id).toEqual(groceryCtrl.currentGrocery.items[0].id);
    });

    // sarch with personlized filter
    it('Expect that elemts of allAvailableProduct list was filterd.', function() {
      pending('need complete implemetation!!');
    });
    it('Expect that filterd elemts of allAvailableProduct not contain the elements in current grocery.', function() {
      //filterd elemnt
      pending('need complete implemetation!!');
    });
    
    // use of moke data from resorce call to factory Current grocery 
    it('Expect that resources with moke data promise get data back.', function() {
      pending('need complete implemetation!!');
    });
    // intercettare la console?
    it('Expect that resources promise fault with message.', function() {
      pending('need complete implemetation!!');
    });
    
  });
});