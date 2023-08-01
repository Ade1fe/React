import React from 'react';
import { FaCamera, FaPencilAlt } from 'react-icons/fa';
import { BiCodeBlock, BiBook } from 'react-icons/bi';
import { Link } from "react-router-dom";

const ServicesBox = ({ specialization, servicesTitle }) => {
  return (
    <Link to="/service"className="sm:w-[50%] md:w-[63%] flex flex-col my-3 sm:my-0 justify-center order-3 rounded-[20px] bg-white px-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
 <div >
      <div className="flex justify-evenly text-purple-300 pt-6">
    <FaCamera size={50} />
    <FaPencilAlt size={50} />
    <BiCodeBlock size={50} />
    <BiBook size={50} />
  </div>
      <div className='py-5 mt-[80px] px-4'>
        <p className="uppercase text-[#5F666D]">{specialization}</p>
        <h1 className="font-bold text-xl sm:text-2xl">{servicesTitle}</h1>
      </div>
    </div>
    </Link>
   
  );
};

export default ServicesBox;
