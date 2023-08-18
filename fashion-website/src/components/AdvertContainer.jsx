import React from 'react'
import Advert from './Advert'
import van from "../assests/van.jpg"
import returns from '../assests/return.jpg'
import headpiece from "../assests/headpiece.jpg"

const AdvertContainer = () => {
  return (
    <div className='flex justify-evenly gap-3 mt-[100px] flex-wrap max-w-[1240px] px-4 mx-auto'>
      <Advert  img={van} h3="Free shipping" p="On orders over $100"/>
      <Advert  img={headpiece} h3="Support 24/7" p="Customer support"/>
      <Advert  img={returns} h3="50 days return" p="Free return & exchange"/>
    </div>
  )
}

export default AdvertContainer
