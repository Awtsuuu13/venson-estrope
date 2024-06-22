import React, { useState } from 'react';
import Modal from './Modal';

function WorkItems({ item }) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='work__card' key={item.id}>
      <div onClick={handleImageClick}>
        <img src={item.image} alt={item.title} className='work__img' />
        <h3 className="work__title">{item.title}</h3>
      </div>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button">
          Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : (
        <span onClick={handleImageClick} className="work__button">
          View <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>
      )}
      <Modal show={showModal} onClose={handleCloseModal} images={item.additionalImages} />
    </div>
  );
}

export default WorkItems;
