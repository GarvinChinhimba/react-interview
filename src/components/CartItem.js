import React from 'react'

const CartItem = (props) => (
<div>
    <ul className="collection">
    <li className="collection-item" key={props.id}>{"" + props.brand + " " + props.name +" " + "R" + props.price.toFixed(2)}
      &nbsp; <a href="#" onClick={(i) => props.onCartShoeRemove(props)}><i className="material-icons">delete</i></a>
    </li>
    </ul>
  </div>
);
CartItem.propTypes = {
    brand: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    onCartShoeRemove: React.PropTypes.func,
    name: React.PropTypes.string.isRequired,
  
  };
  
  export default CartItem;



