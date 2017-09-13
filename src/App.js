import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Api from './api';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);

    this.state = {
    shoes:[],
    cart:[]
    
    };

    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {


    Api.getShoes().then(shoes => (this.setState({shoes:shoes})));

  }

  handleShoeSelect (shoe) {
    var cart = this.state.cart;
    cart.push(shoe);
    this.setState({cart:cart});

  }

  render() {
    return (
      <div>

<NavBar title="My App Store"/>

        <div className="row">

          <div className="col s3">
         
          </div>

          <div className="col s6">
          <h4>Shoe Collection</h4>
          <ShoeList shoes={this.state.shoes} onShoeSelect = {this.handleShoeSelect} />
          </div>

          <div className="col s3">
          <h4>My Cart </h4>
          <CartSummary cart ={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
