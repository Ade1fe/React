import React from 'react'

const RecommendCard = ({name,img}) => {
    const imageUrl = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : 'URL_TO_DEFAULT_IMAGE';

  return (
    <div className='w-fit'>
        <div className="w-[300px] h-[200px]">
            <img src={imageUrl} className='w-full h-full object-cover' alt="" />
        </div>
        <p>{name}</p>
      
    </div>

  )
}

export default RecommendCard
