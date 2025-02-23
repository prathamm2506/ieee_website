import React from 'react'
import './Societies.css'
import sample_image from '../../assets/sample_society_image.png'
const Societies = () => {
  return (
    <div className='Society'>
      <div className="container">
        <div className="left-content">
          <h2>Build the Future of</h2>
          <h2>Manufacturing</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='button55'>Get in Touch</button>
        </div> 
        <div className="right-content">
          <img src={sample_image} alt="image"/>
        </div>
      </div>
    </div>
  )
}

export default Societies