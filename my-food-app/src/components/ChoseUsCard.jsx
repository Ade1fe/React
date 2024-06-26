import React from 'react'

const ChoseUsCard = ({icons, title,text}) => {
  return (
    <div className='py-5 px-3 md:py-5  rounded-2xl w-fit md:w-[400px] bg-slate-50 shadow-lg'>
        <div className="">

            <div className='capitalize mb-2 flex gap-3 items-center'> <p className='text-orange-300'>{icons}</p>  
            <p className='font-semibold text-lg md:text-xl'> {title}</p></div>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default ChoseUsCard
