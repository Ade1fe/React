import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetailsOne = ({ onCardClick }) => { // Add onCardClick prop
  const location = useLocation();
  const { img, title, id, price } = location.state || {};

  if (!img || !title || !id || !price) {
    // Handle the case where data is missing or undefined
    return <div>Data not found.</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <p>{id}</p>
      <p>{price}</p>
      {/* Call onCardClick when needed */}
      <button onClick={() => onCardClick({ title, img, price })}>Click Me</button>
    </div>
  );
};

export default ProductDetailsOne;
