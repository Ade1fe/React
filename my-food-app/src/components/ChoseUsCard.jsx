import React from 'react'



const ChoseUsCard = ({icons, title}) => {
  return (
    <div className='py-7 px-3 md:py-5 rounded-2xl w-fit md:w-[400px] bg-orange-500 '>
        <div className="">
        {/* 
      <IoMdCash size={30} />
      <IoMdCar size={30} /> */}

            <div className='capitalize mb-2 flex gap-3 items-center'> <p className='text-orange-300'>{icons}</p>  
            <p className='font-semibold text-lg md:text-xl'> {title}</p></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolorum, corrupti voluptatibus 
                culpa cupiditate accusamus asperiores.</p>
        </div>
      
    </div>
  )
}

export default ChoseUsCard
