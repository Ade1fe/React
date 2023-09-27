import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import SideBar from './SideBar';

const AnimeAd = ({img}) => {
  return (
    <div>
       <SideBar />
        <div className='flex items-center justify-evenly gap-4 flex-wrap'>
        <div className="w-[100px] h-[100px] overflow-hidden">
            <img src={img} className='w-full h-full object-cover' alt="" />
        </div>
        <div className="">
            <h2><span className='font-bold text-blue-600'>Share Dee-Movies </span><br /> <span> to your friends</span> </h2>
        </div>

        <div className="">
            <h1><span>31.6k</span> <br /> <span className='text-xs'>shares</span></h1>
        </div>
    <div className="bg-blue-500 w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaFacebook />
       <h2> 7.8k</h2>
    </div>

    <div className="bg-[#222]  w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaTwitter />
       <h2> 4.1k</h2>
    </div>

    <div className="bg-blue-700 w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaFacebookMessenger />
       <h2> 6.3k</h2>
    </div>

    <div className="bg-red-600 w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaReddit />
       <h2> 2.8k</h2>
    </div>

    <div className="bg-green-400 w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaWhatsapp />
       <h2> 5.6k</h2>
    </div>

    <div className="bg-blue-400 w-fit px-5 justify-evenly py-1 flex gap-5 rounded-md items-center">
        <FaTelegram />
       <h2> 9.4k</h2>
    </div>

    </div>
    </div>
  )
}

export default AnimeAd
