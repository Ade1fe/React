import React from 'react'

const CreateThree = ({title, text, pClass, textTwo,textThree,textFour,textFive}) => {
  return (
    <div className='px-4 w-[95%] md:w-[90%] mx-auto'>
        <h1 className='text-center  text-3xl my-4 md:text-4xl '>{title}</h1>
      <p className='text-center  text-xl md:text-2xl'>{text}</p>
     
    </div>
  )
}

export default CreateThree
