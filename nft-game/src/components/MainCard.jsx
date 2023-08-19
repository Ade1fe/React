import React from 'react'
import pokemon1 from "../assests/f3e591605f394880a3049206b4eb1fc8.jpeg"
import ContainerCard from './ContainerCard'

const MainCard = () => {
  return (
   <div className="block lg:flex justify-between gap-3  px-5 ">
     <div className='p-3 bg-yellow-600 w-[90%] md:w-[50%] mx-auto lg:w-[20%]'>
        <div className="w-full relative">
            <img src={pokemon1} className='w-full h-auto object-contain ' alt="" />
            <p className='p-2 bg-yellow-600 absolute top-1 right-2 text-black rounded-lg font-bold'> <span> &#x2764;</span> 20</p>
            <p className='px-2 py-1 bg-yellow-600 absolute bottom-1 left-2 text-black rounded-lg font-bold'>Pokemon</p>
        </div>
        <div className="grid  grid-cols-2 my-3 text-black font-semibold">
            <p><span>12h:</span> <span>06m:</span> <span>03s</span></p> <p  className='text-end'>0.65ETH</p>
            <p className='sm whitespace-nowrap mt-3'>Pokemon <span>#2345</span></p> <p className='text-end pl-4 mt-3'><span className='bg-black px-2 py-1 text-yellow-600 rounded-lg'>Bid Now</span></p>
        </div>
      
    </div>

    <ContainerCard />
   </div>
  )
}

export default MainCard
