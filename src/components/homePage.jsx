import React from 'react';
import { Player } from 'video-react';


function HomePage(){
  return(
    <div>
    /*had to add the ratio and ratio-16x9 (instead of embed-responsive-16by9 noted in the bootstrap documentation) in the enclosing div in order for the video to render correctly */
      <div class="embed-responsive ratio ratio-16x9">
        <iframe class="video embed-responsive-item w-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default HomePage;
