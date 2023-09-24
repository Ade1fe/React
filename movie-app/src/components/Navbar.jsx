// Navbar.js

import React,{useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
// import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ backgroundImage }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundImage: `url(${backgroundImage})`,
    // Add any other styles you want for the navbar
  };

  return (
    <div style={navbarStyle} className='bg-black text-white flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center border-b-2 border-b-red-600'>
      <div className='text-2xl logo text-white font-bold'>
      <h1><span className='text-red-500'>Dee</span>-Movies</h1>
      </div>

      <AiOutlineMenu onClick={toggleMenu} className='cursor-pointer md:hidden' />

      <div className={`${
          isMenuOpen ? 'font-semibold  bg-black opacity-80 backdrop-blur-sm flex z-[99999] flex-col justify-center items-center text-center absolute top-14 w-full left-0 ' : 'hidden'
        } md:flex md:static py-7 md:py-0 logo  md:text-left md:flex-row md:bg-none md:backdrop-filter-none md:w-fit text-lg md:text-xl justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-7`}
      >
        <a href='/' className='nav-link  mx-1 '>
          Home
        </a>
        <a href='/' className='nav-link mx-1'>
          Series
        </a>
        <a href='/' className='nav-link mx-1'>
          Movies
        </a>
        <Link to='/anime' className='nav-link mx-1'>
          Anime
        </Link>
        <a href='/' className='nav-link mx-1'>
          Search
        </a>
        <a href='/' className='nav-link mx-1'>
          Log in
        </a>
        <a href='/' className='nav-link mx-1'>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
