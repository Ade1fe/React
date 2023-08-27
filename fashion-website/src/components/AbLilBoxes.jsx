import React from 'react'

const AbLilBoxes = ({text1, text2}) => {
  return (
    <div className='bg-gray-50 border-2 p-4 h-[170px] w-[80%]  sm:w-[250px] flex flex-col justify-center items-center'>
      <h1 className='text-3xl sm:text-4xl font-semibold pb-2'>{text1}</h1>
      <p className='text-lg'>{text2}</p>
    </div>
  )
}

export default AbLilBoxes
