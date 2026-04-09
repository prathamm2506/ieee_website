/*import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

import img1 from '../../assets/maam.webp';
import img2 from '../../assets/head.webp';
import img3 from '../../assets/ISG2.webp';
import img4 from '../../assets/ISG4.webp';
import img5 from '../../assets/ISG1.webp';
import img6 from '../../assets/ISG3.webp';
import img7 from '../../assets/imagez.webp';
import img8 from '../../assets/IMG.webp';

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

export default Header;*/
import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const sliderItemsRef = useRef([]);

  // ✅ Using public folder paths (SAFE METHOD)
  const slides = [
    {
      img: "/maam.webp",
      title: "MAGIC SLIDER",
      type: "FLOWER",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      img: "/head.webp",
      title: "MAGIC SLIDER",
      type: "NATURE",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      img: "/ISG2.webp",
      title: "MAGIC SLIDER",
      type: "NATURE",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    // {
    //   img: "/ISG4.webp",
    //   title: "MAGIC SLIDER",
    //   type: "NATURE",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    // },
    {
      img: "/ISG1.webp",
      title: "MAGIC SLIDER",
      type: "PLANT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      img: "/ISG3.webp",
      title: "MAGIC SLIDER",
      type: "PLANT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      img: "/imagez.webp",
      title: "MAGIC SLIDER",
      type: "PLANT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    // {
    //   img: "/IMG.webp",
    //   title: "MAGIC SLIDER",
    //   type: "PLANT",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    // },
  ];

  const moveSlider = (direction) => {
    const items = sliderItemsRef.current;
    if (!items || items.length === 0) return;

    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      sliderListRef.current.appendChild(items[0]);
    } else if (direction === "prev") {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      sliderListRef.current.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    sliderItemsRef.current = sliderListRef.current.querySelectorAll(".item");
  }, [slides]);

  useEffect(() => {
    const slider = sliderRef.current;
    const onAnimationEnd = () => {
      slider.classList.remove("next", "prev");
    };

    slider.addEventListener("animationend", onAnimationEnd);
    return () => {
      slider.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 8000);

    return () => clearInterval(interval);
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
        <button className="prev" onClick={() => moveSlider("prev")}>
          {"<"}
        </button>
        <button className="next" onClick={() => moveSlider("next")}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Header;
