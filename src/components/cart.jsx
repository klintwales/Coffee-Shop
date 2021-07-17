import React, {useState} from 'react';
import CartItem from "./cartItem.jsx";


function Cart(){

const [items, removeItem] = useState(window.shoppingCart)

function deleteItem(id){
  console.log(items);
  items.splice(id);
  removeItem(items);
}


  return(
    <div>
      <h1 style={{marginTop:"1%"}}>Shopping Cart</h1>
        <div>
          <br/>
          <br/>
          <h2>Items</h2>
          <br/>
          <div>
            {items.map((item) => {
              return(
                <CartItem
                key={item.index}
                id={item.index}
                itemName={item.item}
                itemPrice={item.price}
                onDelete={deleteItem}
                />
              )
            })}
          </div>
        </div>
    </div>

  );
}

export default Cart;
