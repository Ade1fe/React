import React from 'react'
import ImgCard from './ImgCard'
import bag from '../assests/bag.jpg'

const ArticleFour = () => {
  return (
<div className="text-center mt-[50px]">

 
   <div className="hidden sm:block title">
   <span className='text-gray-500 text-sm'>Latest Wardrobe</span>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 ">
          <span className="border-t border-gray-200 w-1/4 inline-block "></span>    <span className='px-6'>   New Arrivals   </span>    <span className="border-t border-gray-200 w-1/4  inline-block"></span>
        </h2>
      </div>

      <div className="title grid sm:hidden   align-middle items-center justify-center text-center">
        <p className='border-t mb-3 text-center w-[250px] sm:w-[450px] border-gray-200'></p>
        <span className='text-gray-500 text-sm'>Latest Wardrobe</span>
        <h2 className="text-2xl sm:text-4xl font-semibold ">
           New Arrivals 
        </h2>
        <p className='border-t mt-3 text-center border-gray-200'></p>
      </div>

<div className='flex flex-wrap justify-center gap-2 sm:gap-5 px-2 mt-5'>
        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        <ImgCard img={bag} h1="Beige Dress" price="$45.50" />

        
      
    </div>

<button className='py-2 my-2 mt-8 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50 '>View All Product </button>
</div>
  )
}

export default ArticleFour
