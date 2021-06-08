import React from 'react';
import coffee from "../assets/coffee.jpg"



function HomePage(){
  return(
    <div>
    {/*had to add the ratio and ratio-16x9 (instead of embed-responsive-16by9 noted in the bootstrap documentation) in the enclosing div in order for the video to render correctly */}
      <div className="embed-responsive ratio ratio-16x9">
        <img className="embed-responsive-item w-100" src={coffee} alt="coffee"></img>
      </div>
    </div>
  )
}

export default HomePage;
