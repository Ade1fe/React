import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import pic from "../assets/web-removebg-preview.png"


const Aside = () => {
  return (
    <div className='grid grid-cols-1 justify-between gap-3 sm:grid-cols-2 lg:grid-cols-1 '>
        <div className="flex gap-3 flex-wrap my-5 col-span-1 sm:col-span-2 lg:col-span-1">
        <FaFacebook size={25}  />
        <FaGithub size={25}  />
        <FaInstagram size={25}  />
        <FaTwitter size={25}  />
        <FaTiktok size={25}  />
        </div>

        <div className=" text-lg md:text-xl my-5">
            <p className='font-bold'>Facts</p>
            <p className='font-bold'>Status</p>
            <p className='text-sm md:text-lg'>Returning Series</p>
        </div>

        <div className="my-5 text-lg md:text-xl">
            <p>Network</p>
            <div className="w-[100px] h-[100px] ">
                <img src={pic} className='w-full h-full object-contain' alt="" />
            </div>
        </div>

        <div className="text-lg md:text-xl my-5">
            <p className='font-bold'>Type</p>
            <p className='text-sm md:text-lg'>Scripted</p>
        </div>

        <div className="text-lg md:text-xl my-5">
            <p className='font-bold'>Original Language</p>
            <p className='text-sm md:text-lg'>English</p>
        </div>

        <div className="my-5">
            <p className='font-bold text-lg md:text-xl'>Keywords</p>
            <div className="flex gap-3 flex-wrap">
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>based on novel or book</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>magic</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>reincarnation</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>quest</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>high fantasy</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'>good vs evil</p>
                <p className='text-sm md:text-lg px-2 py-1 bg-gray-950 w-fit rounded-lg'> fantasy</p>
            </div>

            <hr  className='mt-3'/>
        </div>

        

        <div className="text-lg md:text-xl my-5">
            <h1 className='font-bold mb-2'>Content Score</h1>

            <div className="w-fit rounded-xl text-sm md:text-lg overflow-hidden bg-slate-50">
            <p className='bg-blue-950 p-2 text-sm md:text-lg'>100</p>
            <p className='px-2 py-3 text-black text-sm md:text-lg'>Yes! Looking good!</p>
            </div>
        </div>

        
      
    </div>
  )
}

export default Aside
