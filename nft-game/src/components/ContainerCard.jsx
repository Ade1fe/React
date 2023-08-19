import React from 'react'
import Carousel from './Carousel'


const ContainerCard = () => {
  return (
    <div className=' w-full lg:w-[77%]'>
        <div className="mb-4">
        <h1 className='text-lg sm:text-2xl mb-3'>POKEMON</h1>
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
     sapiente perspiciatis consequatur ab rem consectetur
      tempora excepturi magni? Vitae, nobis.</p>
        </div>

        <div className="">
        
        <Carousel />

        </div>
      
    </div>
  )
}

export default ContainerCard
