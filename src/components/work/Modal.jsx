import React, { useState } from 'react';
import './modal.css'; // Import your modal styles

const Modal = ({ show, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!show) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-gallery">
          <button onClick={handlePrev} className="nav-button">&laquo;</button>
          <img src={images[currentIndex]} alt={`Gallery image ${currentIndex + 1}`} className="modal-image-large" />
          <button onClick={handleNext} className="nav-button">&raquo;</button>
        </div>
        <div className="modal-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`modal-thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
