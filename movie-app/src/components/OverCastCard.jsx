import React from 'react'

const OverCastCard = ({name,img}) => {

    const imageUrl = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : 'URL_TO_DEFAULT_IMAGE';

  return (
    <div className='w-fit'>
        <div className="w-[200px] h-[300px]">
            <img src={imageUrl} className='w-full h-full object-cover' alt="" />
        </div>
        <p>{name}</p>
      
    </div>
  )
}

export default OverCastCard
