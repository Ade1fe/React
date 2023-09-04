import React from 'react'
import agents from "../assets/Agent.png"
import { FaEnvelope, FaPhone, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'

const ContactImg = () => {
  return (
   <div className="">
     <div className='w-full h-[300px] md:py-4'>
      <img src={agents} alt="" className='w-full h-full object-contain' />
    </div>

    <div className=" px-0 md:px-5 mt-6 md:mt-12">
    <div className="flex gap-4 mb-3">
    <div className="bg-transparent border-2 w-fit rounded-[50%] border-orange-500 text-orange-500 p-2  hover:text-black cursor-pointer">
            <FaPhoneAlt size={20} />
        </div>
          <h2 className='text-lg font-semibold'>+2349038257434</h2>
    </div>
        <div className="flex gap-4 mb-3">
        <div className="bg-transparent border-2 w-fit rounded-[50%] border-orange-500 text-orange-500 p-2  hover:text-black cursor-pointer">
        <FaEnvelope size={20} />
        </div>
        <h2 className='text-lg font-semibold whitespace-normal'>addypearl09@gmail.com</h2>
        </div>
        <div className="flex gap-4 mb-3 items-center">
        <div className="bg-transparent border-2 w-fit rounded-[50%] border-orange-500 text-orange-500 p-2  hover:text-black cursor-pointer">
            <FaSearchLocation size={20} />
        </div>
        <h2 className='text-lg font-semibold'>04, Bode Edun Ogun state, Nigeria</h2>
        </div>
    </div>
   </div>
  )
}

export default ContactImg
