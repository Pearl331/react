import React from 'react';
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div className="main-image">
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="1st Product" />
        </a>
      </div>
      <div className="other-products">
        {starProduct.slice(1).map((product, index) => (
          <a key={index} href={product.url}>
            <img src={product.image} alt={`Product ${index + 2}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default StarProduct;
