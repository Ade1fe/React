import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = ({ backgroundImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div style={navbarStyle} className='bg-black text-white flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center border-b-2 border-b-red-600'>
      <div className='text-2xl logo text-white font-bold'>
        <h1>
          <span className='text-red-500'>Dee</span>-Movies
        </h1>
      </div>

      {isMenuOpen ? (
        <AiOutlineClose size={25} onClick={toggleMenu} className='cursor-pointer md:hidden' />
      ) : (
        <AiOutlineMenu size={25} onClick={toggleMenu} className='cursor-pointer md:hidden' />
      )}

      <div
        className={`${
          isMenuOpen
            ? 'font-semibold bg-black opacity-80 backdrop-blur-sm flex z-[99999] flex-col justify-center items-center text-center absolute top-14 w-full left-0 transition-opacity delay-1000'
            : 'hidden'
        } md:flex md:static py-7 md:py-0 logo  md:text-left md:flex-row md:bg-none md:backdrop-filter-none md:w-fit text-lg justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-7`}
      >
        <a href='/' className='nav-link mx-1 hover:text-red-500'>
          Home
        </a>
        <Link to='/movieseries' className='nav-link mx-1 hover:text-red-500'>
          Movies
        </Link>
        <a href='/tvseries' className='nav-link mx-1 hover:text-red-500'>
          Tv Series
        </a>
        <Link to='/anime' className='nav-link mx-1 hover:text-red-500'>
          Anime
        </Link>
        <a href='/moviesearch' className='nav-link mx-1 hover:text-red-500'>
          Search <span className='text-xs text-red-600 hover:text-white'>18+</span>
        </a>
        <a href='/' className='nav-link mx-1 hover:text-red-500'>
          Log in
        </a>
        <a href='/' className='nav-link mx-1 hover:text-red-500'>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
