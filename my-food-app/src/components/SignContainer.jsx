
import React from 'react'

const SignContainer = ({child,img}) => {
  return (
    <div className='block sm:flex items-center mb-[100px] h-screen'>
        <div className="flex-1 w-full h-[200px] sm:h-full md:h-full">
            <img src={img} className='w-full h-full object-cover' alt="" />
        </div>
        <div className="flex-1">
           {child}
        </div>
      
    </div>
  )
}

export default SignContainer

