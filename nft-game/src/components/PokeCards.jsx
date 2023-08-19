import React from 'react'


const PokeCards = ({img}) => {
  return (
   <div className="p-2 bg-[#222] w-fit rounded-[10px]">
     <div className='w-[150px] h-[150px] border-2 border-yellow-600 overflow-hidden rounded-[10px]'>
      <img src={img} className='w-full h-full object-cover' alt="" />
    </div>
   </div>
  )
}

export default PokeCards
