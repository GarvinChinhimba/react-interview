import React from 'react';

const CartSummary = (props) => {
  return (
    <div className="CartSummary">
       <div className="panel panel-default">
         <div className="panel-body">
           Total:&nbsp;
           <span className="ItemCount" id="ItemCount">
           {props.cart.length}
           </span>
           <br/>
           <br/>
           Total Amount:R&nbsp;
           <span className="TotalCost" id="TotalCost">
            {computeTotalPrice(props.cart).toFixed(2)}
           </span>
           

         </div>

       </div>
    </div>
  )

  function computeTotalPrice(props) {
    
   var total = 0;
   props.map(function(item){
   total += item.price;
   })
   return total;
  };
  

};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;