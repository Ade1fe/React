import React from 'react'
import ChoseUsCard from './ChoseUsCard'
import { FaCartArrowDown } from 'react-icons/fa';
import { IoMdCash,IoMdCar } from 'react-icons/io';

const ChoseUs = () => {
  return (
    <div  className='p-4  bg-[#f1f1f1] py-[40px]'>
        <h2 className='text-center text-xl whitespace-nowrap md:text-2xl mb-5 lg:text-3xl'>Why Chose Us</h2>
       <div className="grid sm:flex gap-3 justify-center ">
       <ChoseUsCard icons={<FaCartArrowDown size={30} />} text="Placing your order with us is a breeze. Whether you prefer to order online from the comfort of your home, through our user-friendly app." title="ease to order"/>
        <ChoseUsCard icons={<IoMdCash size={30} />} text="Your peace of mind matters to us. We offer a secure and trusted payment system, ensuring that your financial information is safeguarded."  title="secure payment" />
        <ChoseUsCard icons={<IoMdCar size={30} />}  text="We take 'fast' seriously. Our commitment to providing the fastest food in town extends to our delivery service. Once you've placed your order" title="fast delivery"/>
       </div>
      
    </div>
  )
}

export default ChoseUs
