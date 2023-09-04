import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex  justify-between items-center px-2 sm:px-5 py-3 md:px-10 bg-white border-b-2 border-b-orange-500 '>
      <div className="text-xl  whitespace-nowrap sm:text-2xl md:text-3xl font-bold ">
        <span className='text-black'>Deife</span> <span className='text-orange-500'>Foods</span>
      </div>

      {/* <div className="flex items-center"> */}
        <AiOutlineMenu className="md:hidden cursor-pointer order-2" onClick={toggleMenu} />

        <ul className={`md:flex text-lg justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14
        absolute top-[63.5px] z-[999999999999999] right-0 bg-white border-l-2 border-l-orange-500 border-b-2 border-b-orange-500 md:border-none  w-[50%] px-8 py-4 text-center          
          md:static md:w-fit  md:p-0 md:bg-white
        ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <Link to="/menu" className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5 md:m-0'>Menu </Link> */}
          <li  className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5 md:m-0'><Link to="/menu">Menu </Link> </li>
          <li className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5 md:m-0'>Offers</li>
          <li className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5 md:m-0'>Services</li>
          
          <Link to="/contactus"> <li className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5 md:m-0'>Contact</li></Link>
          <li className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md md:m-0 flex justify-center text-center mx-auto w-fit md:hidden'><IoMdSearch /></li>
        </ul>

        <ul className='flex text-lg justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14 order-1 md:order-2'>
          <li className='hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md hidden md:flex'><IoMdSearch /></li>
         <Link to="/signin"> <li className='whitespace-nowrap bg-orange-500 text-white border-2 border-orange-500 cursor-pointer px-3 py-1 rounded-md shadow-lg hover:bg-transparent hover:text-black'>Sign in</li></Link>
        </ul>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
