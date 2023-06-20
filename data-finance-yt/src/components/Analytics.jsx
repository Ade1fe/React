import React from 'react'
import tab  from "../assets/Dark analytics-bro.png"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={tab} alt="/" />
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>DTA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p className=''>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Nesciunt incidunt
        quam excepturi. Totam, sunt molestias! 
        Ipsa accusamus inventore nam at quam ullam,
        dolores distinctio quasi, libero minima officiis 
        recusandae! Velit earum expedita ea! Vitae
        dignissimos ipsa eos ipsam earum illum 
        odio eligendi. Doloremque, natus quae 
        vel non eaque aut odit.
        </p>
        <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics