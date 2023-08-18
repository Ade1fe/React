import React from 'react'

const ShopFor = () => {
  return (
    <div className='mt-[100px] bg-gray-900 w-full gap-3 py-8 text-center h-max sm:h-[270px] px-3 text-white flex-col sm:flex-row flex justify-evenly'>
      <div className="flex-1 bg-gray-800 rounded-lg flex flex-col justify-center my-3 sm:my-0 py-3 px-2"> 
      <p className='text-cyan-300 text-sm mb-2 '>- Flat 45% sale on pre-order</p>
       <h1 className='mb-2 text-2xl sm:text-3xl md:text-4xl'>Seasionable gent's clothes</h1>
        <button>SHOP FOR HIM</button>
      </div>
      <div className="flex-1 bg-gray-800  rounded-lg flex flex-col justify-center my-3 sm:my-0  py-3 px-2"> 
      <p className='text-cyan-300 text-sm mb-2'>- Flat 45% sale on pre-order</p>
       <h1 className='mb-2 text-2xl sm:text-3xl md:text-4xl'>Seasionable gent's clothes</h1>
        <button>SHOP FOR HIM</button>
      </div>

    </div>
  )
}

export default ShopFor
