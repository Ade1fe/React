

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import pic from "../assets/001.jpg";
import { FaArrowRight, FaCog, FaUser } from 'react-icons/fa';
import "../css/General.css"

const Navbar = ({ backgroundImage }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  // eslint-disable-next-line
  const [usermail, setUsermail] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false); 
  


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);

        const userRef = doc(firestore, 'users', user.uid);
        getDoc(userRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setUsername(userData.username);
              setUsermail(userData.usermail);
            } else {
              setUsername(null);
              setUsermail(null);
            }
          })
          .catch((error) => {
            console.error('Error getting user document:', error);
          });
      } else {
        setUser(null);
        setUsername(null);
        setUsermail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible); 
  };

  const comingSoon = () => {
   alert("Coming soon");
  };

  return (
    <div style={navbarStyle} className='bg-black relative text-white flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center border-b-2 border-b-red-600'>
      <div className='text-2xl z-10 logo text-white font-bold'>
        <h1>
          <span className='text-red-500'>Dee</span>-Movies
        </h1>
      </div>

      {isMenuOpen ? (
        <AiOutlineClose
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer z-10 md:hidden text-red-500'
        />
      ) : (
        <AiOutlineMenu
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer z-10 md:hidden'
        />
      )}

      <div
        className={`${
          isMenuOpen
            ? 'font-semibold overflow-hidden slide-in-menu show z-10 bg-black opacity-80 backdrop-blur-sm flex  flex-col justify-center items-center text-center absolute top-[57px] w-full left-0 transition-opacity delay-1000'
            : 'hidden'
        } md:flex md:static py-7 md:py-0 logo  md:text-left md:flex-row md:bg-none md:backdrop-filter-none md:w-fit text-lg justify-between gap-3 sm:gap-4 md:gap-4 lg:gap-7`}
      >
        <NavLink
          exact
          to='/'
          className={`nav-link menu-item menu-item z-10 mx-1 hover:text-red-500 ${
            window.location.pathname === '/' ? 'text-red-500 font-bold' : ''
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to='/movieseries'
          className={`nav-link menu-item z-10 mx-1 hover:text-red-500 ${
            window.location.pathname === '/movieseries' ? 'text-red-500 font-bold' : ''
          }`}
        >
          Movies
        </NavLink>
        <NavLink
          to='/tvseries'
          className={`nav-link menu-item z-10 mx-1 hover:text-red-500 ${
            window.location.pathname === '/tvseries' ? 'text-red-500 font-bold' : ''
          }`}
        >
          Tv Series
        </NavLink>
        <NavLink
          to='/anime'
          className={`nav-link menu-item z-10 mx-1 hover:text-red-500 ${
            window.location.pathname === '/anime' ? 'text-red-500 font-bold' : ''
          }`}
        >
          Anime
        </NavLink>
        <NavLink
          to='/moviesearch'
          className={`nav-link menu-item z-10 mx-1 hover:text-red-500 ${
            window.location.pathname === '/moviesearch' ? 'text-red-500 font-bold' : ''
          }`}
        >
          Search <span className='text-xs text-red-600 hover:text-white'>18+</span>
        </NavLink>

        {user ? (
         <div className="z-10 ">
         <div className="cursor-pointer relative" onClick={toggleProfile}> 
           <img src={pic} className='w-[30px] h-[30px] object-cover rounded-[50%] overflow-hidden' alt="" />
         </div>

         {isProfileVisible && (  
           <div className="mx-1 rounded-none md:rounded-lg text-sm absolute w-full right-0 top-[100%] md:top-14 md:w-[250px] px-3 py-2 md:right-3 z-[99999999] bg-black md:opacity-80 md:backdrop-blur-sm">
               <p className='text-sm font-bold text-red-500'>{username}</p>
             <p className='text-sm mb-8'>{user.email}</p>
             
            <div className="text-white grid gap-3 ">
             <p className='py-1 px-2 bg-[#222] rounded-2xl flex gap-3 items-center' onClick={comingSoon}> <FaUser />  Profile</p>
             <p className='py-1 px-2 bg-[#222] rounded-2xl flex gap-3 items-center' onClick={comingSoon}> <FaCog /> Settings</p>
             <button className='py-1 px-2 text-left justify-end flex items-center gap-3' onClick={handleLogout}>Log out <FaArrowRight  />  </button>
           </div>
           </div>
         )}
       </div>
        ) : (
          <NavLink
            to='/login'
            className={`nav-link menu-item z-10 mx-1 hover:text-red-500 ${
              window.location.pathname === '/login' ? 'text-red-500 font-bold' : ''
            }`}
          >
            Log in
          </NavLink>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
    </div>
  );
};

export default Navbar;
