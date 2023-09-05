import React from 'react'
import ChoseUsCard from './ChoseUsCard'
import { FaCartArrowDown } from 'react-icons/fa';
import { IoMdCash,IoMdCar } from 'react-icons/io';

const ChoseUs = () => {
  return (
    <div  className='p-4  bg-[#f1f1f1] py-[40px]'>
        <h2 className='text-center text-xl whitespace-nowrap md:text-2xl mb-5 lg:text-3xl'>Why Chose Us</h2>
       <div className="grid sm:flex gap-3 ">
       <ChoseUsCard icons={<FaCartArrowDown size={30} />} title="ease to order"/>
        <ChoseUsCard icons={<IoMdCash size={30} />}  title="secure payment" />
        <ChoseUsCard icons={<IoMdCar size={30} />}   title="fast delivery"/>
       </div>
      
    </div>
  )
}

export default ChoseUs
