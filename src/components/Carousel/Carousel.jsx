import React, { useState, useEffect } from 'react';
import BackArrow from'./BackArrow.svg';
import ForwardArrow from './ForwardArrow.svg';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(newIndex);
  };

  if (!pictures || pictures.length === 0) {
    return <div>No pictures available</div>;
  }

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt="carousel" className="carousel-image" />
      <div className="carousel-buttons">
        <button onClick={handlePrevious}><img src={BackArrow} alt="Previous"/></button>
        <button onClick={handleNext}><img src={ForwardArrow} alt="Next"/></button>
      </div>
      <div className="carousel-counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Carousel;