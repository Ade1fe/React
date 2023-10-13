import React from 'react'
import { FaSearch } from 'react-icons/fa'
import pic from "../assests/fashion-product4.jpg"
import pic1 from "../assests/fashion-product21.jpg"
import pic2 from "../assests/fashion-product10.jpg"
import rec from "../assests/ftwo.jpg"
import rec1 from "../assests/woman-with-shopping-bags-studio-yellow-background-isolated.jpg"
import rec2 from "../assests/details-black-woman-wearing-grey-leather-coat-posing-beige-background-brown-bag-white-sunglasses-hands-autumn-winter-fashion-concept.jpg"
import BlRecentPostCard from './BlRecentPostCard'
import BlGallery from './BlGallery'

const ShopSidebar = () => {
  return (
    <div className='mt-8 md:mt-0'>
     <div className="flex mb-3">
     <input type="text" className='px-2 focus:outline-[#f8f9fa] bg-[#f8f9fa] text-black py-1 text-sm md:text-lg  w-full' placeholder='search for items' />
      <FaSearch size={22} className='-ml-8 mt-2' />
     </div>

     <div className="text-sm">
     <h2 className='mt-4 mb-6 border-2 text-center w-fit mx-auto p-3'>Categories</h2>
        <div className="grid grid-cols-3 h-auto gap-3">
        <div className="">
            <img src={pic} className='' alt="" />
            <h1>Mens wear <span className='text-[#006d77]'>(9)</span></h1>
        </div>

        <div className="">
        <img src={pic1} className='' alt="" />
        <h1>Womens wear  <span className='text-[#006d77]'>(9)</span></h1>
        </div>

        <div className="">
        <img src={pic2} className='' alt="" />
            <h1>Accessory <span className='text-[#006d77]'>(8)</span></h1>
        </div>
        </div>

     </div>

<div className="mt-7">
<h2 className=' mb-7 border-2 text-center w-fit mx-auto p-3'>Recent Post</h2>
     <div className='flex flex-wrap gap-7 '>
    
     <BlRecentPostCard
     img={rec}
      h2="This month: Sale!" />
     <BlRecentPostCard
     img={rec1}
      h2="Month-start sale." />

     <BlRecentPostCard
     img={rec2}
      h2="Sale commences now!" />
 </div>
</div>

 <div className="">
   <BlGallery />
   </div>
    </div>
  )
}

export default ShopSidebar
