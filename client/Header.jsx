import React from 'react';

const headerStyle = {
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

function Header(){
  return(
    <div style={headerStyle}>
      <h1>Welcome to Gareth's Fruit Stand</h1>
      <p>Please check out our available produce below!</p>
    </div>
  );
}

export default Header;