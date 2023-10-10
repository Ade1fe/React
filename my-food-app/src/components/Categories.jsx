import React from 'react';
import chicken from "../assets/chicken.jpg";
import pie from "../assets/pies.jpg";
import drink from "../assets/drinkss.jpg";

const Categories = () => {
  return (
    <div className="">
       <h2 className='capitalize text-center px-5 mb-[20px] md:mb-[40px] text-2xl sm:text-3xl md:text-4xl font-semibold'>Our best delivered Categories</h2>
     
      <div className='flex container mx-auto px-8 md:px-5 justify-evenly flex-wrap gap-8 sm:gap-4 md:gap-5'>
     
      <div className="text-center w-fit">
        <div className="w-[250px] h-[250px]  overflow-hidden rounded-[50%]">
          <img src={chicken} alt="" className='w-full h-full object-cover' />
        </div>

        <div className="my-2">
          <h2 className='text-xl md:text-2xl font-semibold text-orange-500'>Chicken</h2>
          <h2 >See More</h2> 
        </div>
      </div>

      <div className="text-center w-fit">
        <div className="w-[250px] h-[250px] overflow-hidden rounded-[50%]">
          <img src={drink} alt="" className='w-full h-full object-cover' />
        </div>

        <div className="my-2">
          <h2 className='text-xl md:text-2xl font-semibold text-orange-500'>Drinks</h2>
          <h2 >See More</h2> 
        </div>
      </div>


      <div className="text-center w-fit">
        <div className="w-[250px] h-[250px] overflow-hidden rounded-[50%]">
          <img src={pie} alt="" className='w-full h-full object-cover' />
        </div>

        <div className="my-2">
          <h2 className='text-xl md:text-2xl font-semibold text-orange-500'>Pie</h2>
          <h2 >See More</h2> 
        </div>
      </div>

      


    </div>
    </div>
  );
}

export default Categories;
