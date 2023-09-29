import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartPlus } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

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
        <AiOutlineMenu size={28} className="md:hidden cursor-pointer order-2" onClick={toggleMenu} />

        <ul className={`md:flex text-sm md:text-lg  justify-center md:justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14
        absolute top-[56px] z-[999999999999999] right-0 bg-white border-l-2 border-l-orange-500 border-b-2 border-b-orange-500 md:border-none  w-[50%] px-8 py-4 text-center          
          md:static md:w-fit  md:p-0 md:bg-white
        ${isMenuOpen ? 'grid text-center justify-center' : 'hidden'}`}>
          <NavLink
          to='/menu'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/menu' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Menu
        </NavLink>
        <NavLink
          to='/aboutus'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/aboutus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          About
        </NavLink>
        <NavLink
          to='/contactus'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/contactus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Contact
        </NavLink>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 block md:hidden cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
          
        </ul>

        <ul className='flex  text-sm md:text-lg justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14 order-1 md:order-2'>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 cursor-pointer  hover:px-2 hover:py-1 rounded-md hidden md:flex hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
         
         <NavLink
          to='/signin'
          className={`whitespace-nowrap bg-orange-500 text-white border-2 border-orange-500 cursor-pointer px-3 py-1 rounded-md shadow-lg hover:bg-transparent hover:text-black ${
            window.location.pathname === '/signin' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Sign in
        </NavLink>
        </ul>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
