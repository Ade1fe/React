import React from 'react'


const ImgCard = ({img, h1 , price }) => {
  return (
    <div className=' h-max w-max hover:shadow-md'>
       <div className="w-[140px] sm:w-[250px] md:w-[290px] lg:w-[290px]">
       <img src={img} className='w-full ' alt="" />
       </div>

       <div className="py-4 px-3 text-center">
        <h1 className='font-semibold sm:font-bold mb-1 capitalize text-xl sm:text-2xl'>{h1}</h1>
        <p className='text-cyan-400 mb-1'>{price}</p>
        <button className='border-b-2 border-gray-100 text-sm sm:text-lg hover:text-cyan-300'>ADD TO CART</button>
       </div>
      
    </div>
  )
}

export default ImgCard
