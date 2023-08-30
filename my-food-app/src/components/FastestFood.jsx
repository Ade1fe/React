import React from 'react';
import foodImage from "../assets/meat-skewer-with-vegetables-black-backgroundai-generative.jpg";

const FastestFood = () => {
  return (
    <div className="relative">
      <div className="w-full h-64 md:h-96 relative">
        <img src={foodImage} className="w-full h-full object-cover" alt="Delicious food" />
      </div>
      <div className="w-full h-64 md:h-96 bg-black opacity-70 absolute top-0 left-0"></div>
      <div className="absolute top-1/4 sm:top-2/4 md:top-2/4 left-10 text-white font-semibold w-fit md:w-2/3 lg:w-2/3">
        <p className='text-xl md:text-2xl'>Fastest Food in Town</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda provident nostrum possimus perferendis quaerat beatae quisquam sint consectetur molestiae dolores.</p>
      </div>
    </div>
  );
};

export default FastestFood;
