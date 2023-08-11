import React from 'react'
import phone from "../assets/mobile-phone-gb3592ecfb_1280.jpg"

const Phone = () => {
  return (
    <div className='relative mt-2 md:mt-0'>
        <img src={phone} className=' w-full h-[30vh] sm:h-full' alt="/" /> 
        <div className=" bg-[#111010] px-2 py-1 text-center text-white absolute top-[18%] md:top-[30%] right-1 font-effect-shadow-multiple sm:right-3 w-[300px] text-[16px] sm:text-[18px] sm:w-[400px]">
          <h2 className='font-effect-shadow-multiple px-2 py-2'>My Title</h2>
          <p className='py-3'> adipisicing elit. Ullam amet eius in. Exercitationem nam ipsum assumenda, molestias pariatur modi rerum?</p>
        </div>
    </div>
  )
}

export default Phone