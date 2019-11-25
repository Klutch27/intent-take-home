import React from 'react';

const fruitStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '16px',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '17rem'
};

const buttonStyle = {
  borderStyle: 'solid',
  borderRadius: '5px',
  borderWidth: '1px',
  borderColor: 'black',
  backgroundColor: 'rgb(252, 186, 3)',
  color: 'black',
  height: '2rem',
  width: '3.5rem',
  fontWeight: 'bold'
};

const buttonDiv = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '7.5rem',
}

function Fruit(props){
  return (
    <div style={fruitStyle}>
      <p>{props.name}: {props.quantity}</p>
      <div style={buttonDiv}>
        <button style={buttonStyle} onClick={()=>{props.updateCart('add', props.name);}}>Add</button>
        <button style={buttonStyle} onClick={()=>{props.updateCart('remove', props.name);}}>Remove</button>
      </div>
    </div>
  );
}

export default Fruit;
