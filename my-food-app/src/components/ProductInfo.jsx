// import React from 'react'

// const ProductInfo = ({details}) => {
//   return (
//     <div className='mt-[10px] md:mt-[15px] px-4'>
//      <p className=' text-[15px] sm:text-[17px] md:text-lg'>{details}</p>
   
//     </div>
//   )
// }

// export default ProductInfo
import React from 'react';

const ProductInfo = ({ children }) => {
  return (
    <div className='mt-[10px] md:mt-[15px] px-4'>
      {children}
    </div>
  );
};

export default ProductInfo;

