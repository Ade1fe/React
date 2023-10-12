import React from 'react'
import ImgCard from './ImgCard'
import bag from '../assests/shit.jpg'
import pic1 from '../assests/fashion-product2.jpg'
import pic2 from '../assests/fashion-product3.jpg'
import pic3 from '../assests/fashion-product16.jpg'
import pic4 from '../assests/fashion-product23.jpg'
import pic5 from '../assests/fashion-product12.jpg'
import pic6 from '../assests/fashion-product13.jpg'
import pic7 from '../assests/fashion-product1.jpg'

const ArticleSix = () => {
  return (
<div className="text-center mt-[100px]">

 
   <div className="hidden sm:block title">
   <span className='text-gray-500 text-sm uppercase'>Top sale of the week</span>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 ">
          <span className="border-t border-gray-200 w-1/4 inline-block uppercase"></span>    <span className='px-6 uppercase'>   Featured product  </span>    <span className="border-t border-gray-200 w-1/4  inline-block"></span>
        </h2>
      </div>

      <div className="title grid sm:hidden   align-middle items-center justify-center text-center">
        <p className='border-t mb-3 text-center w-[250px] sm:w-[450px] border-gray-200'></p>
        <span className='text-gray-500 text-sm uppercase'>Top sale of the week</span>
        <h2 className="text-2xl sm:text-4xl font-semibold uppercase">
        Featured product
        </h2>
        <p className='border-t mt-3 text-center border-gray-200'></p>
      </div>

<div className='flex flex-wrap justify-center gap-2 sm:gap-5 px-2 mt-5'>
        <ImgCard img={bag} h1="Half Shirt" price="$15.50" />

        <ImgCard img={pic1} h1="Tuxedo Suit" price="$180.00" />

        <ImgCard img={pic2} h1="Cotton Trouser" price="$11.50" />

        <ImgCard img={pic3} h1="Sleeveless tops" price="$80.50" />

        <ImgCard img={pic4} h1="Purse" price="$30.00" />

        <ImgCard img={pic5} h1="Ruffled Dress" price="$40.00" />

        <ImgCard img={pic6} h1="Wedding Dress" price="$550.50" />

        <ImgCard img={pic7} h1="Jacket" price="$25.00" />

        
      
    </div>

<button className='py-2 my-2 mt-8 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50 '>View All Product </button>
</div>
  )
}

export default ArticleSix
