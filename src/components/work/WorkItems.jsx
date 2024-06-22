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
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button">
       {/* Request for Demo <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
      </a>

      <Modal show={showModal} onClose={handleCloseModal}>
        <img src={item.image} alt={item.title} style={{ width: '100%' }} className='work__img'/>
        <h3>{item.title}</h3>
        <p>{item.description}</p> {/* Add more content here as needed */}
      </Modal>
    </div>
  );
}

export default WorkItems;
