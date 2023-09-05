import React from 'react';

export const FoodCard = ({ img, title }) => {
  return (
    <div className="w-[150px] h-[100px] sm:w-[200px] sm:h-[150px] md:w-[250px] md:h-[200px] relative">
      <img src={img} className="w-full h-full object-cover" alt={title} />
      <p className="text-xs sm:text-sm md:text-lg truncate absolute bottom-0 left-0 text-white text-center px-3 py-1 w-full bg-black bg-opacity-40 backdrop-blur-md">
        {title}
      </p>
    </div>
  );
};
