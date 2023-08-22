import React from 'react'


const TabLinkImgCards = ({img, name, price ,dolar}) => {
  return (
    <div className='w-fit bg-gray-800 p-2 rounded-l-lg rounded-r-lg'>
      <div className="w-[220px] h-[200px]  rounded-l-lg rounded-r-lg overflow-hidden ">
      <img src={img} className='w-full h-full object-cover' alt="" />
      </div>
      <div className="grid grid-cols-2 text-yellow-600 mt-1">
        <p className='text-sm font-bold'>{name}</p> <p className='text-end text-sm font-bold'>{price}</p>
        <p className='text-start pl-2  text-white text-xs mb-1'><span className='border-b-2 border-white'>Commander</span></p>  <p className='text-end text-xs'>{dolar}</p>
        <p className='text-center bg-yellow-600 p-2 py-1 col-span-2 mt-1 rounded-lg'>Bid Now</p>
      </div>
    </div>
  )
}

export default TabLinkImgCards

