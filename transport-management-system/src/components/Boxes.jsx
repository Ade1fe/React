import React from 'react';
import { FaHome, FaUser, FaNewspaper } from 'react-icons/fa';

const Boxes = () => {
  const divStyle = {
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  };
  return (
    <div className='block sm:flex justify-evenly mt-[30px] items-center gap-4 px-4 py-4'>
      <div className="p-4 flex-1 my-0 sm:my-0 " style={divStyle}>
        <FaUser size={50}  className='text-center mt-2 text-sky-500 hidden sm:block' />  
        <FaUser size={30}  className='text-center mt-2 text-sky-500 block sm:hidden' />  
        <h2 className='font-bold text-l sm:text2 my-2'>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          aspernatur? Dolorem nesciunt in ipsum ex, distinctio harum.
        </p>
      </div>
      <div className="p-4 flex-1 my-2 sm:my-0 " style={divStyle}>
        <FaNewspaper size={50} className='text-center mt-2 text-sky-500  hidden sm:block' />
        <FaNewspaper size={30} className='text-center mt-2 text-sky-500  block sm:hidden' />
        <h2 className='font-bold text-xl sm:text2 my-2'>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          aspernatur? Dolorem nesciunt in ipsum ex, distinctio harum.
        </p>
      </div>
      <div className="p-4 flex-1 my-2 sm:my-0 " style={divStyle}>
         <FaHome size={50} className='text-center mt-2 text-sky-500 hidden sm:block' />
        <FaHome size={30} className='text-center mt-2 text-sky-500 block sm:hidden' />
        <h2 className='font-bold text-xl sm:text2 my-2'>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          aspernatur? Dolorem nesciunt in ipsum ex, distinctio harum.
        </p>
      </div>
    </div>
  );
};

export default Boxes;
