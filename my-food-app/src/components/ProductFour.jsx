import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const ProductFour = ({ tags, country, tube ,price}) => {
  return (
    <div className='mt-[10px] mb-[30px]'>
      <p className='cursor-pointer my-1 w-fit  flex items-center flex-wrap gap-3'>
        <span className='px-2 py-1 border-[2px] rounded-[10px] border-black'>{tags}</span>
        <span className='px-2 py-1 border-[2px] rounded-[10px] border-black'>{country}</span>
        <a
          href={tube}
          target='_blank'
          rel='noopener noreferrer' 
          className='text-red-500  rounded-[10px]'
        >
         <FaYoutube size={40} />
        </a>
      </p>
      <p className='px-3 w-fit text-center py-1 text-lg my-1'><span>Price: </span>
       <span className='text-orange-500'>{price} </span></p>
       <p className='py-2 text-sm my-1 rounded-lg px-4 text-center text-white hover:bg-orange-700 cursor-pointer md:text-lg bg-orange-500 font-semibold w-fit'>Add to cart</p>
    </div>
  );
};

export default ProductFour;
