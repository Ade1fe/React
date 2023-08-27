import React from 'react';
import pic from "../assests/young-african-american-woman-shopping-with-colorful-packs-black.jpg";

const MainContent = ({text}) => {
  return (
    <div className='mt-[0] md:mt-[20px] relative'>
      <div className='w-full sm:h-[450px] md:h-[600px] relative'>
        <img src={pic} alt='' className='w-full h-full object-cover relative' />
        <div className='absolute top-[20px] left-0 w-full h-[94%] bg-black opacity-50 blur-xl'></div>
        
        <div className='absolute inset-0 flex items-center justify-center z-[9999999999] text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
