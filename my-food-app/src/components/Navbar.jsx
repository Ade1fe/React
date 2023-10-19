
import React, { useState,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCartPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "../css/Navbar.css"
// eslint-disable-next-line
import { FaArrowRight, FaCog, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  // eslint-disable-next-line
  const [username, setUsername] = useState(null);
  // eslint-disable-next-line
  const [usermail, setUsermail] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false); 

  const [firstLetterAfterSpace, setFirstLetterAfterSpace] = useState(null);




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
  
        const userRef = doc(firestore, 'foodappusers', user.uid);
        getDoc(userRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setUsername(userData.username);
              setUsermail(userData.email);
  
              console.log("username", userData.username);
              console.log("mail", userData.email);
  
              if (userData.username) {
                const parts = userData.username.split(' ');
                const firstLetters = parts.map((part) => part.charAt(0));
                const initials = firstLetters.join('.');
                setFirstLetterAfterSpace(initials);
              } else {
                setFirstLetterAfterSpace(null);
              }
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

  // const comingSoon = () => {
  //  alert("Coming soon");
  // };


  return (
    <header className='flex  justify-between items-center px-2 sm:px-5 py-3 md:px-10 bg-white border-b-2 border-b-orange-500 '>
      <div className="text-xl  whitespace-nowrap sm:text-2xl md:text-3xl font-bold ">
        <Link to="/"><span className='text-black'>Deife</span> <span className='text-orange-500'>Food.</span></Link>
      </div>

      {isMenuOpen ? (
        <AiOutlineClose
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer order-2 slide-in-menu z-10 md:hidden text-orange-600'
        />
      ) : (
        <AiOutlineMenu
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer order-2 slide-in-menu z-10 md:hidden'
        />
      )}

        <ul className={`md:flex overflow-hidden slide-in-menu text-sm md:text-lg  justify-center md:justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14
        absolute top-[52px] sm:top-[56px]  z-[999999999999999] right-0 bg-white border-l-2 border-l-orange-500 border-b-2 border-b-orange-500 md:border-none  w-[50%] px-8 py-4 text-center          
          md:static md:w-fit  md:p-0 md:bg-white
        ${isMenuOpen ? 'grid text-center justify-center ' : 'hidden'}`}>
          <NavLink
          to='/menu'
          className={`hover:bg-gray-100 menu-item cursor-pointer hover:px-2 hover:py-1 rounded-md  w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/menu' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Menu
        </NavLink>
        <NavLink
          to='/aboutus'
          className={`hover:bg-gray-100 menu-item cursor-pointer hover:px-2 hover:py-1 rounded-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/aboutus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          About
        </NavLink>
        <NavLink
          to='/contactus'
          className={`hover:bg-gray-100 menu-item cursor-pointer hover:px-2 hover:py-1 rounded-md  w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/contactus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Contact
        </NavLink>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 menu-item block md:hidden cursor-pointer hover:px-2 hover:py-1 rounded-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
          
        </ul>

        <ul className='flex  text-sm md:text-lg justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14 order-1 md:order-2'>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 menu-item cursor-pointer  hover:px-2 hover:py-1 rounded-md hidden md:flex w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
         
         {user ? (
         <div className="menu-item">
         <div className="cursor-pointer relative" onClick={toggleProfile}> 
         <p className='text-lg md:text-xl font-bold text-red-500'>  <span className='capitalize'>{firstLetterAfterSpace}</span> </p>
         </div>

         {isProfileVisible && (  
           <div onClick={handleLogout} className="cursor-pointer mx-1  text-white rounded-none md:rounded-lg text-sm absolute w-fit -right-0 top-11 md:top-12 px-3 py-2  z-[99999999] bg-black md:opacity-80 md:backdrop-blur-sm">
             <button className='py-1 px-2 text-left justify-end flex items-center gap-3' ><span className='
             whitespace-nowrap
             '>Log out</span> <FaArrowRight  />  </button>
           </div>
         )}
       </div>
        ) : (
          <NavLink
            to='/signin'
            className={`nav-link mx-1 menu-item whitespace-nowrap bg-orange-500  text-white border-2 border-orange-500 cursor-pointer px-3 py-1 rounded-md shadow-lg hover:bg-transparent hover:text-black capitalize ${
              window.location.pathname === '/signin' ? 'text-red-500 font-bold' : ''
            }`}
          >
            Log in
          </NavLink>
        )}
        </ul>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
