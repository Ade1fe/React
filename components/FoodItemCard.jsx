import React from 'react';
import food from "../assets/salmon-518032_1920.jpg";

const FoodItemCard = ({img,title, price,details}) => {
  return (
    <div className="bg-white shadow-md  overflow-hidden w-52">
      <div className="relative w-full h-40">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="py-0 pb-2 px-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <span className="text-lg font-semibold text-orange-500">{price}</span>
        </div>
        <p className="text-gray-600 text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste?
        </p>
        <div className="flex justify-between mt-2">
          <button className="bg-orange-500 text-white px-2 text-sm hover:text-black border-2 border-orange-500
          py-1 rounded-sm hover:bg-white focus:outline-none">
            Add to Cart
          </button>
          <button className="border-2 border-orange-500 text-black px-5 py-1 hover:text-white rounded-sm
           hover:bg-orange-500 focus:outline-none">
            {details}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
