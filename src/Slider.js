import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="slider">
      <img src={images[currentImageIndex]} alt="slider" className="slider__image" />
      <div className="slider__buttons">
        <button className="slider__button" onClick={handlePrevImage}>Prev</button>
        <button className="slider__button" onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
