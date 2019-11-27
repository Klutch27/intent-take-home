import React, {Component} from 'react';

function ShoppingCart(props){
  const items = [];
  for (let key in props.items){
    items.push(<p>{`${key}: ${props.items[key]}`}</p>);
  }

  return(
  <div>{items}</div>
  );
}

export default ShoppingCart;