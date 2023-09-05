import React from 'react';
import ShopCarousel from './ShopCarousel';
import ShopCard from './ShopCard';

const ShopSectOne = () => {
  return (
   <div className="">
     <div className="flex justify-between items-center mb-6">
      <p className="text-gray-500 text-sm">Showing 1-4 of 24 results</p>
       
      <div className="relative">
        <select id="standard-select" className="block appearance-none bg-white border border-gray-300 rounded py-2 px-4 pr-8 focus:outline-none focus:border-blue-500">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
          <option value="Option length">Option that has too long of a value to fit</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <span className="text-gray-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

<ShopCarousel />


<ShopCard />











   </div>
  );
}

export default ShopSectOne;
