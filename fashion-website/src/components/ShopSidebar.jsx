import React from 'react'
import { FaSearch } from 'react-icons/fa'
import pic from "../assests/bag.jpg"
import rec from "../assests/woman-g10dd82644_1280.jpg"
import BlRecentPostCard from './BlRecentPostCard'
import BlGallery from './BlGallery'

const ShopSidebar = () => {
  return (
    <div>
     <div className="flex py-2">
     <input type="text" className='px-2 focus:outline-[#f8f9fa] bg-[#f8f9fa] text-black py-1 text-sm md:text-lg  w-full' placeholder='search for items' />
      <FaSearch size={22} className='-ml-8 mt-2' />
     </div>

     <div className="">
     <h2 className='mt-4 mb-6 border-2 text-center w-fit mx-auto p-3'>Categories</h2>
        <div className="grid grid-cols-3 h-auto gap-3">
        <div className="">
            <img src={pic} className='' alt="" />
            <h1>Bags(7)</h1>
        </div>

        <div className="">
        <img src={pic} className='' alt="" />
            <h1>Bags(7)</h1>
        </div>

        <div className="">
        <img src={pic} className='' alt="" />
            <h1>Bags(7)</h1>
        </div>
        </div>

     </div>

     <div className='flex flex-wrap gap-7 mt-7'>
     <h2 className=' mb- border-2 text-center w-fit mx-auto p-3'>Recent Post</h2>
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

export default ShopSidebar
