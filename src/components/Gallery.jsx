import React, {useState} from 'react';
import { imageSlide } from '../images/helper/imageArray';
import './gallery.css'
function Gallery() {
const [curimg, setCurimg] = useState(0);


  return (
    <div className='carousel'>
      <div className='carouselInner'
      style={{backgroundImage: `url(${imageSlide[curimg].img
      })`}}>
      </div>
    </div>
  );
}

export default Gallery