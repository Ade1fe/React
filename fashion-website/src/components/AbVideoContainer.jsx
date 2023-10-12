import React from 'react'
import pixx from "../assests/two-attractive-brunette-women-dressed-warm-clothes-posing-studio.jpg"

const AbVideoContainer = () => {
  return (
    <div className='relative pl-0 md:pl-16 mt-[100px]'>
        <div className="h-[400px] w-[90%] mx-auto md:mx-0 md:w-[60%] relative">
            <img src={pixx} className='w-full h-full object-cover' alt="" />
        </div>

        <div className=" bg-gray-50 opacity-90 p-2 mx-auto md:mx-0 w-[95%] sm:w-[80%] md:w-1/2  md:absolute md:bottom-[-150px] md:right-10">
            <div className="border-2  px-4 h-full sm:h-[300px] md:h-full py-10 flex-col flex justify-center">
            <p className='text-sm mb-3'>Our Mission</p>
            <h1 className='mb-3 text-3xl sm:text-4xl md:text-5xl'>Quality products Quality Services</h1>
            <p className='text-sm md:text-lg'>Hymenaeos quod luctus placeat, fugiat,
                 voluptatem temporibus nesciunt? Est laoreet,
                  incidunt debitis cum dolorem neque iure, 
                voluptates ornare rerum quis, laboriosam, quia 
                corporis repudiandae, iste debitis lacus mauris ab</p>
            </div>
        </div>
      
    </div>
  )
}

export default AbVideoContainer
