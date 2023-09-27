
import React from 'react';

const CardImg = ({ img, rating, title, dates, genre,movieId ,onClick }) => {


  const imageUrl = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : 'URL_TO_DEFAULT_IMAGE'; // Provide a default image URL if img is not available

  return (
    <div className='relative w-fit group/item' onClick={() => onClick({ id: movieId, title, img })}>
  

      <div className="w-[250px] h-auto cursor-pointer">
        <img src={imageUrl} alt={title} className='w-full h-full object-contain' />
      </div>
      <div className="absolute h-[20%] bg-black opacity-50 backdrop-blur-sm grid grid-cols-2 bottom-0 left-0 w-full text-white group/edit invisible  group-hover/item:visible ..."></div>
      <div className="px-2 z-[999999] absolute grid grid-cols-2 bottom-2 left-0 w-full text-white group/edit invisible  group-hover/item:visible ...">
        <h1 className='truncate col-span-2 whitespace-nowrap text-2xl uppercase mb-1'>{title}</h1>
        <p>{dates} </p>
        <p className='truncate'>{genre}</p>
      </div>
      <p className='px-2 py-1 bg-black absolute top-2
       text-white right-2 rounded-xl shadow-2xl'>{rating}<span className='text-xs mb-1'>%</span></p>
    </div>
  );
}

export default CardImg;