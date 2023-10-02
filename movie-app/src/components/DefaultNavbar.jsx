import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const DefaultNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center'>
      <div className='text-2xl'>
        <h1>
          <span className='text-blue-500'>Dee</span>-Movies
        </h1>
      </div>

      {isMenuOpen ? (
        <AiOutlineClose
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer md:hidden text-red-500'
        />
      ) : (
        <AiOutlineMenu
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer md:hidden'
        />
      )}

      <div
        className={`${
          isMenuOpen
            ? 'flex z-[9999] pb-5 flex-col justify-center bg-black md:bg-none items-center text-center absolute top-14 w-full left-0'
            : 'hidden'
        } md:flex md:static md:text-left md:w-fit text-lg justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-7`}
      >
        <NavLink
          to='/'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Home
        </NavLink>
       
        {/* Add similar conditional classes for other links */}
        <NavLink
          to='/animetvseries'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/animetvseries' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Series
        </NavLink>
        <NavLink
          to='/animemovie'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/animemovie' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Movies
        </NavLink>
        <NavLink
          to='/'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/anime' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Anime
        </NavLink>
        <NavLink
          to='/animesearch'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/animesearch' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Search
        </NavLink>
        {/* <NavLink
          to='/login'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/login' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Log in
        </NavLink> */}
        {/* <NavLink
          to='/signup'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/signup' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Sign up
        </NavLink> */}
      </div>
    </div>
  );
};

export default DefaultNavbar;
