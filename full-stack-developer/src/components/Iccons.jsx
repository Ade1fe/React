import React from 'react'
import { AiFillDribbbleCircle, AiFillTwitterCircle ,
     AiFillInstagram, AiOutlineLinkedin } from "react-icons/ai"

const Iccons = () => {
  return (
    <div className='text-center px-5'>
            <h2 className='text-2xl mb-4'>Find Me</h2>
        <div className='flex flex-wrap justify-evenly gap-3 sm:gap-8'>
        <div className="p-3 flex justify-center items-center bg-gray-900 w-fit  rounded-[10px] overflow-hidden">
            <AiFillDribbbleCircle  size={40}/>
        </div>
        <div className="p-3 flex justify-center items-center bg-gray-900 w-fit  rounded-[10px] overflow-hidden">
            <AiFillTwitterCircle size={40} />
        </div>
        <div className="p-3 flex justify-center items-center bg-gray-900 w-fit  rounded-[10px] overflow-hidden">
            <AiFillInstagram  size={40}/>
        </div>
        <div className="p-3 flex justify-center items-center bg-gray-900 w-fit  rounded-[10px] overflow-hidden">
            <AiOutlineLinkedin size={40} />
        </div>

        </div>
      
    </div>
  )
}

export default Iccons
