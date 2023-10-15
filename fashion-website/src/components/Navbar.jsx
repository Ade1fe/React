import React, { useState } from 'react';
// eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes, FaPhoneAlt, FaCartPlus, FaSearch,  FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // eslint-disable-next-line
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className='mb-2 px-3 '>

      
<div className='flex justify-between items-center border-b-2 border-gray-200 py-3 gap-3'>
        <div className='flex gap-2 py-1'>
       
          <a
  href="https://twitter.com/deife_syntax"
  target="_blank"
  rel="noopener noreferrer"
 
>
  <FaTwitter ize={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />
</a> 

<a
href='https://github.com/Ade1fe'
  target="_blank"
  rel="noopener noreferrer"
 
>
  <FaGithub ize={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />
</a> 
<a href='https://www.linkedin.com/in/damilola-adeife-oluwadamisi-699325235/?trk=contact-info'
         target="_blank"
         rel="noopener noreferrer"
      >
         <FaLinkedin size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' /> 
       </a>
          
       <a href='https://www.instagram.com/deife_syntax/'
       target="_blank"
       rel="noopener noreferrer"
   >
       <FaInstagram size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' /> 
       </a>

        </div>

        <div className='flex gap-2 text-gray-400 text-sm font-semibold'>
          <h2 className='hover:text-gray-500 cursor-pointer'>Login</h2> <span>|</span> 
          <h2 className='hover:text-gray-500 cursor-pointer'>Register Account</h2>
        </div>

    </div>



      {/* second header */}
      <div className='block lg:flex justify-between gap-3 items-center'>
        <div className='flex justify-between pt-2 lg:pt-0 items-center w-full lg:w-2/3'>
          <div className=''>
            <h2 className='text-xl sm:text-2xl font-bold'>Deife-Luxe</h2>
          </div>

          <div className="sm:hidden">
          {isMenuOpen ? (
            <FaTimes size={24} onClick={toggleMenu} />
          ) : (
            <FaBars size={24} onClick={toggleMenu} />
          )}
        </div>

        
          <ul
            className={`flex flex-col text-center z-[99999999999]  absolute px-4 sm:px-0 left-0 top-[90px] bg-white w-full sm:w-fit sm:static sm:flex sm:flex-row justify-between gap-1 sm:gap-8 ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
             <NavLink
          to='/'
          className={`cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2${
            window.location.pathname === '/' ? ' text-[#006d77] text font-bold' : ''
          }`}
        >
          Home
        </NavLink>
        

        <NavLink
          to='/aboutus'
          className={`cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2${
            window.location.pathname === '/aboutus' ? ' text-[#006d77] text font-bold' : ''
          }`}
        >
          About
        </NavLink>


        <NavLink
          to='/blog'
          className={`cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2${
            window.location.pathname === '/blog' ? ' text-[#006d77] text font-bold' : ''
          }`}
        >
          Blog
        </NavLink>


        <NavLink
          to='/shop'
          className={`cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2${
            window.location.pathname === '/shop' ? ' text-[#006d77] text font-bold' : ''
          }`}
        >
          Shop
        </NavLink>


        <NavLink
          to='/contact'
          className={`cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2${
            window.location.pathname === '/contact' ? ' text-[#006d77] text font-bold' : ''
          }`}
        >
          Contact
        </NavLink>

          </ul>
        </div>

        <div className='flex gap-8 w-full my-2 md:my-0  justify-between sm:justify-end md:justify-end items-center py-2 lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <div className='bg-gray-300 flex-1 p-2 md:p-3 rounded-[50%] hover:text-white hover:bg-[#006d77] cursor-pointer  hover:font-semibold '>
              <FaPhoneAlt size={17} />
            </div>
            <div className='block'>
              <h2>Hot Line</h2>
              <p>+2349038257434</p>
            </div>
          </div>

          <div className='flex items-center gap-5'>
            <div className='bg-gray-300 flex items-center hover:text-white hover:bg-[#006d77] cursor-pointer  hover:font-semibold  p-2 md:p-3 md:px-4 rounded-[50%]'>
              <FaCartPlus size={18} />
            </div>

            <div className='bg-gray-300  hover:text-white hover:bg-[#006d77] cursor-pointer  hover:font-semibold  flex items-center p-2 md:p-3 md:px-4 rounded-[50%]'>
              <FaSearch size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
