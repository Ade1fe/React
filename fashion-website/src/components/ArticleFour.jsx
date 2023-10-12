import React from 'react'
import ImgCard from './ImgCard'
import bag from '../assests/bag.jpg'
import pic1 from '../assests/fashion-product14.jpg'
import pic2 from '../assests/shit.jpg'
import pic3 from '../assests/longdd.jpg'
import pic4 from '../assests/dress.jpg'
import pic5 from '../assests/fashion-product19.jpg'
import pic6 from '../assests/short.jpg'
import pic7 from '../assests/sweet.jpg'


const ArticleFour = () => {
  return (
<div className="text-center mt-[100px]">

 
   <div className="hidden sm:block title">
   <span className='text-gray-500 text-sm uppercase'>Latest Wardrobe</span>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 ">
          <span className="border-t border-gray-200 w-1/4 inline-block "></span>    <span className='px-6 uppercase'>   New Arrivals   </span>    <span className="border-t border-gray-200 w-1/4  inline-block"></span>
        </h2>
      </div>

      <div className="title grid sm:hidden   align-middle items-center justify-center text-center">
        <p className='border-t mb-3 text-center w-[250px] sm:w-[450px] border-gray-200'></p>
        <span className='text-gray-500 text-sm uppercase'>Latest Wardrobe</span>
        <h2 className="text-2xl sm:text-4xl font-semibold uppercase">
           New Arrivals 
        </h2>
        <p className='border-t mt-3 text-center border-gray-200'></p>
      </div>

<div className='flex flex-wrap justify-center gap-2 sm:gap-5 px-2 mt-5'>
        <ImgCard img={bag} h1="Hand Bag" price="$29.50" />

        <ImgCard img={pic1} h1="Girl's Dress" price="$88.50" />

        <ImgCard img={pic2} h1="Half Shirt" price="$15.00" />

        <ImgCard img={pic3} h1="Sleevless Dress" price="$32.00" />

        <ImgCard img={pic4} h1="Beige Dress" price="$45.50" />

        <ImgCard img={pic5} h1="Sunglass" price="$12.60" />

        <ImgCard img={pic6} h1="Trouser" price="$18.50" />

        <ImgCard img={pic7} h1="Party Wear" price="$55.05" />

        
      
    </div>

<button className='py-2 my-2 mt-8 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50 '>View All Product </button>
</div>
  )
}

export default ArticleFour
