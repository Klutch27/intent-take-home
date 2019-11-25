import React, {Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart: {
        apple: '0',
        banana: '0',
        cranberry: '0',
        durian: '0'
      }
  };
}

render(){

  return(
    <div>
      <p># Apple: {this.state.shoppingCart.apple}</p>
      <p># Banana: {this.state.shoppingCart.banana}</p>
      <p># Cranberry: {this.state.shoppingCart.cranberry}</p>
      <p># Durian: {this.state.shoppingCart.durian}</p>
    </div>
  );
}

}

export default Home;