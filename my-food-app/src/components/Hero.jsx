import React from 'react'
import deli from "../assets/deliveryman-removebg-preview.png"
import grapes from "../assets/grapes-.jpg"
import berry from '../assets/berry.jpg'
import juice from "../assets/juice.jpg"
import pizza from "../assets/pizza.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='block md:flex items-center justify-center px-4 container mx-auto'>

        <div className="flex-1">
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Fastest
             <span className='text-orange-500'>Delivery</span> @ Easy <span  className='text-orange-500'>Pickup</span></h1>
        
        <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eaque maiores dicta suscipit fugiat, 
            quaerat blanditiis tenetur ea. Ipsa, omnis?</p>
            <Link to="/menu" className='whitespace-nowrap bg-orange-500 text-white border-2 border-orange-500 cursor-pointer px-3 py-1 rounded-md shadow-lg hover:bg-transparent hover:text-black capitalize'>order now</Link>
        </div>
       

        <div className="flex-1 flex flex-col justify-center sm:flex-row md:justify-center gap-8  md:gap-14 ">
        
      
        
        <div className=" w-[280px] h-[280px]  mx-auto sm:mx-0 sm:w-[360px] sm:h-[360px] md:w-[360px]
         md:h-[360px] flex justify-center items-center   border-2 border-orange-500
        rounded-[50%] overflow-hidden ">
        <div className="w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] md:w-[350px] md:h-[350px] bg-orange-500 rounded-[50%] overflow-hidden">
            <img src={deli} className='w-full h-full object-contain' alt="" />
        </div>
        </div>

        <div className="flex sm:flex-col gap-5 lg:gap-8 flex-wrap justify-center">
          <img src={grapes} className='w-[70px]  h-auto' alt="" />
          <img src={berry} className='w-[70px] h-auto' alt="" />
          <img src={juice} className='w-[70px]  h-auto' alt="" />
          <img src={pizza} className='w-[70px] h-auto' alt="" />
        
        </div>
        </div>
      
    </div>
  )
}

export default Hero
