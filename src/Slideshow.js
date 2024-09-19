// Slideshow.js
import React from 'react';
import './Slideshow.css';

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="image1.jpg" alt="Slide 1" style={{ width: '100%' }} />
      </div>
      <div className="mySlides fade">
        <img src="image2.jpg" alt="Slide 2" style={{ width: '100%' }} />
      </div>
      <div className="mySlides fade">
        <img src="image3.jpg" alt="Slide 3" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Slideshow;
