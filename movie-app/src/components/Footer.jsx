import React from 'react'
import {FaGlobe} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='border-t-2 text-center border-gray-900 mt-[50px] md:mt-[150px] block sm:flex justify-between items-center px-4 gap-3'>
         <div className='text-2xl logo text-white font-bold' style={{ textShadow: "0 0 3px #9f2525, 0 0 5px #000" }}
>
        <h1><span className='text-red-500'>Dee</span>-Movies</h1>
      </div>

      <p className=' text-white gap-3 justify-center text-sm flex items-center whitespace-nowrap'>design by deife_syntax <FaGlobe  size={20}/></p>
      
    </div>
  )
}

export default Footer
