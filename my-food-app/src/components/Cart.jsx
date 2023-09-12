
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ img, name, price, nums, total,onDelete }) => {
    console.log('Price:', price);
console.log('Total:', total);

  // Check if the total is a valid number
  const isTotalValid = !isNaN(total) && typeof total === 'number';
  
  

  return (
    <div className='grid p-5 md:p-0 sm:flex gap-3 bg-gray-50 my-5  relative' >
      <div className="w-[100px] mx-auto md:mx-0 h-auto">
        <img src={img} className='object-cover w-full h-auto' alt="" />
      </div>
      <div className="w-full md:w-[80%] py-3  px-1">
        <div className="grid sm:flex justify-between gap-2">
          <h1 className='truncate font-bold text-lg md:text-xl'> {name} </h1>
          <h1 className='font-semibold text-lg '> <span>$</span> <span>{price} </span></h1>
        </div>
        <p className='my-1 text-sm'></p>
        <p className='my-1 text-sm'> <span>Qty</span> ({nums}) </p>
        {isTotalValid && <p>{total}</p>}

        <button
        onClick={onDelete}
        className="bg-transparent border-2 rounded-3xl absolute top-7 md:top-1/2 right-0 md:right-4 transform -translate-x-1/2 -translate-y-1/2 text-black px-2 py-2 text-sm hover:text-white hover:bg-black focus:outline-none"
      >
        <FaTimes />
      </button>
      </div>
    </div>
  );
};

export default Cart;

