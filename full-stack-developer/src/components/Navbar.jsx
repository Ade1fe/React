import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='flex justify-between z-[999999999999999999999] relative items-center bg-gray-950 text-white py-2 px-5 md:px-8'>
      <AiOutlineMenu
        className='block sm:hidden cursor-pointer'
        onClick={toggleMenu}
      />
      <h2 className='text-lg font-bold sm:text-2xl md:text-3xl'>Logo</h2>
      <ul
        className={`${
          menuOpen
            ? 'flex flex-col py-5 sm:py-0 absolute sm:static top-11 w-full sm:w-fit transition-all duration-300 ease-in-out text-center left-0 bg-gray-950 opacity-100'
            : 'hidden opacity-1'
        } sm:flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-16`}
      >
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-red-700'>Home</li>
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-red-700'>Portfolio</li>
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-red-700'>Contact</li>
        <li className='cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-red-700 sm:hidden whitespace-nowrap'>Hire Me</li>
      </ul>
      <h3 className='hidden sm:block whitespace-nowrap border-2 border-red-700 px-3 py-1 rounded-lg hover:bg-red-700 hover:text-black hover:font-semibold cursor-pointer transition-colors'>Hire Me</h3>
    </nav>
  );
};

export default Navbar;
