import React from 'react';
import coffee from "../assets/coffee.jpg"



function Menu(){
  return(
    <div>
    {/*had to add the ratio and ratio-16x9 (instead of embed-responsive-16by9 noted in the bootstrap documentation) in the enclosing div in order for the video to render correctly */}
      <div className="embed-responsive ratio ratio-16x9">
        <h1> Menu </h1>
      </div>
    </div>
  )
}

export default Menu;
