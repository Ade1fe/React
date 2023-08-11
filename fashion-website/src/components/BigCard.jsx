import React from 'react'

const BigCard = ({h1, p,myClass}) => {
  return (
    <div className={myClass}>
      <div className="border-2 px-5 py-[50px] border-gray-200">
        <h2 className='text-xl sm:text-3xl font-bold mb-2'>{h1}</h2>
        <p className='text-gray-500 text-sm'>{p}</p>
        <button className='py-2 my-2 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50'>Shop Now</button>
      </div>
    </div>
  )
}

export default BigCard
