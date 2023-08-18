import React from 'react'


const BlogTemplate = ({img,h2, p}) => {
  return (
    <div className=' w-[80%] sm:w-[300px] md:w-[350px] ' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
        <div className="w-full h-[300px]">
            <img src={img} className='w-full h-full object-cover' alt="" />
        </div>
        <div className="px-3 py-2">
            <h2 className='mb-3 font-semibold text-lg sm:text-xl uppercase'>{h2}</h2>
            <p className='mb-3 text-sm sm:text-lg'>{p}</p>
        </div>
      
    </div>
  )
}

export default BlogTemplate
