import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Cart from './components/Cart';
import Api from './api';
import Facet from './components/Facet';

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
    cart:[],
    facetSelected:null
    
    };

    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
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

  handleDeleteFromCart(shoe) {
    var cart = this.state.cart;
    cart.pop(shoe);
    this.setState({cart:cart});
  }

  handleFacetSelect (facet){

    const currentFacet = this.state.facetSelected;

    var current = JSON.stringify(currentFacet);
    var previous = JSON.stringify(facet);

    if (current === previous) {

      this.setState({facetSelected: null});
      Api.getShoes().then(shoes => {
      this.setState({shoes:shoes})

      });
    }
    else {

      this.setState({facetSelected: facet})
      var filteredItems = this.state.shoes.filter(selected => {
        return selected.brand === facet.brand

      });

      this.setState({shoes:filteredItems});
    }

  }

  render() {
    return (
      <div>

<NavBar title="My App Store"/>

        <div className="row">

          <div className="col s3">
          <h4>Shoe Filter</h4>
          <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect} />
          
          </div>

          <div className="col s6">
          <h4>Shoe Collection</h4>
          <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s3">
          <h4>My Cart </h4>
          <Cart items={this.state.cart} onCartShoeRemove={this.handleDeleteFromCart} />
          <CartSummary cart={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
