import React from 'react'
import man from "../assets/man.jpg"
import { FaStar, FaStarHalf } from 'react-icons/fa'
import wo from "../assets/wom.jpg"
import manz from "../assets/mano.jpg"
import woz from "../assets/wo.jpg"

const ProductComments = () => {
  return (
<div className="grid grid-cols-1 gap-8 md:gap-2 lg:gap-8 md:grid-cols-2 mt-[30px]">
     <div className='grid justify-center md:justify-between md:flex items-center w-fit px-2 gap-3'>
     <div className="w-[100px] h-[100px] mx-auto md:mx-0 rounded-[50%] overflow-hidden">
        <img src={man} className='w-full h-full object-cover ' alt="" />
     </div>
     <div className="w-fit px-3">
      <h1 className='flex w-full gap-12 mx-auto md:mx-0 md:justify-between md:gap-3'><span className='font-bold text-lg md:text-xl'>Oba Tubi</span> 
      <span className='flex w-fit py-2 text-orange-500 items-center'>
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalf size={15} />
        
      </span>
      </h1>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum exercitationem nulla quo voluptatum id, expedita recusandae ea dicta ut voluptatibus.</p>
     </div>
    </div>

    <div className='grid justify-center md:justify-between md:flex items-center w-fit px-2 gap-3'>
     <div className="w-[100px] h-[100px] mx-auto md:mx-0 rounded-[50%] overflow-hidden">
        <img src={wo} className='w-full h-full object-cover ' alt="" />
     </div>
     <div className="w-fit px-3">
      <h1 className='flex w-full gap-12 mx-auto md:mx-0 md:justify-between md:gap-3'><span className='font-bold text-lg md:text-xl'>Lara Jones</span> 
      <span className='flex w-fit py-2 text-orange-500 items-center'>
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalf size={15} />
        
      </span>
      </h1>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum exercitationem nulla quo voluptatum id, expedita recusandae ea dicta ut voluptatibus.</p>
     </div>
    </div>
    <div className='grid justify-center md:justify-between md:flex items-center w-fit px-2 gap-3'>
     <div className="w-[100px] h-[100px] mx-auto md:mx-0 rounded-[50%] overflow-hidden">
        <img src={manz} className='w-full h-full object-cover ' alt="" />
     </div>
     <div className="w-fit px-3">
      <h1 className='flex w-full gap-12 mx-auto md:mx-0 md:justify-between md:gap-3'><span className='font-bold text-lg md:text-xl'>Jumal Ibrahim</span> 
      <span className='flex w-fit py-2 text-orange-500 items-center'>
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalf size={15} />
        
      </span>
      </h1>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum exercitationem nulla quo voluptatum id, expedita recusandae ea dicta ut voluptatibus.</p>
     </div>
    </div>

    <div className='grid justify-center md:justify-between md:flex items-center w-fit px-2 gap-3'>
     <div className="w-[100px] h-[100px] mx-auto md:mx-0 rounded-[50%] overflow-hidden">
        <img src={woz} className='w-full h-full object-cover ' alt="" />
     </div>
     <div className="w-fit px-3">
      <h1 className='flex w-full gap-12 mx-auto md:mx-0 md:justify-between md:gap-3'><span className='font-bold text-lg md:text-xl'>Deife Adams</span> 
      <span className='flex w-fit py-2 text-orange-500 items-center'>
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalf size={15} />
        
      </span>
      </h1>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum exercitationem nulla quo voluptatum id, expedita recusandae ea dicta ut voluptatibus.</p>
     </div>
    </div>
 </div>
  )
}

export default ProductComments
