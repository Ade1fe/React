import React from 'react';

const AnimeItem = ({ anime, isEven }) => (
  <li className={`flex items-center gap-3 p-3 ${isEven ? 'even-li' : ''}`}>
    <img src={anime.images.webp.large_image_url} className='w-[50px] h-[70px] rounded-md overflow-hidden object-cover' alt="" />
    <div className="">
      <h2 className='text-sm font-semibold'>{anime.title}</h2>
      <ul className='list-disc flex gap-3 items-center my-1 text-sm'>
        <li className='ml-3'>{anime.type}</li>
        <li className='ml-3 uppercase'>epi: {anime.episodes ? anime.episodes : ''}</li>
        <li className='ml-3'>{anime.duration}</li>
      </ul>
    </div>
  </li>
);

export default AnimeItem;
