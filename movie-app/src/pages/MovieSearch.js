import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function MovieSearch({movieId,onClick}) {
  const navigate  = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('movie'); // Default to movie

  const apiKey = '68bd4f569df65f9feb2dac611c38f06e'; // Replace with your MovieDB API key
  const apiUrl = `https://api.themoviedb.org/3/search/${searchType}?include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

  const handleSearch = () => {
    fetch(`${apiUrl}&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((err) => console.error(err));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [searchType]);

  const handleMovieCardClick = (movieItem) => {
    // Log the movieItem to inspect its structure
    console.log("Clicked movie item:", movieItem);
  
    // Check if the required data is available
    if (movieItem.id && movieItem.title) {
      const { id, title } = movieItem;
      // Use the navigate function to navigate to the overview page
      console.log("movie click");
      console.log(movieItem);
      navigate(`/overview/${id}`, { state: { title, id } });
    } else {
      console.error('Required data is missing in movieItem:', movieItem);
    }
  };
  

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 ">
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 col-span-1 md:col-span-2">Search for Movies or TV Shows</h1>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="movie"
              checked={searchType === 'movie'}
              onChange={() => setSearchType('movie')}
              className="mr-2 text-white"
            />
            Movies
          </label>
          <label>
            <input
              type="radio"
              value="tv"
              checked={searchType === 'tv'}
              onChange={() => setSearchType('tv')}
              className="mr-2 text-white"
            />
            TV Shows
          </label>
        </div>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder={`Search for ${
              searchType === 'movie' ? 'movies' : 'TV shows'
            } by title`}
            className="w-full px-4 py-2   bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-red-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />

        <button
          onClick={handleSearch}
          className=" text-white   -ml-8 "
        >
          <AiOutlineSearch size={25} />
        </button>
        </div>
        </div>
        

        <div className=" mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 lg:gap-6">
          {results.map((item) => (
           <div key={item.id} className="relative bg-gray-900 p-2 md:p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleMovieCardClick(item)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto object-contain"
              />
              <p className='text-xs absolute top-3 left-2 p-2 bg-gray-900'>{item.vote_average} </p>
              <h2 className="text-sm md:text-lg font-semibold mt-2">
                {item.title || item.name}
              </h2>
              <p className="text-gray-400 text-sm"> {item.release_date || item.first_air_date || 'Unknown Date'} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSearch;
