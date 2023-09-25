import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import "../css/Shake.css"
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative ">

  <div className="absolute z-[5] top-0 left-3 bg-black p-2"onClick={toggleSidebar}>
  <p className="constant-tilt-shake"  >
  <span className="constant-tilt-shake"></span>
  <span className="constant-tilt-shake"></span>
  <span className="constant-tilt-shake"></span>
</p>
  </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed z-[7] left-0 top-0 h-screen w-[200px] bg-black text-white overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleSidebar} className='ml-3 mt-3'> <FaTimes /></button>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/anime" className="block hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <Link to="/trend" className="block hover:text-blue-500">
                Trending
              </Link>
            </li>
            <li>
              <a href="/animetvseries" className="block hover:text-blue-500">
                TV Series
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-blue-500">
                Movies
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-blue-500">
                OVA
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-blue-500">
                Genre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
