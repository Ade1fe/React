import React from 'react'
import { FaPlayCircle } from "react-icons/fa"

const Hero = () => {
  return (
    <div className='container block sm:flex px-3 gap-3 py-[40px] mx-auto mt-[60px]'>
        <div className="flex-1 mb-4 sm:mb-0">
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-500 font-bold'>DISCOVER COLLECT <br className='hidden sm:block' /> AND SELL NFTS</h1>
        </div>
      <div className=" flex-1 px-2 ">
        <p className='text-lg sm:text-2xl mb-4'>Digital marketplace for  crypto collectables 
            and Non-Fungible tokens, buy, sell and discover exclusive digital assests.</p>
            
            <div className="flex gap-3">
            <button className='bg-yellow-600 font-semibold p-3 rounded-md border-2 border-yellow-600 hover:bg-transparent transition-colors'>Discover Now</button> 
            <div className="flex items-center gap-3">
                <FaPlayCircle size={30} className='text-yellow-500' />
            <button>Watch Now</button>
            </div>
            </div>

      </div>
    </div>
  )
}

export default Hero
