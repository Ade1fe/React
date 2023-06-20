import React from 'react'
import { FaDribbbleSquare,
     FaFacebookSquare,
      FaGithubSquare,
       FaInstagram,
        FaTwitterSquare 
    } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' >
          <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Similique tenetur iure expedita assumenda nulla fugit
             error, nam sit illo quos maxime nesciunt temporibus
              mollitia provident nostrum reprehenderit, doloremque beatae quis!
              </p>
              <div className='flex justify-between lg:w-[60%] md:w-[55%] w-[200px] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare  size={30}/>
                <FaDribbbleSquare size={30} />
              </div>
          </div>
          <div className="lg:col-span-2 mt-6 flex justify-evenly">
            <div className="">
              <h6 className='font-medium text-gray-600'>Solutions</h6>
              <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
              </ul>
            </div>

            <div className="">
              <h6 className='font-medium text-gray-600'>Supports</h6>
              <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documents</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
              </ul>
            </div>

            <div className="">
              <h6 className='font-medium text-gray-600'>Company</h6>
              <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
              </ul>
            </div>

            <div className="">
              <h6 className='font-medium text-gray-600'>Legal</h6>
              <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
              </ul>
            </div>

          </div>
    </div>
  )
}

export default Footer