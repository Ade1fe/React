// FoodItemCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const FoodItemCard = ({id, img, title, price, onCardClick }) => {
  const handleCardClick = () => {
    // Pass the necessary information to the parent component
    onCardClick({id, img, price, title });
  };

  return (
    <div className="bg-white shadow-md  overflow-hidden w-52">
      <div className="relative w-full h-40">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="py-0 pb-2 px-2">
        <div className="flex justify-between gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <span className="text-lg font-semibold text-orange-500">{price}</span>
        </div>
        <p className="text-gray-600 text-xs text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste?
        </p>
        <div className="flex justify-between gap-2 mt-2">
          <button
            className="bg-orange-500 text-white px-2 text-sm hover:text-black border-2 border-orange-500
          py-1 rounded-sm hover:bg-white focus:outline-none whitespace-nowrap"
          >
            Add to Cart
          </button>
          {/* <Link to="/productdetails/:id" >  */}
          <button
            onClick={handleCardClick} // Handle the click event here
            className="border-2 border-orange-500 text-black px-2 py-1 hover:text-white rounded-sm
           hover:bg-orange-500 focus:outline-none"
          >
            Details
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;


