import React from 'react'
import BlBlogTemp from './BlBlogTemp'
import BlRecentPostContainer from './BlRecentPostContainer'



const BlMainContent = () => {
  return (
    <div className='block lg:flex'>
      <div className="w-full lg:w-[60%]">
      <BlBlogTemp />
      </div>
     
     <div className=" w-full lg:w-[40%]">
     <BlRecentPostContainer myclass="w-[80%] mx-auto" />
     </div>
      
    </div>
  )
}

export default BlMainContent
