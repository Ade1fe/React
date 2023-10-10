

import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ProductThree = ({ h1, ingr, details }) => {
  return (
    <div className='mt-3 md:mt-0'>
      <h1 className='text-lg text-center md:text-left sm:text-xl md:text-2xl font-bold mb-1 capitalize'>{h1}</h1>
      <p>
        <span className='font-bold my-1'>with</span> <span>{ingr}</span>
      </p>
      <p className='flex w-fit py-2 text-orange-500 items-center'>
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalf size={15} />
        <span className='text-black text-sm'>(45)</span>
      </p>
      <div className='my-1 text-sm md:text-lg font-semibold overflow-hidden line-clamp-4'>
        {details}
      </div>
    </div>
  );
};

export default ProductThree;

