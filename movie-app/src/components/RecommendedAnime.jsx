import React from 'react'
import AnimeUpcoming from './AnimeUpcoming'
import AnimePopular from './AnimePopular'
import AnimeRecommend from './AnimeRecommend'

const RecommendedAnime = () => {
  return (
    <div className='grid lg:flex px-1 md:px-3 gap-3 justify-evenly'>
        <div className="w-full lg:w-[70%]">
            <h2 className='text-2xl text-blue-600 font-bold mb-4 pl-3'>Recommended</h2>
            <AnimeRecommend />
        </div>


        <div className="w-full justify-evenly lg:w-[25%] grid gap-3 md:flex lg:grid">
            <div className="my-5">
                <AnimeUpcoming />
            </div>

            <div className="my-5">
                <AnimePopular />
            </div>
        </div>
      
    </div>
  )
}

export default RecommendedAnime
