import React from 'react';
import './LargeImages.css';

import kirtanImg1 from '../../Images/kirtanImg1.png';
import kirtanImg2 from '../../Images/kirtanImg2.png';

export default function LargeImages() {
  return (
      <div className="containerDiv">
          <div className="alllImages">
              <div className="largeImg1 images1">
                  <img src={kirtanImg1} alt="" />
              </div>

              <div className="largeImg1 images2">
                  <img src={kirtanImg2} alt="" />
              </div>
          </div>
      </div>
  )
}
