import React from 'react';
import CartItem from "./cartItem.jsx";



function Cart(){
  return(
    <div>
      <h1 style={{marginTop:"1%"}}>Shopping Cart</h1>
        <div>
          <br/>
          <br/>
          <h2>Items</h2>
            <div>
            <CartItem/>
            </div>
        </div>
    </div>

  );
}

export default Cart;
