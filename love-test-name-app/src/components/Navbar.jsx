import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-purple-600 py-3 flex items-center justify-between px-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white">
          <Link to='/'>Deife-Games</Link>
        </h1>
      </div>

      <div className="absolute top-4 right-4">
        {isMenuOpen ? (
          <AiOutlineClose
            size={20}
            className="md:hidden cursor-pointer text-white"
            onClick={toggleMenu}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className="md:hidden cursor-pointer text-white"
            onClick={toggleMenu}
          />
        )}
      </div>

      {isMenuOpen && (
        <ul className='absolute z-[9999999999] font-medium bg-purple-600 w-full text-center py-4 md:py-0 top-[50px] right-0 flex-col md:w-fit md:flex-row md:static flex md:hidden justify-between gap-2 md:gap-10'> 
<li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-quiz.netlify.app">Fill In The Blanks</a></li>
          <li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-tic-tac-toe.netlify.app">Tic Tac Toe</a></li>
          <li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-jokes.netlify.app/">Dad-Jokes</a></li>
        </ul>
      )}

<ul className='hidden z-[9999999999] md:flex absolute font-medium bg-purple-600 w-full text-center py-4 md:py-0 top-[50px] right-0 flex-col md:w-fit md:flex-row md:static  justify-between gap-2 md:gap-10'> 
          <li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-quiz.netlify.app">Fill In The Blanks</a></li>
          <li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-tic-tac-toe.netlify.app">Tic Tac Toe</a></li>
          <li className='text-white text-lg hover:text-[#502869]'><a target='_blank'  rel="noreferrer" href="https://deife-jokes.netlify.app/">Dad-Jokes</a></li>
          {/* <Link to="/login" className='text-lg hover:text-blue-700'>Login</Link> */}
        </ul>
    </div>
  );
};

export default Navbar;
