import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
// import '../css/NavbarBlueMovie.css';

const DefaultNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center '>
      <div className='text-2xl '>
      <h1><span className='text-blue-500'>Dee</span>-Movies</h1>
      </div>

      <AiOutlineMenu onClick={toggleMenu} className='cursor-pointer md:hidden' />

      <div
        className={`${
          isMenuOpen ? 'flex z-[9999] flex-col justify-center items-center text-center absolute top-14 w-full left-0 border-2' : 'hidden'
        } md:flex md:static md:text-left md:w-fit text-lg  justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-7`}
      >
        <a href='/' className='nav-link  mx-1 hover:text-blue-500'>
          Home
        </a>
        {/* <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Series
        </a> */}
        {/* <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Movies
        </a> */}
        {/* <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Anime
        </a> */}
        <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Search
        </a>
        <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Log in
        </a>
        <a href='/' className='nav-link mx-1 hover:text-blue-500'>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default DefaultNavbar;

