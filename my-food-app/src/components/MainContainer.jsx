import React from 'react';
// import contain from '../assets/main.jpg';

const MainContainer = ({img,title}) => {
  return (
    <div className="relative">
     <div className="w-full h-auto md:h-[450px] lg:h-[550px]">
     <img src={img} className='w-full h-full  object-cover' alt="Tasty Food" />
     </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      <div className="absolute w-[90%] sm:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptate minus! Quod, alias! Numquam ducimus
          placeat dicta incidunt, sint vel?
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
