import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import AnimeCard from './AnimeCard';

const AnimeMovieSearchBar = ({ getValue }) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    console.log('Received data:', data);
    const tvAnimeList = data.filter((anime) => anime.type.toLowerCase() === 'movie');
    console.log('Filtered anime:', tvAnimeList);
    setAnimeList(tvAnimeList);
    setIsLoading(false);
  };
  

  return (
    <div>
      {/* Fetch data for new added movie anime */}
      <AnimeFetcher
        endpoint={`https://api.jikan.moe/v4/anime?q=${getValue}&limit=25&type=movie`}
        onAnimeDataChange={handleAnimeDataChange}
      />

      {/* Display loading message while fetching data */}
      {isLoading && <p>Loading...</p>}

      {/* Display anime list or "No anime found" message */}
      {!isLoading && (
        <div>
          {animeList.length > 0 ? (
            <div className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-4 gap-2 sm:gap-2 md:gap-3'>
              {animeList.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
              ))}
            </div>
          ) : (
            <p>No anime found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimeMovieSearchBar;


