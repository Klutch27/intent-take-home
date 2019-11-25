import React, {Component} from 'react';
import Fruit from './Fruit.jsx';
import Header from './Header.jsx';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart: {
        Apple: 0,
        Banana: 0,
        Cranberry: 0,
        Durian: 0
      }
  };

  this.updateCart = this.updateCart.bind(this);
}

/* componentDidMount(){
  have a function that checks the server for the actual shopping cart.. have the shopping cart Tile display that information.
}
*/

updateCart(string, fruit){

  const newState = JSON.parse(JSON.stringify(this.state));
  console.log('newState', newState);

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

render(){

  return(
    <div style={homeStyle}>
      <Header />
      <Fruit name='Apple' quantity={this.state.shoppingCart.Apple} updateCart={this.updateCart}/>
      <Fruit name='Banana' quantity={this.state.shoppingCart.Banana} updateCart={this.updateCart}/>
      <Fruit name='Cranberry' quantity={this.state.shoppingCart.Cranberry} updateCart={this.updateCart}/>
      <Fruit name='Durian' quantity={this.state.shoppingCart.Durian} updateCart={this.updateCart}/>
    </div>
  );
}

}

export default Home;