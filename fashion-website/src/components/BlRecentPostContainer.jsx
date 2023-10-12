import React from 'react'
import BlRecentPostCard from './BlRecentPostCard'
import BlGallery from './BlGallery'
import rec from "../assests/moda7.jpg"
import rec1 from "../assests/sensual-woman-with-voluminous-curly-hairstyle-elegant-party-outfit-posing.jpg"
import rec2 from "../assests/young-smiling-girl-pink-jacket-looking-camera-with-shopping-bags-hand-clothing-store-pretty-lady-standing-boutique-with-colorful-pockets-sale-clothes-rack-background.jpg"
import BLInfo from './BLInfo'


const BlRecentPostContainer = ({myclass}) => {
  return (
   <div className={myclass}>
     <h2 className='mt-4 mb-10 border-2 text-center w-fit mx-auto p-3'>RECENT POSTS</h2>
     <div className='flex flex-wrap gap-7'>
     
        <BlRecentPostCard
        img={rec}
         h2="
         Weekend sale start from this month" />
        <BlRecentPostCard
        img={rec1}
         h2="
         Heavy discount on our summer sale" />

        <BlRecentPostCard
        img={rec2}
         h2="
         Best designer dress on affordable price" />
    </div>
   
   <div className="">
   <BlGallery />
   <BLInfo />
   </div>
   </div>
  )
}

export default BlRecentPostContainer
