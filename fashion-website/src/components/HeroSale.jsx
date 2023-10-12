import React from 'react'
import fashion from "../assests/fashion-img11.png"

const HeroSale = () => {
  return (
    <div className='block mt-[100px] md:flex justify-center items-center px-4 bg-gray-100 max-w-[12340px] mx-auto'>
        <div className="">
            <img src={fashion} className='w-full h-full ' alt="" />
        </div>

        <div className=" w-full md:w-[50%] px-3 pt-1 pb-20 sm:pb-14">
            <h1 className='text-[#006d77] text-2xl sm:text-3xl mb-2'>Happy Summer Sale !!</h1>
            <h3 className='text-3xl sm:text-5xl lg:text-7xl mb-2 font-semibold'>20% Discount On Purchase!</h3>
            <p>Wisi dolore quidem inceptos eu! Ab, ultrices dolore? Incididunt vitae sint proin faucibus optio reiciendis ipsum vel.</p>
        </div>
      
    </div>
  )
}

export default HeroSale
