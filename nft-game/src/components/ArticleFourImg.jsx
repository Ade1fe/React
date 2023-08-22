import React from 'react'


const ArticleFourImg = ({img, img1, user, price,title}) => {
  return (
    <div className='p-2 rounded-lg bg-gray-800  w-fit relative'>
      <div className=" w-[280px] h-[290px]  sm:w-[250px] sm:h-[250px] lg:w-[240px] lg:h-[240px]  rounded-lg overflow-hidden">
      <img src={img} className='w-full h-full object-cover' alt="" />
      </div>
      <p className='px-2 py-1 bg-gray-800 rounded-bl-2xl text-white absolute top-2 right-2'>{title}</p>
      <div className='pl-2 pr-4 py-1 bg-black  rounded-bl-xl rounded-tr-3xl text-white absolute
       bottom-[7px] left-2 flex gap-2 items-center justify-between'>
        <img src={img1} className='w-[40px] rounded-[50%] h-[40px] object-cover' alt="" />
        <div className="text-sm">
        <h1 className='text-xs'>{user}</h1> <h1 className='text-yellow-600'>{price}</h1>
        </div>
        
      </div>
      <button className='p-4 py-2 bg-yellow-600  rounded-tl-xl rounded-br-xl  text-black font-semibold absolute
       bottom-[15px] right-4 flex gap-2 items-center justify-between text-sm'>Bid Now</button>
    </div>
  )
}

export default ArticleFourImg
