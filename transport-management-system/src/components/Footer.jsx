import React from 'react'
import { FaFacebook, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-[50px]'>
    <div  className='block text-center sm:flex px-3 md:px-11  uppercase justify-between py-4 items-center bg-white'>
    <div className="font-bold text-[21px] md:text-[25px]">
        <h1 className='myH1 font-effect-shadow-multiple'>TripLink</h1>
      </div>
        <ul className="flex justify-center my-3 sm:my-0 sm:justify-between  items-center font-semibold myUl text-[15px] md:text-[18px]">
           
            <li className='px-1 md:px-5 mr-2'><a href="/">Admin</a></li>
            <li className='px-5 md:px-5 bg-black py-1 mx-2 rounded-[12px]  text-white border-2 border-sky-500 hover:bg-white hover:text-black'><a href="/">Log In</a></li>
            {/* <li className='px-5'><a href="/">Sign Up</a></li> */}
        </ul>


        <ul className='flex justify-center my-3 sm:my-0 sm:justify-evenly gap-2'>
      <li className='p-2 bg-sky-400 text-white rounded-[50%] border border-b-2 border-black'> <FaFacebook /> </li>
      <li className='p-2 bg-sky-400 text-white rounded-[50%] border border-b-2 border-black'> <FaTwitter /></li>
      <li className='p-2 bg-sky-400 text-white rounded-[50%] border border-b-2 border-black'> <FaTiktok /> </li>
      <li className='p-2 bg-sky-400 text-white rounded-[50%] border border-b-2 border-black'> <FaEnvelope /></li>
    </ul>
    </div>


<p className='p-4 text-center text-xs sm:text-[15px]'>Copyright © 2023, TripLink. Designed by <span className='font-bold text-sky-400'>deife_syntax</span></p>

    </div>
  )
}

export default Footer
