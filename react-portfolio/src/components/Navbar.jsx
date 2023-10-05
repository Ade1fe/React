import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/photo_5929181771100961704_y.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get the current location from React Router
  const location = useLocation();

  // Function to check if a link is active
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  return (
    <div className="bg-white flex justify-between relative items-center px-5 md:px-10 py-2 font-bold">
      <div className="w-[50px] overflow-hidden rounded-[50%]" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center md:hidden font-semibold text-sm  ">
      <Link to="/letUsTalk" style={isLinkActive('/letUsTalk') ? { color: '#adb5bd' } : {}}>
      Lets Talk
    </Link>
      </div>
      {isMenuOpen ? (
        <AiOutlineClose className="block md:hidden" size={20} onClick={toggleMenu} />
      ) : (
        <AiOutlineMenu className="block md:hidden" size={20} onClick={toggleMenu} />
      )}
      
      <ul
        className={`${
          isMenuOpen ? 'flex transition-all duration-500 text-sm  ' : 'hidden'
        } absolute top-16 right-0 w-full  justify-evenly z-[99999999999999999999999999999] mt-1 gap-2 md:gap-16 flex-col align-middle md:flex md:flex-row md:static md:w-auto x-transition:enter="animate-showItem" x-transition:leave="animate-hideItem" font-semibold h-[full] md:h-auto bg-white `}
      >
        <li className={`text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#A06CD5] ${isLinkActive('/') ? 'text-[#adb5bd]' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#A06CD5] ${isLinkActive('/work') ? 'text-[#adb5bd]' : ''}`}>
          <Link to="/work">Work</Link>
        </li>
        <li className={`text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#A06CD5] ${isLinkActive('/about') ? 'text-[#adb5bd]' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`text-center mb-3 md:mb-0 animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#A06CD5] ${isLinkActive('/contact') ? 'text-[#adb5bd]' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hidden py-1 align-middle md:block font-semibold hover:text-[#A06CD5] text-sm ">
       <h3 className=''>
    <Link to="/letUsTalk" style={isLinkActive('/letUsTalk') ? { color: '#adb5bd' } : {}}>
      Lets Talk
    </Link>
  </h3>
</div>

    </div>
  );
};

export default Navbar;
