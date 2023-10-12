import React from 'react'
import picc from "../assests/fashion-img11.png"
import AbLilBoxes from './AbLilBoxes'

const AbTextContent = () => {
  return (
    <div className="grid lg:flex px-4 gap-2 md:gap-5 md:px-8 mt-[40px]">

        <div className='flex-1'> 
        <p className='text-sm'>Introduction</p>
      <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl'>A better platform to shop online !!</h1>
      <p className='text-sm md:text-lg'>Hymenaeos quod luctus placeat, fugiat, voluptatem temporibus nesciunt? Est laoreet, incidunt debitis cum dolorem neque iure, voluptates ornare rerum quis, laboriosam, quia corporis repudiandae, iste debitis lacus mauris ab.</p>
       {/* flex flex-wrap gap-4 mt-[30px] justify-center items-center */}
        <div className="grid grid-cols-2 align-middle mx-auto gap-6 mt-[30px] justify-center items-center">
            <AbLilBoxes text1="500+" text2="Unique Products" />
            <AbLilBoxes text1="500+" text2="Unique Products" />
            <AbLilBoxes text1="500+" text2="Unique Products" />
            <AbLilBoxes text1="500+" text2="Unique Products" />
        </div>
    </div>

        <div className="w-[300px] sm:w-[400px] mx-auto">
            <img src={picc} className='w-full h-full object-contain' alt="" />
        </div>



    </div>
  )
}

export default AbTextContent
