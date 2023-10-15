import React, { useState , useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import pic from "../assets/001.jpg";
import { FaArrowRight, FaCog, FaUser } from 'react-icons/fa';


const MovieNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  // eslint-disable-next-line
  const [usermail, setUsermail] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false); 

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className='flex justify-between px-5 md:px-5 lg:px-7 py-3 items-center'>
      <div className='text-2xl'>
        <h1>
          <span className='text-blue-500'>Dee</span>-Movies
        </h1>
      </div>

      {isMenuOpen ? (
        <AiOutlineClose
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer md:hidden text-blue-500'
        />
      ) : (
        <AiOutlineMenu
          size={25}
          onClick={toggleMenu}
          className='cursor-pointer md:hidden'
        />
      )}

      <div
        className={`${
          isMenuOpen
            ? 'font-semibold bg-black opacity-80 backdrop-blur-sm flex z-[99999] flex-col justify-center items-center text-center absolute top-14 w-full left-0 transition-opacity delay-1000'
            : 'hidden'
        } md:flex md:static py-7 md:py-0 logo  md:text-left md:flex-row md:bg-none md:backdrop-filter-none md:w-fit text-lg justify-between gap-3 sm:gap-4 md:gap-4 lg:gap-7`}
      >
         <NavLink
          exact
          to='/'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Home
        </NavLink>
       
        {/* Add similar conditional classes for other links */}
        <NavLink
          exact
          to='/tvseries'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/tvseries' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Series
        </NavLink>
        <NavLink
          exact
          to='/movieseries'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/movieseries' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Movies
        </NavLink>
        <NavLink
          exact
          to='/anime'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/anime' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Anime
        </NavLink>
        <NavLink
          exact
          to='/moviesearch'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/moviesearch' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Search
        </NavLink>

        {user ? (
         <div className="">
         <div className="cursor-pointer relative" onClick={toggleProfile}> 
           <img src={pic} className='w-[30px] h-[30px] object-cover rounded-[50%] overflow-hidden' alt="" />
         </div>

         {isProfileVisible && (  
              <div className="mx-1 rounded-none md:rounded-lg text-sm absolute w-full right-0 top-[100%] md:top-14 md:w-[250px] px-3 py-2 md:right-3 z-[99999999] bg-black md:opacity-80 md:backdrop-blur-sm">
               <p className='text-sm font-bold text-blue-500'>{username}</p>
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
          exact
          to='/login'
          className={`nav-link mx-1 hover:text-blue-500 ${
            window.location.pathname === '/login' ? 'text-blue-500 font-bold' : ''
          }`}
        >
            Log in
          </NavLink>
        )}


   
      </div>
    </div>
  );
};

export default MovieNavbar
