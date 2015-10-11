var groceryServices = angular.module('groceryServices', ['ngResource']);

groceryServices.factory('CurrentGroceryData', function() {

  // Some fake testing in development (to delete)
  var fakeGrocery = {
      id: 0,
      name: 'Prima spesa',
      creation_date: '2015-09-10T13:28:06.419Z',
      complete_data: '',
      location: 'Ipercoop',
      items: [{
          id: 0,
          name: 'Passata di pomodoro',
          barcode: '',
          qta: 2,
          brand: 'Coop',
          img:'',
          buyed: true
        },{
          id: 1,
          name: 'petti di pollo',
          barcode: '',
          qta: 300,
          brand: 'coop',
          img:'http://www.aziendagricolamelwill.com/wp-content/uploads/2013/11/Petto-di-pollo-924x787.jpg',
          buyed: false
      }]
  };

  return {
    getGrocery : function () { 
      return fakeGrocery;
    }
  }

});

groceryServices.factory('AvailableProductList', ['$resource', function($resource){
    // Get the list from Json file
    return $resource('data_demo/availableProductList.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
}]);
