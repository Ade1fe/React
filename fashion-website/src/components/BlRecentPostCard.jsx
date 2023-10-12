import React from 'react'

import { Link } from 'react-router-dom'

const BlRecentPostCard = ({h2,img}) => {
  return (
    <div className=''>
      <Link to={`/showblogs?img=${encodeURIComponent(img)}&h2=${encodeURIComponent(h2)}`} className='flex items-center gap-5'>
        <div className="w-[100px] h-[100px]">
            <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="">
        <h2  className='text-[14px] font-semibold mb-1'>{h2}</h2>
        <p className='text-sm'><span className='border-r-2 pr-2'>December 10, 2021</span> <span className='px-2'>No Comments</span></p>
        </div>
        </Link>
    </div>
  )
}
// to={`/showblogs?img=${encodeURIComponent(img)}&h2=${encodeURIComponent(h2)}&p=${encodeURIComponent(p)}&span1=${encodeURIComponent(span1)}&span2=${encodeURIComponent(span2)}&span3=${encodeURIComponent(span3)}&spanc1=${encodeURIComponent(spanc1)}&spanc2=${encodeURIComponent(spanc2)}&spanc3=${encodeURIComponent(spanc3)}`}>

export default BlRecentPostCard
