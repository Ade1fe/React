import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  return (
    <div className='flex px-3 md:px-11 uppercase justify-between py-4 items-center bg-white shadow-md'>
      <div className="font-bold text-[21px] md:text-[25px]">
        <h1 className='myH1 font-effect-shadow-multiple'><Link to="/app">TripLink</Link></h1>
      </div>
      <ul className="flex justify-between items-center font-semibold myUl text-[15px] md:text-[18px]">
        <li className={`px-1 md:px-5 mr-2 ${isLinkActive('/admin') ? 'text-red-500' : ''}`}>
          <Link to="/admin">Admin</Link>
        </li>
        <li className={`px-5 md:px-5 bg-black py-1 mx-2 rounded-[12px] text-white border-2 border-sky-500 hover:bg-white hover:text-black ${isLinkActive('/') ? 'bg-red-500 text-white' : 'bg-black text-white'}`}>
          <Link to="/">Log In</Link>
        </li>
        {/* Uncomment the next line to add a Sign Up link */}
        {/* <li className='px-5'><Link to="/">Sign Up</Link></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
