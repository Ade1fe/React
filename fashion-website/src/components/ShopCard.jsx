import React from 'react'
import ImgCard from './ImgCard'
import bag from "../assests/bag.jpg"
import dress from "../assests/blackdress.jpg"
import bow from "../assests/bow.jpg"

const ShopCard = () => {
  return (
    <div>
        <ImgCard img={bag} h1="Sleeveless tops" price="$80.50" />
        <ImgCard img={dress} h1="dress" price="$80.50" />
        <ImgCard img={bow} h1="bow" price="$80.50" />
        
      
    </div>
  )
}

export default ShopCard
