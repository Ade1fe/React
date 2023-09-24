import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import AnimeItem from './AnimeItem';
import '../css/AnimeItem.css';
import AnimeCard from './AnimeCard';
import AniMostCard from './AniMostCard';

const AniMostMonth = () => {
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
        endpoint='https://api.jikan.moe/v4/top/anime?type=movie&limit=7&filter=bypopularity&rating=r17'
        onAnimeDataChange={handleAnimeDataChange}
      />

      {/* Display loading message while fetching data */}
      {isLoading && <p>Loading...</p>}

      {/* Display the list of anime items once data is loaded */}
      {!isLoading && (
        <div className='grid gap-3'>
          {animeList.map((anime) => (
            <AniMostCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AniMostMonth
