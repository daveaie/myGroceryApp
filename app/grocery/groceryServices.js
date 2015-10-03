var groceryServices = angular.module('groceryServices', []);

groceryServices.factory('CurrentGroceryData', function() {

  // Some fake testing in development (to delete)
  var fakeGrocery = {
      id: 0,
      name: 'Prima spesa',
      date: '10/09/2015',
      location: 'Ipercoop',
      items: [{
          id: 0,
          name: 'Passata di pomodoro',
          barcode: '',
          qta: 2,
          brand: 'Coop',
          img:''
        },{
          id: 1,
          name: 'petti di pollo',
          barcode: '',
          qta: 300,
          brand: 'coop',
          img:'https://www.google.it/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJLyu_ncl8gCFWj-cgodqQ4FZA&url=http%3A%2F%2Fwww.aziendagricolamelwill.com%2Fprodotto%2Fpetto-di-pollo%2F&psig=AFQjCNGmx9kMr2BIiyJtNs2ZGgO4T60dNQ&ust=1443460878426102'
      }]
  };

  return {
    getGrocery : function () { 
      return fakeGrocery;
    }
  }

});