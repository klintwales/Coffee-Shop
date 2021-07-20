import React from 'react';
import cat from "../assets/cat.jpg";

function CartItem(props){
  return(

    <div class="row" style={{marginBottom:"1%"}}>
        <img class="picture col-1" style={{marginLeft:"2%"}} src={cat}></img>
        <div class="discription col-6">
          <h2>{props.itemName}</h2>
          <p>This is where the menu item list will go</p>
        </div>
        <div class="row price col-1 w-1">
        <h3 class="h-25" style={{textAlign:"right"}}>${props.itemPrice}</h3>
        <div class="h-75">
        <rect x="0" y="0" onClick={ () => props.onDelete(props)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="col bi bi-trash-fill float-end">
        <path  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </rect>
        </div>
        </div>
    </div>
  )
}


export default CartItem;
