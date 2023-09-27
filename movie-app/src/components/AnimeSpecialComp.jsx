import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import '../css/AnimeItem.css';
import AnimeCard from './AnimeCard';

const AnimeSpecialComp = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    setAnimeList(data);
    setIsLoading(false); 
  };

  return (
    <div>
      {/* Fetch data for new added anime */}
      <AnimeFetcher
      endpoint={'https://api.jikan.moe/v4/top/anime?type=special&filter=bypopularity&limit=12'}
          // endpoint='https://api.jikan.moe/v4/top/anime?type=tv&limit=12&filter=favorite&rating=pg13'
        onAnimeDataChange={handleAnimeDataChange}
      />

      {/* Display loading message while fetching data */}
      {isLoading && <p>Loading...</p>}

      {/* Display the list of anime items once data is loaded */}
      {!isLoading && (
        <div className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-4 gap-2 sm:gap-2 md:gap-3'>
          {animeList.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeSpecialComp
