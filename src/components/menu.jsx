import React from 'react';
import MenuItem from './menuItem.jsx';
import coffee from "../assets/coffee.jpg"

var menuItems = [
  [1, "Latte", 4.99],
  [2,"Cappuccino", 5.24],
  [3, "Mocha", 5.49],
  [4, "Coffee", 1.99]
];

function Menu(){
  return(
    <div className="p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal"> Menu </h1>
      <div className="embed-responsive ratio ratio-16x9">
        {menuItems.map((item) => {
          return(
            <div>
          <MenuItem
          key={item[0]}
          itemName={item[1]}
          itemPrice={item[2]}/>
        </div>)
        })}

      </div>
    </div>
  );
}

export default Menu;
