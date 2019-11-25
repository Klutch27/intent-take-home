import React from 'react';

const fruitStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '16px',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '20%'
};

const buttonStyle = {
  borderStyle: 'solid',
  borderRadius: '3px',
  borderWidth: '1px',
  backgroundColor: 'green',
  color: 'white',
};

function Fruit(props){
  return (
    <div style={fruitStyle}>
      <p>{props.name}: {props.quantity}</p>
      <button style={buttonStyle} onClick={()=>{props.updateCart('add', props.name);}}>Add</button>
      <button style={buttonStyle} onClick={()=>{props.updateCart('remove', props.name);}}>Remove</button>
    </div>
  );
}

export default Fruit;
