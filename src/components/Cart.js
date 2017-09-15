import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => (
 <div>
      {props.items.map((item) => {
        return (<div key={item.id} >
            <CartItem key={item.id} name={item.name} brand={item.brand} price={item.price} onCartShoeRemove={props.onCartShoeRemove} />
          </div>)
      })}
   </div>
);
Cart.propTypes = {
  onCartShoeRemove: React.PropTypes.func,
  items: React.PropTypes.array.isRequired
 
};

export default Cart;