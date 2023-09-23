import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import pic from "../assets/web-removebg-preview.png"


const Aside = () => {
  return (
    <div className=''>
        <div className="flex gap-3 flex-wrap my-5">
        <FaFacebook size={25}  />
        <FaGithub size={25}  />
        <FaInstagram size={25}  />
        <FaTwitter size={25}  />
        <FaTiktok size={25}  />
        </div>

        <div className="text-xl my-5">
            <p className='font-bold'>Facts</p>
            <p className='font-bold'>Status</p>
            <p>Returning Series</p>
        </div>

        <div className="my-5">
            <p>Network</p>
            <div className="w-[100px] h-[100px] ">
                <img src={pic} className='w-full h-full object-contain' alt="" />
            </div>
        </div>

        <div className="text-xl my-5">
            <p className='font-bold'>Type</p>
            <p>Scripted</p>
        </div>

        <div className="text-xl my-5">
            <p className='font-bold'>Original Language</p>
            <p>English</p>
        </div>

        <div className="my-5">
            <p className='text-xl font-bold'>Keywords</p>
            <div className="flex gap-3 flex-wrap">
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>based on novel or book</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>magic</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>reincarnation</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>quest</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>high fantasy</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'>good vs evil</p>
                <p className='px-2 py-1 text-lg bg-gray-950 w-fit rounded-lg'> fantasy</p>
            </div>
        </div>

        <hr />

        <div className="text-xl my-5">
            <h1 className='font-bold'>Content Score</h1>

            <div className="w-fit rounded-xl overflow-hidden bg-slate-50">
            <p className='bg-blue-950 p-2'>100</p>
            <p className='px-2 py-3 text-black'>Yes! Looking good!</p>
            </div>
        </div>

        
      
    </div>
  )
}

export default Aside
