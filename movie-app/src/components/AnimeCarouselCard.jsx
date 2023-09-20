import React from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'

const AnimeCarouselCard = ({img,title,contentType,episode,year,duration,description}) => {
  return (
    <div className='relative w-full'>
        <div className="w-full h-auto md:h-[550px] lg:h-[600px] relative">
            <img src={img} className='w-full h-full object-cover md:object-contain' alt="" />
            <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-full"></div>
        </div>
        
      
     <div className="absolute top-1/2 left-10 md:left-12 text-left">
     <h1 className='font-bold text-xl md:text-2xl '>{title}</h1>
     <div className="flex flex-wrap gap-2  w-fit p-2 text-xs">
     <h3>{contentType}</h3>
      <h3 className='flex items-center gap-1'> <FaClock /> <span>{duration}</span></h3>
      <h3>epi: {episode}</h3>
      <h3 className='flex items-center gap-1'> <FaCalendar /> <span>{year}</span></h3>
     </div>
      <p className='line-clamp-3 md:line-clamp-none text-sm'>{description}</p>
      <p className='capitalize bg-transparent border-red-600 border-2 hover:bg-red-600 p-2
     w-fit rounded-md font-semibold mt-1 cursor-pointer text-sm' >watch now</p>
     </div>
   
    </div>
  )
}

export default AnimeCarouselCard
