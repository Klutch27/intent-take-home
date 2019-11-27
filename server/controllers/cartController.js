const cache = require('../cache.js');
const calculateTotal = require('./helperFunctions.js');

const cartController = {

checkIfCartExists(req, res, next){
  // check if session id exists in cache.
  // if it does not exist, initialize shopping cart and return cart to Front End
  // if it does exist, return cart to Front End
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

// eslint-disable-next-line guard-for-in

// add new items to cart
for (let key in req.body){
  currentCartItems[key] += req.body[key];
};

//calculate new total

  currentCartItems['Total'] = calculateTotal(prices, currentCartItems);
  cache[req.session.id] = currentCartItems;

  res.locals.updatedCart = currentCartItems;

next();

},

clearCache(req, res, next){

  cache[req.session.id] = {
    Apple: 0,
    Banana: 0,
    Cranberry: 0,
    Durian: 0,
    Total: 0
  };
  
  res.locals.userCache = cache[req.session.id];

  next();

}

};

module.exports = cartController;