import React from 'react'

function WorkItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt="" className='work__img'/>
          <h3 className="work__title">{item.title}</h3>
        </a>
        <a href="#" className="work__button">
            {/* Demo <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
        </a>

    </div>
  )
}

export default WorkItems