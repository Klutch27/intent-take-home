import React from 'react';

const buttonStyle = {
  width: '80%',
  height: '4rem',
  backgroundColor: 'green',
  color: 'white',
  borderStyle: 'solid',
  borderRadius: '5px',
  borderWidth: '1px',
  borderColor: 'black',
  fontWeight: 'bold'
};

function AddToCart(props){
  return (
    <button style={buttonStyle} onClick={()=>{props.sendToServer();}}>Add Item(s) to Shopping Cart</button>
  );
}

export default AddToCart;