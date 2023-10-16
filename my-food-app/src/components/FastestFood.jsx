import React from 'react';
import foodImage from "../assets/meat-skewer-with-vegetables-black-backgroundai-generative.jpg";

const FastestFood = () => {
  return (
    <div className="relative">
      <div className="w-full h-64 md:h-96 relative">
        <img src={foodImage} className="w-full h-full object-cover" alt="Delicious food" />
      </div>
      <div className="w-full h-64 md:h-96 bg-black opacity-70 absolute top-0 left-0"></div>
      <div className="absolute px-2 top-1/4 sm:top-2/4 md:top-2/4 left-0 md:left-8 text-white font-semibold w-fit md:w-2/3 lg:w-2/3">
        <p className='text-xl md:text-3xl'>Fastest food <span className='text-orange-500'>Delivery</span> in Town</p>
        {/* <p> Our commitment to delivering the fastest food in town is unrivaled,ensuring that you can satisfy your cravings without the long waits.</p> */}
        <p className='text-sm mt-2'>With our speedy service, you can count on getting your food promptly, allowing you to savor every bite without sacrificing time. Join us for a quick, satisfying meal that's perfect for those who appreciate the convenience of fast food without compromising on taste.</p>
      </div>
    </div>
  );
};

export default FastestFood;
