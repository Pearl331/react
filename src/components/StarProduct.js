import React from 'react';
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      {/* First product */}
      <div className="starProduct-item">
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt={`Product 1`} />
        </a>
      </div>
      
      {/* Other products */}
      <div className="starProduct-other-items">
        {starProduct.slice(1).map((product, index) => (
          <a href={product.url} key={index}>
            <img src={product.image} alt={`Product ${index + 2}`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default StarProduct;
