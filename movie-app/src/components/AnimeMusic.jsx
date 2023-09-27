



import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import "../css/AnimeItem.css"
import AnimeCard from './AnimeCard';

const AnimeMusic = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    setAnimeList(data);
    setIsLoading(false); 
  };

  return (
    <div >
      
      {/* Fetch data for new added anime */}
      <AnimeFetcher
        endpoint='https://api.jikan.moe/v4/top/anime?type=music&limit=12&filter=bypopularity&rating=pg13'
        onAnimeDataChange={handleAnimeDataChange}
      />

{isLoading && <p>Loading...</p>}

      {/* Display the list of anime items */}
      <div className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-4 gap-2 sm:gap-2 md:gap-3'>
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeMusic
