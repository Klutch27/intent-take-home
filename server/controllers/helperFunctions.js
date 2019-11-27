function calculateTotal(priceStuff, shoppingCart){
  // iterate over shopping cart and find total number of items for each thing;
  // calculate the total price for that item, and add it to the cartTotal
    const cartTotal = {};
  
    // eslint-disable-next-line guard-for-in
    for (let key in shoppingCart){
      priceStuff.forEach(el=>{
        if (el['description'] === key){
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
  
  
    let finalTotal = 0;
  
    // eslint-disable-next-line guard-for-in
    for (let key in cartTotal){
      finalTotal += cartTotal[key];
    }
  
    return finalTotal;
  
  }

  module.exports = calculateTotal;