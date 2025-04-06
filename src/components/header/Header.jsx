import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

import img1 from '../../assets/maam.jpg';
import img2 from '../../assets/head.png';
import img3 from '../../assets/ml.jpg';
import img4 from '../../assets/GroupPhoto.jpg'
import img5 from '../../assets/ml2.jpg';
import img6 from '../../assets/uiux.jpg'
import img7 from '../../assets/council.png';
import img8 from '../../assets/photshootCouncil.jpg'

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const sliderItemsRef = useRef([]);

  const slides = [
    { img: img1, title: 'MAGIC SLIDER', type: 'FLOWER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img2, title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img3, title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img4, title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img5, title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img6, title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img7, title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
    { img: img8, title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
  ];

  const moveSlider = (direction) => {
    const items = sliderItemsRef.current;
    if (!items || items.length === 0) return;

    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      sliderListRef.current.appendChild(items[0]);
    } else if (direction === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      sliderListRef.current.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    sliderItemsRef.current = sliderListRef.current.querySelectorAll('.item');
  }, [slides]);

  useEffect(() => {
    const slider = sliderRef.current;
    const onAnimationEnd = () => {
      slider.classList.remove('next', 'prev');
    };

    slider.addEventListener('animationend', onAnimationEnd);
    return () => {
      slider.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider('next');
    }, 8000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="list" ref={sliderListRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.img} alt={slide.title} className="slide-image" />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}>
          {'<'}
        </button>
        <button className="next" onClick={() => moveSlider('next')}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Header;
