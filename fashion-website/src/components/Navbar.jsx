import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaPhoneAlt, FaCartPlus, FaSearch, FaTiktok, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className='mb-2 px-3 '>

      
<div className='flex justify-between items-center border-b-2 border-gray-200 py-3 gap-3'>
        <div className='flex gap-2 py-1'>
            <FaFacebook size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />
            <FaLinkedin size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />
            <FaTwitter size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />
            <FaTiktok size={18} className='hover:text-gray-500 cursor-pointer text-gray-400' />

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

          {/* Add a responsive navigation icon */}
          <div className='sm:hidden' onClick={toggleMenu}>
            <FaBars size={24} />
          </div>

          {/* Add a responsive menu */}
          <ul
            className={`block text-center z-[99999999999]  absolute px-4 sm:px-0 left-0 top-[90px] bg-white w-full sm:w-fit sm:static sm:flex justify-between gap-8 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li className='cursor-pointer  hover:text-[#006d77] hover:font-semibold  my-4  sm:my-0 mx-1 md:mx-2'><Link to="/">Home</Link></li>
            <li className='cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2'><Link to="/aboutus">About Us</Link></li>
            <li className='hidden sm:block  hover:text-[#006d77]  hover:font-semibold relative group  my-4  sm:my-0 mx-1 md:mx-2 cursor-pointer'>
              Pages  <span className={`transform  ${isExpanded ? ' rotate-0' : 'md:-rotate-90'}`}>▼</span>
              <ul className='hidden z-[99999999999] absolute top-4 border-r-2 border-l-2 border-b-2 border-[#006d77] right-[-80PX] text-black bg-white w-[200px] p-2 mt-2 rounded shadow-md group-hover:block'>
                <li className='cursor-pointer  text-black hover:text-cyan-800'><Link>Page1</Link></li>
                <li className='cursor-pointer  text-black my-3 hover:text-[#006d77]'>Page2</li>
                <li className='cursor-pointer  text-black my-3 hover:text-[#006d77]'>Page3</li>
                <li className='cursor-pointer  text-black my-3 hover:text-[#006d77]'>Page4</li>
                <li className='cursor-pointer  text-black my-3 hover:text-[#006d77]'>Page5</li>
              </ul>
            </li>
            <details className='block text-center sm:hidden relative'>
              <summary className='cursor-pointer flex justify-center' onClick={toggleContent}>
                 Pages
                <span className={`transform ${isExpanded ? 'rotate-0' : 'md:-rotate-90'}`}>▼</span>
              </summary>
              {isExpanded && (
                <ul className=''>
                  <li className='cursor-pointer my-3 hover:text-[#006d77]'>Page1</li>
                  <li className='cursor-pointer my-3 hover:text-[#006d77]'>Page2</li>
                  <li className='cursor-pointer my-3 hover:text-[#006d77]'>Page3</li>
                  <li className='cursor-pointer my-3 hover:text-[#006d77]'>Page4</li>
                  <li className='cursor-pointer my-3 hover:text-[#006d77]'>Page5</li>
                </ul>
              )}
            </details>
            <Link to="/blog" className='cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2'> <li > Blog </li></Link>
            <NavLink  to="/shop" activeClassName="text-[#006d77]" className='cursor-pointer  hover:text-[#006d77] hover:font-semibold  my-4  sm:my-0 mx-1 md:mx-2'><li > Shop </li></NavLink>
            <Link  to="/contact" className='cursor-pointer  hover:text-[#006d77]  hover:font-semibold my-4  sm:my-0 mx-1 md:mx-2'><li> Contact </li></Link>
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
