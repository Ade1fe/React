import React from 'react'

const ProductInfo = ({details}) => {
  return (
    <div className='mt-[10px] md:mt-[15px]'>
     <p className=' text-[15px] md:text-lg'>{details}</p>
     <button>download</button>
    </div>
  )
}

export default ProductInfo
