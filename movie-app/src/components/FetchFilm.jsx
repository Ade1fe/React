import React, { useEffect, useState } from 'react';
import CardIm from './CardIm';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const FetchFilm = ({ type }) => {
  const [images, setImages] = useState([]);
  const [genres, setGenres] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const totalPages = 8;
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    fetchFilmData();
    fetchGenres();
  }, [type]);

 async function fetchGenres() {
    const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    try {
      const response = await fetch(genreApiUrl);
      if (!response.ok) {
        throw new Error('Genre data not available');
      }
      const data = await response.json();
  
      // Create a genre map with genre IDs as keys and genre names as values
      const genreMap = {};
      data.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
      });
  
      return genreMap;
    } catch (error) {
      console.error('Error fetching genre data:', error);
      return {};
    }
  }

  async function fetchFilmData() {
    const filmType = type === 'movie' ? 'movie' : 'tv';

    try {
      const movieData = [];
      const genres = await fetchGenres();
  
      for (let page = 2; page <= totalPages; page++) {
        const apiUrl = `https://api.themoviedb.org/3/${filmType}/popular?api_key=${apiKey}&page=${page}`;
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        
        // Map genre IDs to genre names for each movie
        data.results.forEach((movie) => {
          movie.genre_names = movie.genre_ids.map((genreId) =>
            genres[genreId] || 'Unknown'
          );
        });
  
        movieData.push(...data.results);
      }
  
      setImages(movieData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = () => {
    const query = searchQuery.toLowerCase().trim();

    if (query === '') {
      // Reset the search results when the search query is empty
      setSearchResults([]);
      return;
    }

    const filteredImages = images.filter((image) => {
      const title = image.title || image.original_name || 'Unknown Title';
      const genreNames = image.genre_names || [];

      return (
        title.toLowerCase().includes(query) ||
        genreNames.join(', ').toLowerCase().includes(query)
      );
    });

    // Set the search results
    setSearchResults(filteredImages);
  };

  const handleFilmCardClick = (filmItem) => {
    // Check if the required data is available
    if (filmItem.id && filmItem.title && filmItem.img) {
      const { id, title, img } = filmItem;
      // Use the navigate function to navigate to the overview page
      console.log('film click');

      console.log(filmItem);
      navigate(`/overview/${id}`, { state: { title, img, id } });
    } else {
      console.error('Required data is missing in filmItem:', filmItem);
    }
  };

 // Display either the first 15 items or all search results
 const displayedImages = searchQuery ? searchResults : images.slice(0, 18);
  
  return (
   <div className="">
    <div className="flex mb-6 px-2">
    <input
        type="text"
        placeholder="Search by title"
        className="w-full px-4 py-2   bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
        <button
          onClick={handleSearchChange}
          className=" text-white   -ml-8 "
        >
          <AiOutlineSearch size={25} />
        </button>
    </div>
    <div className='flex flex-wrap gap-2 px-2 md:px-1 lg:gap-3 justify-evenly'>

      {displayedImages.map((image, index) => {
        const filmItem = {
          id: image.id,
          title: image.title || 'Unknown Title',
          img: `https://image.tmdb.org/t/p/w500/${image.poster_path}`,
        };
  
        return (
          <CardIm
  key={image.id}
  dates={image.release_date || image.first_air_date || 'Unknown Date'} 
  img={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
  rating={image.vote_average}
  title={image.title || image.original_name || 'Unknown Title'} 
  genre={image.genre_names.join(', ')}
  movieId={image.id}
  onClick={() => handleFilmCardClick(filmItem)}
/>


        );
      })}
    </div>
   </div>
  );
  
};

export default FetchFilm;
