import React from 'react';
import moda from "../assests/ok.jpg";
import moda1 from "../assests/moda1.jpg";
import moda2 from "../assests/jon.jpg";

const Cards = () => {
  return (
<div className="block mx-auto md:flex flex-wrap justify-center md:justify-evenly gap-2">


<div className='border-0 sm:border-2 my-5 md:my-0 mx-auto border-gray-200 w-max h-max  p-2 relative'>
      <div className="h-[450px] w-[280px] sm:w-[300px]   overflow-hidden">
        <img
          src={moda}
          className='w-full shadow-sm border-2 p-2 sm:p-0 sm:border-0 transition-transform transform hover:scale-110 duration-700 hover:backdrop:'
          alt=""
        />

        <p className='uppercase absolute top-52 left-2 p-4 bg-white text-black font-semibold'>Shop Summer Look</p>
      </div>
    </div>






    <div className='  mb-14 sm:mb-0 my-5 md:my-0 mx-auto w-max h-[560px] relative'>
      <div className="h-[450px]  w-[280px] sm:w-[350px] overflow-hidden">
        <img
          src={moda2}
          className='w-full transition-transform transform hover:scale-110 duration-700 hover:backdrop:'
          alt=""
        />

       
      </div>

      <div className='text-center mx-auto absolute top-[320px] shadow-sm right-[22px] sm:right-[42px] w-[260px]  p-4 py-7 bg-white text-black '>
         <h2 className='uppercase font-semibold text-xl'>New street wardrobe</h2>
         <p className='text-gray-500 text-sm'>Dictum incididunt consectetur blanditiis eum ut ipsam laborios.</p>
         <button className='py-2 my-2 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50'>Shop Now</button>
        </div>
    </div>


    <div className='border-0 sm:border-2 my-5 md:my-0 mx-auto border-gray-200 w-max h-max  p-2 relative'>
      <div className="h-[450px] w-[280px] sm:w-[300px]   overflow-hidden">
        <img
          src={moda1}
          className='w-full shadow-sm border-2 p-2 sm:p-0 sm:border-0 transition-transform transform hover:scale-110 duration-700 hover:backdrop:'
          alt=""
        />

        <p className='uppercase absolute top-52 right-2 p-4 bg-white text-black font-semibold'>Shop Summer Look</p>
      </div>
    </div>


</div>
  );
}

export default Cards;
