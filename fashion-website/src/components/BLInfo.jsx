import React from 'react'
import { FaFacebook, FaTwitter , FaInstagram , FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa"

const BLInfo = () => {
  return (
    <div className="mt-[30px]">
      <h2 className='mt-4 mb-10 border-2 text-center w-fit mx-auto p-3 uppercase'>Follow us on</h2>
    <div className='flex flex-wrap gap-5 items-center justify-center'>
        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaFacebook size={20} /> 
        <h2>Facebook</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaTwitter size={20} /> 
        <h2>Twitter</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaInstagram size={20} /> 
        <h2>Instagram</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaYoutube size={20} /> 
        <h2>Youtube</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaLinkedin size={20} /> 
        <h2>Linkedin</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaGithub size={20} /> 
        <h2>Github</h2>
        </div>

      
    </div>
    </div>
  )
}

export default BLInfo
