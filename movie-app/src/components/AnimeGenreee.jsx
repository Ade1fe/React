import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeGenreee = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllGenres, setShowAllGenres] = useState(false);

  // Define a function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Define a function to log the genre name when a button is clicked
  // const logGenreName = (genre) => {
  //   console.log('Button clicked:', genre);
  // };

  // const navigateToGenrePage = (genre) => {
  //   navigate(`/genre/${genre}`);
  // };
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
    <div>
      <h2>Anime Genres</h2>
      
      <ul className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-3 gap-3'>
        {genres.map((genre, index) => (
          <li key={genre.id} hidden={!showAllGenres && index >= 15}>
            <button
              onClick={() => {
                logGenreName(genre);
                navigateToGenrePage(genre);
              }}
              className='p-2 m-1 hover:bg-[#222] capitalize'
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
  );
};

export default AnimeGenreee;
