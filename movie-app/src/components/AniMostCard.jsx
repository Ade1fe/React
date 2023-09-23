import React from 'react';
import pic from '../assets/mano.jpg';
import { FaEye, FaHeart } from 'react-icons/fa';

const AniMostCard = ({ anime }) => {
  const airedDate = anime.aired.from.split('T')[0];
  const truncatedTitle =
    anime.title.length > 20 ? `${anime.title.substring(0, 10)}..` : anime.title;

  function generateNumbers() {
    // Generate some random numbers or perform any other logic here
    const randomNumbers = Math.floor(Math.random() * 1000);
    return randomNumbers;
  }

  return (
    <div className='w-full bg-[#222] flex p-2 gap-2 items-center'>
      <div className='w-[60px] h-[80px] relative rounded-md overflow-hidden'>
        <img
          src={anime.images.webp.large_image_url}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
      <div className=''>
        <h2 className='col-span-1 md:col-span-2 text-sm capitalize'>
          {anime.title}
        </h2>
        <div className=" flex gap-2 ">
        <p className='flex items-center gap-1 text-sm text-gray-500'>
         <span> <FaEye /> </span><span>{generateNumbers()}k</span>
        </p>

        <p className='flex items-center gap-1 text-sm text-gray-500'>
         <span> <FaHeart /> </span><span>{generateNumbers()}k</span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default AniMostCard;
