/* 
    filters.spec.js -- create on 25/10/15 by Daveaie) 

    test the function f my custom filters

*/

describe('test of my custom filters', function() {

  beforeEach(module('groceryFilters'));

// this filter return the string passed by parameter in reverse char format
// if use second parameter (boolean) retrun in uppercase format
  describe('reverse', function() {

    it('text show in reverse char format',
        inject(function(reverseFilter) {
      expect(reverseFilter('Davide Borgia')).toBe('aigroB edivaD');
      expect(reverseFilter('Davide Borgia',true)).toBe('AIGROB EDIVAD');
    }));
  });

// this filter return partial array, filterd by a seconda array passed by parameter
// bought array aspectd to have a porprety called "id" the is used to compare elemet.
// in my app I need to compare only the id, beacuse the product in the array do not be equal
// ex. in the list isn't qta property that is aspected in the current chart
  describe('Array filter with Array (with id property)', function() {

    var arrayToBeFiltered = [ {
                          "id": 0,
                          "name": "Davide"
                        },{
                          "id": 1,
                          "name": "Francesca"
                        },{
                          "id": 3,
                          "name": "Giovanni"
                        },{
                          "id": 4,
                          "name": "Stefano"
                        },{
                          "id": 5,
                          "name": "Pincopallo"
                        }];
    var  arrayToFilter = [{
                              "id": 0,
                              "name": "CheTeFrega"
                            },{
                              "id": 5,
                              "name": "se"
                            }];
    var arrayResult = [{
                        "id": 1,
                        "name": "Francesca"
                      },{
                        "id": 3,
                        "name": "Giovanni"
                      },{
                        "id": 4,
                        "name": "Stefano"
                      }];

    it('text show in reverse char format',
        inject(function(filterArrayWithArrayFilter) {
      expect(filterArrayWithArrayFilter(arrayToBeFiltered,arrayToFilter)).toEqual(arrayResult);
      expect(arrayToBeFiltered.length-arrayToFilter.length).toEqual(filterArrayWithArrayFilter(arrayToBeFiltered,arrayToFilter).length);
      expect(filterArrayWithArrayFilter(arrayToBeFiltered,arrayToFilter)[0]).not.toEqual(arrayToFilter[0]);
    }));
  });

});