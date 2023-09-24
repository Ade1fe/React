

import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import AnimeItem from './AnimeItem';
import "../css/AnimeItem.css"
import AnimeCard from './AnimeCard';

const AnimeRecommend = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    setAnimeList(data);
    setIsLoading(false); 
  };

  return (
    <div >
      {/* <h2 className='text-blue-300 p-2 font-semibold text-lg capitalize'>Top Airing</h2> */}

      {/* Fetch data for new added anime */}
      <AnimeFetcher
        endpoint='https://api.jikan.moe/v4/top/anime?type=ona&limit=12&filter=favorite&rating=g'
        onAnimeDataChange={handleAnimeDataChange}
      />

{isLoading && <p>Loading...</p>}

      {/* Display the list of anime items */}
      <div className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-4 gap-2 sm:gap-2 md:gap-3'>
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeRecommend
