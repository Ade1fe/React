import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white flex justify-between relative align-middle px-5 md:px-10 py-4 font-bold">
      <div className="text-2xl md:text-3xl">
        <h1>GridX</h1>
      </div>
      <div className="flex align-middle md:hidden font-semibold text-xl md:text-[18px]">
      <h3><Link to="/letUsTalk">Lets Talk</Link></h3>
      </div>
      {isMenuOpen ? (
        <AiOutlineClose className="block md:hidden" size={30} onClick={toggleMenu} />
      ) : (
        <AiOutlineMenu className="block md:hidden" size={30} onClick={toggleMenu} />
      )}
      <ul
        className={`${
          isMenuOpen ? 'flex transition-all duration-500' : 'hidden'
        } absolute top-14 right-0 w-full justify-evenly z-[99999999999999999999999999999] mt-1 gap-4 md:gap-16 flex-col align-middle md:flex md:flex-row md:static md:w-auto x-transition:enter="animate-showItem" x-transition:leave="animate-hideItem" font-semibold h-[full] md:h-auto bg-white text-xl md:text-[18px]`}
      >
        <li className="text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#adb5bd]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#adb5bd]">
          <Link to="/work">Work</Link>
        </li>
        <li className="text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#adb5bd]">
          <Link to="/about">About</Link>
        </li>
        <li className="text-center animate-showItem transition-opacity duration-500 py-2 md:py-0 hover:text-[#adb5bd]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hidden py-1 align-middle md:flex font-semibold text-xl md:text-[18px]">
        <h3><Link to="/letUsTalk">Lets Talk</Link></h3>
      </div>
    </div>
  );
};

export default Navbar;
