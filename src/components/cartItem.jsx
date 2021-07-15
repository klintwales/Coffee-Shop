import React from 'react';
import cat from "../assets/cat.jpg";

function CartItem(props){
  return(
    <div class="row" style={{marginBottom:"1%"}}>
        <img class="picture col-1" src={cat}></img>
        <div class="discription col-7">
          <h2>{props.itemName}</h2>
          <p>This is where the menu item list will go</p>
        </div>
        <div class="price col-1">
        <h3>{props.itemPrice}</h3>
        </div>
    </div>
  )
}

export default CartItem;
