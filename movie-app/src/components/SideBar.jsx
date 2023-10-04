import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import "../css/Shake.css"
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllGenres, setShowAllGenres] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Define a function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const logGenreName = (genre) => {
    console.log('Button clicked:', genre.name);
    console.log('Button clicked:', genre.mal_id);
  };

   // Define a function to navigate to the GenrePage with the genre's name as a parameter
   const navigateToGenrePage = (genre) => {
    navigate(`/genre/${genre.name}`);
  };

  useEffect(() => {
    // Fetch all anime genres
    fetch(`https://api.jikan.moe/v4/genres/anime`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setGenres(data.data);
          setLoading(false);
        } else {
          console.error('Failed to fetch genres or data structure is unexpected');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
        setLoading(false);
      });
  }, []);

  // Define a function to toggle the display of genres
  const toggleGenres = () => {
    setShowAllGenres(!showAllGenres);
  };

  if (loading) {
    return <div>Loading...</div>;
  }



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
        } fixed z-[7] left-0 top-0  h-screen w-[200px] bg-black text-white overflow-y-auto transition-transform duration-300 ease-in-out`}
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
             
              <NavLink
          exact
          to='/trend'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/trend' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Trending
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/animetvseries'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/animetvseries' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          TV Series
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/animemovie'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/animemovie' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          Movies
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/ova'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/ova' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          OVAs
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/ona'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/ona' ? 'text-blue-500 font-bold' : ''
          }`}
        >
          ONAs
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/special'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/special' ? 'text-blue-500 font-bold' : ''
          }`}
        >
         Specials
          </NavLink>
            </li>
            <li>
            <NavLink
          exact
          to='/music'
          className={`block hover:text-blue-500 ${
            window.location.pathname === '/music' ? 'text-blue-500 font-bold' : ''
          }`}
        >
         Musics
          </NavLink>
            </li>
            
          </ul>


          <h2 className='text-sm font-bold mt-1'>Genres : </h2>
      
      <ul className='flex justify-evenly flex-wrap text-sm gap-3'>
        {genres.map((genre, index) => (
          <li key={genre.id} hidden={!showAllGenres && index >= 10}>
            <button
              onClick={() => {
                logGenreName(genre);
                navigateToGenrePage(genre);
              }}
              className='m-1 hover:text-[#222] capitalize'
              style={{ color: getRandomColor() }}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleGenres}
        className='p-2 mt-1 mx-auto w-[95%] bg-[#222] text-white hover:bg-blue-600'
      >
        {showAllGenres ? 'Show Less' : 'Show More'}
      </button>
    </div>



        </div>
      </div>
   
  );
};

export default SideBar;
