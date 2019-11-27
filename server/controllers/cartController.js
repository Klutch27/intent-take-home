const cache = require('../cache.js');

const cartController = {

// updateCart(){

// }

checkIfCartExists(req, res, next){
  // check if session id exists in cache.
  // if it does not exist, initialize shopping cart and return cart to Front End
  // if it does exist, return cart to Front End

  if (!cache[req.session.id]){
    cache[req.session.id] = {
      Apple: 0,
      Banana: 0,
      Cranberry: 0,
      Durian: 0
    };
  }

  req.body.userCache = cache[req.session.id];
  next();

  }

};

module.exports = cartController;