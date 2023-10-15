import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeContent = () => {
  return (
    <div className=' mx-auto'>
       <div className="bg-white py-2 text-black px-2">
       <Marquee>
    I'm currently working on this project, and I'm continuously making improvements based on the feedback I receive. Your input is incredibly valuable, so please be patient and share your thoughts and suggestions. 

    If you have any comments or ideas, don't hesitate to let me know. For advertising and promotional inquiries, feel free to reach out to me through my social media handles at <span className='text-gray-500 font-bold px-1'>@deife_syntax</span>. Your support means a lot, and I can't wait to bring you a better experience in the future!
</Marquee>

       </div>
    </div>
  )
}

export default MarqueeContent
