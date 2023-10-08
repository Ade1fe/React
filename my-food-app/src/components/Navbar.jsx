import React, { useState,useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCog, FaUser } from 'react-icons/fa';
import pic from "../assets/18157366-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
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

  const comingSoon = () => {
   alert("Coming soon");
  };


  return (
    <header className='flex  justify-between items-center px-2 sm:px-5 py-3 md:px-10 bg-white border-b-2 border-b-orange-500 '>
      <div className="text-xl  whitespace-nowrap sm:text-2xl md:text-3xl font-bold ">
        <span className='text-black'>Deife</span> <span className='text-orange-500'>Foods</span>
      </div>

      {/* <div className="flex items-center"> */}
        <AiOutlineMenu size={28} className="md:hidden cursor-pointer order-2" onClick={toggleMenu} />

        <ul className={`md:flex text-sm md:text-lg  justify-center md:justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14
        absolute top-[56px] z-[999999999999999] right-0 bg-white border-l-2 border-l-orange-500 border-b-2 border-b-orange-500 md:border-none  w-[50%] px-8 py-4 text-center          
          md:static md:w-fit  md:p-0 md:bg-white
        ${isMenuOpen ? 'grid text-center justify-center' : 'hidden'}`}>
          <NavLink
          to='/menu'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/menu' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Menu
        </NavLink>
        <NavLink
          to='/aboutus'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/aboutus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          About
        </NavLink>
        <NavLink
          to='/contactus'
          className={`hover:bg-gray-100 cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/contactus' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          Contact
        </NavLink>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 block md:hidden cursor-pointer hover:px-2 hover:py-1 rounded-md hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
          
        </ul>

        <ul className='flex  text-sm md:text-lg justify-between items-center font-semibold gap-4 sm:gap-7 md:gap-10 lg:gap-14 order-1 md:order-2'>
        <NavLink
          to='/cart'
          className={`hover:bg-gray-100 cursor-pointer  hover:px-2 hover:py-1 rounded-md hidden md:flex hover:shadow-md w-fit mx-auto mb-5  md:m-0 ${
            window.location.pathname === '/cart' ? 'text-orange-500 font-bold' : ''
          }`}
        >
          <FaCartPlus />
        </NavLink>
         
         {user ? (
         <div className="">
         <div className="cursor-pointer relative" onClick={toggleProfile}> 
         <p className='text-lg md:text-xl font-bold text-red-500'>  <span className='uppercase'>{firstLetterAfterSpace}</span> </p>
         </div>

         {isProfileVisible && (  
           <div onClick={handleLogout} className="cursor-pointer mx-1 text-white rounded-none md:rounded-lg text-sm absolute w-full right-0 top-[100%] md:top-14 md:w-[250px] px-3 py-2 md:right-3 z-[99999999] bg-black md:opacity-80 md:backdrop-blur-sm">
             <button className='py-1 px-2 text-left justify-end flex items-center gap-3' >Log out <FaArrowRight  />  </button>
           </div>
         )}
       </div>
        ) : (
          <NavLink
            to='/signin'
            className={`nav-link mx-1 hover:text-red-500 ${
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
