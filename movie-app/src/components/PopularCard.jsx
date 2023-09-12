import React from 'react'

const PopularCard = ({img}) => {
  return (
    <div className='w-[150px] h-[150px] '>
      <img src={img} className='w-full h-full object-contain' alt="" />
    </div>
  )
}

export default PopularCard
