import React from 'react';

const ProductMeasure = ({ children }) => {
  return (
    <div>
      <h3>Measurements</h3>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default ProductMeasure;
