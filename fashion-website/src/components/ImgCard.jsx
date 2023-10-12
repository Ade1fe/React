import React from 'react'


const ImgCard = ({img, h1 , price }) => {
  return (
    <div className=' h-max w-max hover:shadow-md'>
       <div className="w-[140px] sm:w-[230px] md:w-[240px]  lg:w-[290px]">
       <img src={img} className='w-full ' alt="" />
       </div>

       <div className="pt-1 pb-3 px-3 text-center">
        <h1 className='font-semibold sm:font-bold mb-1 capitalize text-lg md:text-xl '>{h1}</h1>
        <p className='text-[#006d77] mb-1 text-sm md:text-lg'>{price}</p>
        <button className='border-b-2 border-gray-100 text-sm  hover:text-cyan-500'>ADD TO CART</button>
       </div>
      
    </div>
  )
}

export default ImgCard
