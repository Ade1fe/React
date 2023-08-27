import React from 'react'
import BlRecentPostCard from './BlRecentPostCard'
import BlGallery from './BlGallery'
import rec from "../assests/woman-g10dd82644_1280.jpg"


const BlRecentPostContainer = ({myclass}) => {
  return (
   <div className={myclass}>
     <h2 className='mt-4 mb-10 border-2 text-center w-fit mx-auto p-3'>RECENT POSTS</h2>
     <div className='flex flex-wrap gap-7'>
     
        <BlRecentPostCard
        img={rec}
         h2="Weekend sale start from this month" />
        <BlRecentPostCard
        img={rec}
         h2="Weekend sale start from this month" />

        <BlRecentPostCard
        img={rec}
         h2="Weekend sale start from this month" />
    </div>
   
   <div className="">
   <BlGallery />
   </div>
   </div>
  )
}

export default BlRecentPostContainer
