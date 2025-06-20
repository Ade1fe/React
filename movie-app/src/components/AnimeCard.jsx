

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ dates, anime, id }) => {
  const navigate = useNavigate();

  const handleWatchNowClick = () => {
    const encodedId = encodeURIComponent(id);
    navigate(`/animeDetails/${encodedId}`);
  };

  // Check if anime.aired.from exists before splitting
  const airedDate = anime.aired?.from?.split('T')[0] || 'Unknown';

  const truncatedTitle =
    anime.title.length > 20 ? `${anime.title.substring(0, 10)}..` : anime.title;
    // w-[140px] sm:w-[180px] md:w-[190px] h-[200px] md:h-[230px] relative

  return (
    <div className='w-fit bg-[#111111] cursor-pointer' onClick={handleWatchNowClick}>
      <div className="w-[160px] sm:w-[200px]  h-[200px] md:h-[230px] relative">
        <img src={anime.images.webp.large_image_url} className='w-full h-full object-cover' alt="" />
        <h2 className="text-xs  bg-[#111111] text-white py-1 px-2 absolute bottom-0 right-0">{anime.episodes ? anime.episodes : '0'}</h2>
      </div> 
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 px-2 gap-2 pb-2">
        <h2 className=' col-span-1 md:col-span-2 text-sm capitalize'>{truncatedTitle}</h2>
        <p className='text-sm'>{anime.type}</p>
        <p className='text-left md:text-right text-sm'>{airedDate}</p>
      </div>
    </div>
  )
}

export default AnimeCard;
