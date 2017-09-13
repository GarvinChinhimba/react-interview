import React from 'react';

const Shoe = (props) => (
  <div>
   <div className="col s12 m9">
   <div className="card horizontal">
     <div className="card-stacked">
       <div className="card-content">
         <h4> {props.name} > {props.brand}</h4> 
    
     <h6> R{props.price.toFixed(2)}</h6>
       </div>
       <div className="card-action">
         <a href="#" onClick={(i) => props.onShoeSelect(props)}>ADD TO CART</a>
       </div>
     </div>
   </div>
 </div>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;