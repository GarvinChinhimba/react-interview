import React from 'react';

const CartSummary = (props) => {
  return (
    <div className="CartSummary">
      {props.cart}
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;