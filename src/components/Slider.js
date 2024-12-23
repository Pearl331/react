import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ start = [] }) => { // Default value for safety
  return (
    <Carousel>
      {start.map((item, index) => (
        <Carousel.Item key={index}> {/* Unique key for each item */}
          <img
            className="d-block w-100"
            src={item}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;

