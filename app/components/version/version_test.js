'use strict';

describe('myGroceryApp.version module', function() {
  beforeEach(module('myGroceryApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
