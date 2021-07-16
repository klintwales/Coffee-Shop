import React from 'react';

function MenuItem(props){
  return(
            <div className="col-md-4">
            <div className="card mb-4 rounded-3 shadow-sm" style={{padding:"0px", margin:"0px", height:"20rem"}}>
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{props.itemName}</h4>
              </div>
              <div className="card-body">
              <h1 className="card-title pricing-card-title">{props.itemPrice}</h1>
              <button class="w-100 btn btn-lg btn-primary" type="button" style={{marginTop:"100px"}} onClick={ () => addToCart(props)}>Add to Cart</button>
              </div>
            </div>
            </div>
  )
}

function addToCart(props){
  window.shoppingCart.push({"item": props.itemName, "price": props.itemPrice});
}

export default MenuItem;
