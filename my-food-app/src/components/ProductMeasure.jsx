import React from 'react';

const ProductMeasure = ({ children }) => {
  return (
    <div>
      {/* <h3 className='text-center px-3 text-lg'>Measurements</h3> */}
      <ul className='w-[80%] mx-auto'>
        {children}
      </ul>
    </div>
  );
};

export default ProductMeasure;
