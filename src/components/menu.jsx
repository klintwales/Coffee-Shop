import React from 'react';
import MenuItem from './menuItem.jsx';
import coffee from "../assets/coffee.jpg"



function Menu(){
  return(
    <div className="p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal"> Menu </h1>
      <div className="embed-responsive ratio ratio-16x9">
        <MenuItem/>
      </div>
    </div>
  )
}

export default Menu;
