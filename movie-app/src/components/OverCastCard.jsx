import React from 'react'

const OverCastCard = ({name,img}) => {

    const imageUrl = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : 'URL_TO_DEFAULT_IMAGE';

  return (
    <div className='w-fit'>
        <div className="w-[110px] h-auto">
            <img src={imageUrl} className='w-full h-full object-contain' alt="" />
        </div>
        <p className='text-sm'>{name}</p>
      
    </div>
  )
}

export default OverCastCard
