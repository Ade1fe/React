import React from 'react';
import booknow from '../assets/trans.jpg';

const Hero = () => {
  return (
    <div className="container mx-auto px-2 gap-0 md:gap-4 grid text-center md:flex md:order-1 items-center max-w-[1240px]">
      <div
        className="w-[90%] md:w-1/3 bg-white mx-auto order-2 p-5 py-9"
        style={{
          boxShadow:
            'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          praesentium voluptatum deserunt dolor iste recusandae, numquam ducimus
          maxime hic esse?
        </p>
        <button className="bg-blue-500 shadow-lg shadow-sky-500/20 hover:translate-x-2 duration-500 hover:bg-white hover:text-black hover:font-bold border-2 border-sky-500 py-2 mt-3 text-white px-4 rounded-md">
          Book a Slot
        </button>
      </div>
      <div className="imgContainer w-[100%] md:w-2/3 px-3 md:h-[500px]  h-[300px] order-1 md:order-2">
        <img
          src={booknow}
          alt="/"
          className="bookNow w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
