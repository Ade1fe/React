import React from 'react'

const AbLilBoxes = ({text1, text2}) => {
  return (
    <div className='bg-gray-50 border-2 text-center mx-auto p-4 h-[130px] md:h-[150px] w-full flex flex-col justify-center items-center'>
      <h1 className=' text-xl sm:text-2xl md:text-3xl  font-semibold pb-2'>{text1}</h1>
      <p className='text-sm md:text-lg'>{text2}</p>
    </div>
  )
}

export default AbLilBoxes
