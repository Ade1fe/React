

import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import AnimeItem from './AnimeItem';
import "../css/AnimeItem.css"

const AnimeUpcoming = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    setAnimeList(data);
    setIsLoading(false);
  };

  return (
    <div className=" bg-[#222]">
      <h2 className='text-blue-300 p-2 font-semibold text-lg capitalize'>Upcoming</h2>

      {/* Fetch data for new added anime */}
      <AnimeFetcher
        endpoint='https://api.jikan.moe/v4/top/anime?type=ona&limit=5&filter=upcoming'
        onAnimeDataChange={handleAnimeDataChange}
      />
{isLoading && <p>Loading...</p>}

      {/* Display the list of anime items */}
      <ul className='myUl bg-[#2d2a2a]'>
        {animeList.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime}  id={anime.mal_id} />
        ))}
      </ul>
    </div>
  );
};


export default AnimeUpcoming
