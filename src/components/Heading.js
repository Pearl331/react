import React from 'react';
import "../styles/Heading.css";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <div className="heading-line"></div>
      <p className="heading-text">{text}</p>
      <div className="heading-line"></div>
    </div>
  );
};

export default Heading;

