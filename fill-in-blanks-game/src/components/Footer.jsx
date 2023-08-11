import React from 'react'
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='grid justify-center text-center p-3 sm:py-3 bg-[#a2d2ff] mt-[50px] sm:px-8 items-center sm:flex sm:justify-between'>
      <p className='text-sm'>© 2023 Educaplay</p>
      <p className='whitespace-nowrap'>Follow on all social paltfroms @deife_syntax</p>
      <div className="flex mt-1 sm:mt-0 justify-center sm:justify-between items-center gap-3">
    <FaInstagram className=' text-[#304151] hover:text-[#617385]'  size={20}/>
    <FaTiktok className=' text-[#304151] hover:text-[#617385]' size={20}/>
    <FaTwitter className=' text-[#304151] hover:text-[#617385]' size={20} />
    
      </div>
    </div>
  )
}

export default Footer
