import React from 'react'
import Trending from './Trending'
import pic from "../assets/9174026.png"
import pic2 from "../assets/Logo-Suzuki.png"
import pic3 from "../assets/up-removebg-preview (1).png"
import MoviesTab from './MoviesTab'
import Series from './Series'
import PopularWorksWith from './PopularWorksWith'
import UpComing from './UpComing'

const ShowDataMovies = () => {
  return (
    <div className='mt-[35px] md:mt-[70px] text-white'>
      <div className="mb-[30px]">
      <div className="flex px-2 items-center">
        <img src={pic} className=' w-[50px] sm:w-[65px] md:w-[80px] h-auto object-contain' alt="" />
        <h2 className='text-2xl md:text-4xl  my-4 '>Trending</h2>
      </div>
      <Trending />
      </div>

     <div className=" mt-[35px] md:mt-[75px]">
     <MoviesTab/>
     </div>

     <div className=" mt-[35px] md:mt-[75px]">
     <div className="flex px-2 items-center">
        <img src={pic2} className=' w-[50px] sm:w-[65px] md:w-[80px] h-auto object-contain' alt="" />
        <h2 className='text-2xl md:text-4xl  my-4 '>Popular Tv Series</h2>
      </div>
      <Series />
     </div>

     <div className="container mx-auto mt-[35px] md:mt-[75px]">
      <PopularWorksWith />
     </div>

     <div className="mt-[35px] md:mt-[70px]">
     <div className="flex px-2 items-center">
        <img src={pic3} className=' w-[50px] sm:w-[65px] md:w-[80px] h-auto object-contain' alt="" />
        <h2 className='text-2xl md:text-4xl  my-4 '>UpComing Movies</h2>
      </div>
      <UpComing />
     </div>
      
    </div>
  )
}

export default ShowDataMovies
