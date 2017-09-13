import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div> 
  
 <ul>{props.shoes.map(shoe => 
   
  (<Shoe key={shoe.id} name={shoe.name} brand={shoe.brand} price={shoe.price} />)

   )
  
   }
   </ul>
</div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;