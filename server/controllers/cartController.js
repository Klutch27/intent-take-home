const cache = require('../cache.js');

const cartController = {

checkIfCartExists(req, res, next){
  // check if session id exists in cache.
  // if it does not exist, initialize shopping cart and return cart to Front End
  // if it does exist, return cart to Front End
  console.log('hit checkIfCartExists');
  if (!cache[req.session.id]){
    cache[req.session.id] = {
      Apple: 0,
      Banana: 0,
      Cranberry: 0,
      Durian: 0,
      Total: 0
    };
  }

  res.locals.userCache = cache[req.session.id];
  next();

  },

updateCartTotal(req, res, next){

  console.log('req.body in updateCartTotal() : ', req.body);

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

const currentCartItems = cache[req.session.id];
console.log('cache', cache);
console.log('currentCartItems before loop', currentCartItems);

// eslint-disable-next-line guard-for-in

// add new items to cart
for (let key in req.body){
  currentCartItems[key] += req.body[key];
};

console.log('currentCartItems after loop: ', currentCartItems);
//calculate new total

function calculateTotal(priceStuff, shoppingCart){
// iterate over shopping cart and find total number of items for each thing;
// calculate the total price for that item, and add it to the cartTotal
  const cartTotal = {};
  console.log('cartTotal before calc: ', cartTotal);

  // eslint-disable-next-line guard-for-in
  for (let key in shoppingCart){
    priceStuff.forEach(el=>{
      if (el['description'] === key){
        console.log('el', el);
        if (!el['volume_discounts'][0] || shoppingCart[key] < el['volume_discounts'][0]['number']){
          cartTotal[key] = shoppingCart[key] * el['unit_price'];
        }
        else {
          let numVolumeDiscounts = Math.floor(shoppingCart[key] / el['volume_discounts'][0]['number']);
          let remainder = shoppingCart[key] - (el['volume_discounts'][0]['number'] * numVolumeDiscounts);
          let total = (numVolumeDiscounts * el['volume_discounts'][0]['price']) + (remainder * el['unit_price']);
          cartTotal[key] = total;
        }
      }
    });
  };

  console.log('cartTotal after calc: ', cartTotal);

  let finalTotal = 0;

  // eslint-disable-next-line guard-for-in
  for (let key in cartTotal){
    finalTotal += cartTotal[key];
  }

  return finalTotal;

};

  currentCartItems['Total'] = calculateTotal(prices, currentCartItems);
  cache[req.session.id] = currentCartItems;

  res.locals.updatedCart = currentCartItems;


// calculate new cart total
/*
1. find total number of each item (current cache + req.body[fruitName])
2. check volume_discounts[0][number] --> math.floor(totalNum / volume_discount[number] = num discounts to apply)
*/

next();

}

};

module.exports = cartController;