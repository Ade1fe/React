import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeContent = () => {
  return (
    <div className='w-[95%] mx-auto'>
       <div className="border-[2px] border-purple-600 rounded-[50px]  p-2">
       <Marquee>
        I'm currently working on several other<span className='text-gray-500 font-bold px-1'> exciting games</span> as well. 
        Your feedback is incredibly valuable to me, so please don't 
        hesitate to leave  <span className='text-gray-500 font-bold px-1'>comments and suggestions</span>. For any advertising 
         and <span className='text-gray-500 font-bold px-1'> promotional</span> inquiries, feel free to reach out to me through 
        my social media handles at <span className='text-gray-500 font-bold px-1'> @deife_syntax</span>. Your support means a lot,
         and I can't wait to bring more gaming experiences to you in the future!
</Marquee>
       </div>
    </div>
  )
}

export default MarqueeContent
