const chai = require('chai');
const mocha = require('mocha');
const assert = chai.assert;
const calculateTotal = require('../server/controllers/helperFunctions.js');


describe('cartController', function(){
  describe('updateCartTotal', function(){
    describe('helperFunction calculateTotal', function(){
      it('should return 0 when no items are added', function(){
        const prices = [{
          "id": "A",
          "description": "Apple",
          "unit_price": 2.0,
          "volume_discounts": [{
          "number": 4,
          "price": 7.0
          }]
          }, {
          "id": "B",
          "description": "Banana",
          "unit_price": 12.0,
          "volume_discounts": []
          }, {
          "id": "C",
          "description": "Cranberry",
          "unit_price": 1.25,
          "volume_discounts": [{
          "number": 6,
          "price": 6.0
          }]
          }, {
          "id": "D",
          "description": "Durian",
          "unit_price": 0.15,
          "volume_discounts": []
          }];
  
          const cart = {
            Apple: 0,
            Banana: 0,
            Cranberry: 0,
            Durian: 0,
          };

          const result = calculateTotal(prices, cart);
          assert.equal(result, 0, 'The values should be equal');

      });

      it('should calculate the cart total. Input: AAAABBCD -> 32.40', function(){
        const prices = [{
          "id": "A",
          "description": "Apple",
          "unit_price": 2.0,
          "volume_discounts": [{
          "number": 4,
          "price": 7.0
          }]
          }, {
          "id": "B",
          "description": "Banana",
          "unit_price": 12.0,
          "volume_discounts": []
          }, {
          "id": "C",
          "description": "Cranberry",
          "unit_price": 1.25,
          "volume_discounts": [{
          "number": 6,
          "price": 6.0
          }]
          }, {
          "id": "D",
          "description": "Durian",
          "unit_price": 0.15,
          "volume_discounts": []
          }];
  
          const cart = {
            Apple: 4,
            Banana: 2,
            Cranberry: 1,
            Durian: 1,
          };

          const result = calculateTotal(prices, cart);
          assert.equal(result, 32.40, 'The values should be equal');

      });
      it('should calculate the cart total. Input: CCCCCCC -> 7.25', function(){
        const prices = [{
          "id": "A",
          "description": "Apple",
          "unit_price": 2.0,
          "volume_discounts": [{
          "number": 4,
          "price": 7.0
          }]
          }, {
          "id": "B",
          "description": "Banana",
          "unit_price": 12.0,
          "volume_discounts": []
          }, {
          "id": "C",
          "description": "Cranberry",
          "unit_price": 1.25,
          "volume_discounts": [{
          "number": 6,
          "price": 6.0
          }]
          }, {
          "id": "D",
          "description": "Durian",
          "unit_price": 0.15,
          "volume_discounts": []
          }];
  
          const cart = {
            Apple: 0,
            Banana: 0,
            Cranberry: 7,
            Durian: 0,
          };

          const result = calculateTotal(prices, cart);
          assert.equal(result, 7.25, 'The values should be equal');
    });

    it('should calculate the cart total. Input: ABCD -> 15.40', function(){
      const prices = [{
        "id": "A",
        "description": "Apple",
        "unit_price": 2.0,
        "volume_discounts": [{
        "number": 4,
        "price": 7.0
        }]
        }, {
        "id": "B",
        "description": "Banana",
        "unit_price": 12.0,
        "volume_discounts": []
        }, {
        "id": "C",
        "description": "Cranberry",
        "unit_price": 1.25,
        "volume_discounts": [{
        "number": 6,
        "price": 6.0
        }]
        }, {
        "id": "D",
        "description": "Durian",
        "unit_price": 0.15,
        "volume_discounts": []
        }];

        const cart = {
          Apple: 1,
          Banana: 1,
          Cranberry: 1,
          Durian: 1,
        };

        const result = calculateTotal(prices, cart);
        assert.equal(result, 15.40, 'The values should be equal');
      });

    });
  });
});