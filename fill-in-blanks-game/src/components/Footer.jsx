import React from 'react'
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='grid text-xs  md:text-sm justify-center text-center p-3 sm:py-3 bg-[#a2d2ff] mt-[50px] sm:px-8 items-center sm:flex sm:justify-between'>
      <p className=''>© 2023 Deife-Quiz</p>
      <p className='whitespace-nowrap'>Follow on all social paltfroms @deife_syntax</p>
      <div className="flex mt-1 sm:mt-0 justify-center sm:justify-between items-center gap-2">
      <a target='_blank' href="https://www.instagram.com/deife_syntax/" rel="noreferrer">   <FaInstagram className=' text-[#304151] hover:text-[#617385]'  size={15}/></a>
      <a target='_blank' href="https://www.tiktok.com/@deife_syntax" rel="noreferrer"> <FaTiktok className=' text-[#304151] hover:text-[#617385]' size={15}/> </a>
      <a target='_blank' href="https://twitter.com/deife_syntax" rel="noreferrer">    <FaTwitter className=' text-[#304151] hover:text-[#617385]' size={15} /> </a>
 
   

    
      </div>
    </div>
  )
}

export default Footer
