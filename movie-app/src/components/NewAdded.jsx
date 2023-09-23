

import React, { useState } from 'react';
import AnimeFetcher from './AnimeFetcher';
import AnimeItem from './AnimeItem';
import "../css/AnimeItem.css"

const NewAdded = () => {
  const [animeList, setAnimeList] = useState([]);

  // Callback function to update animeList
  const handleAnimeDataChange = (data) => {
    setAnimeList(data);
  };

  return (
    <div className=" bg-[#222]">
      <h2 className='text-blue-300 p-2 font-semibold text-lg capitalize'>New Added</h2>

      {/* Fetch data for new added anime */}
      <AnimeFetcher
        endpoint='https://api.jikan.moe/v4/top/anime?limit=5&type=tv'
        onAnimeDataChange={handleAnimeDataChange}
      />

      {/* Display the list of anime items */}
      <ul className='myUl bg-[#2d2a2a]'>
        {animeList.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </ul>
    </div>
  );
};

export default NewAdded;

