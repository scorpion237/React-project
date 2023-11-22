import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Carousel.css'; // Ajoutez un fichier CSS pour styliser le carousel

const Carousel3D = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];

  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const { transform } = useSpring({
    transform: calc(window.innerWidth / 2, window.innerHeight / 2),
    config: { mass: 5, tension: 350, friction: 40 },
  });

  return (
    <div className="carousel-container">
      <animated.div
        className="carousel"
        style={{ transform: transform.interpolate((x, y, s) => trans(x, y, s)) }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </animated.div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel3D;
