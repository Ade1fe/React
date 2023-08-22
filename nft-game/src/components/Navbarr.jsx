


import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-gray-950 text-white flex flex-row justify-between items-center px-3 sm:px-4 py-3 border-b-2 border-b-yellow-500'>
      <h1 className='text-xl sm:text-2xl md:text-3xl text-yellow-500 mb-2 sm:mb-0 '>NFT</h1>

      <AiOutlineMenu className='mb-2 order-2 sm:hidden relative' onClick={toggleMenu} />

      <ul
        className={`flex sm:justify-center border-l-2 border-l-yellow-500 sm:border-none py-10 sm:py-0 justify-between absolute sm:static sm:w-fit top-16 w-[50%] right-0 h-[100vh] sm:h-fit bg-gray-950  flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 text-sm sm:text-lg items-center ${
          menuOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <li className='hover:text-yellow-500 transition ease-in-out'>
          <span className='hover:border-b-2 hover:border-yellow-500'>Home</span>
        </li>
        <li className='hover:text-yellow-500 transition ease-in-out'>
          <span className='hover:border-b-2 hover:border-yellow-500'>Market Place</span>
        </li>
        <li className='hover:text-yellow-500 transition ease-in-out'>
          <span className='hover:border-b-2 hover:border-yellow-500'>Creator</span>
        </li>
        <li className='hover:text-yellow-500 transition ease-in-out'>
          <span className='hover:border-b-2 hover:border-yellow-500'>About Us</span>
        </li>
      </ul>

      <h3 className='text-sm sm:text-lg border-2 border-yellow-500 py-2 px-3 md:px-1 rounded-md order-1 '>
        Connect Wallet
      </h3>
    </div>
  );
};

export default Navbar;