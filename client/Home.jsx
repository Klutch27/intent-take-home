import React, {Component} from 'react';
import Fruit from './Fruit.jsx';
import Header from './Header.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import AddToCart from './AddToCart.jsx';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 226, 171)',
  height: '100%',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '40rem'
};

const fruitContent = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  border: 'solid',
  borderWidth: '2px',
  borderColor: 'black',
  backgroundColor: 'rgb(255, 171, 176)',
  padding: '1rem'
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart: {
        Apple: 0,
        Banana: 0,
        Cranberry: 0,
        Durian: 0
      },
      actualCart: {}
  };

  this.updateCart = this.updateCart.bind(this);
  this.sendToServer = this.sendToServer.bind(this);
  this.checkCart = this.checkCart.bind(this);
}


updateCart(string, fruit){

  const newState = JSON.parse(JSON.stringify(this.state));

  if (string === 'add'){
    newState.shoppingCart[fruit] += 1;
    this.setState(newState);
  }
  else {
    if (newState.shoppingCart[fruit] > 0){
      newState.shoppingCart[fruit] -= 1;
    }
    this.setState(newState);
  }

}

async checkCart(){

  const result = await fetch('http://localhost:3000/update');
  const parsed = await result.json();
  const newState = JSON.parse(JSON.stringify(this.state));

  newState.actualCart = parsed;
  console.log(newState);
  this.setState(newState)
  
}

sendToServer(){

  const options = {
    method: 'POST',
    body: JSON.stringify(this.state)
  };

  fetch('http://localhost:3000/update', options);
  const newState = JSON.parse(JSON.stringify(this.state));
  const cart = newState.shoppingCart;

  for (let key in cart){
    cart[key] = 0;
  }

  this.setState(newState);

  }
  
componentDidMount(){
  this.checkCart();
}


render(){

  return(
    <div style={homeStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={fruitContent}>
          <Fruit name='Apple' quantity={this.state.shoppingCart.Apple} updateCart={this.updateCart}/>
          <Fruit name='Banana' quantity={this.state.shoppingCart.Banana} updateCart={this.updateCart}/>
          <Fruit name='Cranberry' quantity={this.state.shoppingCart.Cranberry} updateCart={this.updateCart}/>
          <Fruit name='Durian' quantity={this.state.shoppingCart.Durian} updateCart={this.updateCart}/>
          <AddToCart sendToServer={this.sendToServer}/>
        </div>
        <div>
          <ShoppingCart items={this.state.actualCart}/>
        </div>
      </div>
    </div>
  );
}

}

export default Home;