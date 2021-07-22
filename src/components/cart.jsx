import React, {useState} from 'react';
import CartItem from "./cartItem.jsx";


function Cart(){

const [items, removeItem] = useState(window.shoppingCart)

//Called by the cartItem onClick
function deleteItem(props){
  console.log(props.id);
  //React requires a funtion to be passed for using state
  removeItem(removeItemFromArray(props));
}

//Iterates through window.shoppingCart and adds all of the items except for the item that was deleted to a temporary array, then sets window.shopping equal to the new temp array
function removeItemFromArray(props){
  console.log("props");
  console.log(props);
  let newArray = [];
    for(let i = 0; i < window.shoppingCart.length; i++){
      if (i != props.id){
        newArray.push(window.shoppingCart[i]);
        console.log(window.shoppingCart[i]);
      }
    }
  console.log(newArray);
  window.shoppingCart = newArray;
  return (newArray);

}




//Creates cart item for each item in window.shoppingCart
  return(
    <div style={{marginBottom:"1%"}}>
      <h1 style={{marginTop:"1%"}}>Shopping Cart</h1>
        <div>
          <br/>
          <br/>
          <h2>Items</h2>
          <br/>
          <div>
            {items.map((newItem, index) => {
              return(
                <CartItem
                key={index}
                id={index}
                itemName={newItem.item}
                itemPrice={newItem.price}
                onDelete={deleteItem}
                />
              )
            })}
          </div>
          <row style={{textAlign:"right"}}>
          <div class="col-8">
          <a href="" class="btn btn-primary btn-lg px-4">Check Out</a>
          </div>
          </row>
        </div>
    </div>

  );
}

export default Cart;
