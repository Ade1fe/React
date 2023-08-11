import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch, FaPuzzlePiece } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative  items-center bg-[#a2d2ff] py-3  flex flex-row lg:flex-row justify-between px-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold"><Link to='/app'>Deife-Quiz</Link></h1>
      </div>

      <div className="absolute top-6 right-4">
        <AiOutlineMenu size={20} className="lg:hidden cursor-pointer" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 px-3 bg-[#a2d2ff] py-2 w-full flex items-center flex-col md:flex-row justify-between">
          <div className="flex items-center gap-3 border-white border-[1px] pr-4 rounded-[20px]">
            <div className="flex justify-center rounded-l-[20px]">
              <input
                type="text"
                className="focus:outline-sky-200 w-full lg:w-[400px] px-5 py-1 border-[1px] rounded-l-[20px] border-white flex"
                placeholder="Search"
              />
              <div className="px-2 ml-[-30px] flex items-center">
                <FaSearch size={15} />
              </div>
            </div>
            <h3 className='whitespace-nowrap'>All the Activities</h3>
          </div>

          <div className="flex gap-4 items-center mt-4 md:mt-0 lg:mt-0">
            <div className="flex gap-1 items-center bg-white p-2 rounded-[20px] px-3">
              <FaPuzzlePiece />
              <h2>New Activities</h2>
            </div>
            <h2>Log in</h2>
          </div>
        </div>
      )}

      <div className="hidden lg:flex items-center gap-3 border-white border-[1px] pr-4 rounded-[20px]">
        <div className="flex justify-center rounded-l-[20px]">
          <input
            type="text"
            className="focus:outline-sky-200 w-full lg:w-[400px] px-5 py-1 border-[1px] rounded-l-[20px] border-white flex"
            placeholder="Search"
          />
          <div className="px-2 ml-[-30px] flex items-center">
            <FaSearch size={15} />
          </div>
        </div>
          <h3 className='whitespace-nowrap'>All the Activities</h3>

      </div>

      <div className="hidden lg:flex gap-4 items-center mt-4 lg:mt-0">
        <div className="flex gap-1 items-center bg-white p-2 rounded-[20px] px-3">
          <FaPuzzlePiece />
          <h2>New Activities</h2>
        </div>
        <h2>Log in</h2>
      </div>
    </div>
  );
};

export default Navbar;
