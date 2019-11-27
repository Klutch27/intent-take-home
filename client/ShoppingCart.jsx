import React, {Component} from 'react';

function ShoppingCart(props){
  const items = [];
  for (let key in props.items){
    if (key === 'Total'){
    items.push(<p>{`${key}: $${props.items[key]}`}</p>);
    }
    else {
      items.push(<p>{`# ${key}: ${props.items[key]}`}</p>);
    }
  }

  return(
  <div>
    <p>Shopping Cart:</p>
    <div>{items}</div>
    <button onClick={()=>{props.clearCart();}}>Clear Cart</button>
  </div>
  );
}

export default ShoppingCart;