import React from 'react'

const CreateOne = ({title, text, pClass, textTwo,textThree,textFour,textFive}) => {
  return (
    <div className='px-4 w-[95%] md:w-[90%] mx-auto mt-[20px]'>
        <h1 className='text-center  text-xl md:text-2xl  lg:text-3xl '>{title}</h1>
      <p className='text-center py-1 text-sm md:text-lg'>{text}</p>
     <p  className='text-center py-1 text-sm md:text-lg'>{textTwo}</p>
     <p  className='text-center py-1 text-sm md:text-lg'>{textThree}</p>
     <p  className='text-center py-1 text-sm md:text-lg'>{textFour}</p>
     <p  className='text-center py-1 text-sm md:text-lg'>{textFive}</p>
    </div>
  )
}

export default CreateOne
