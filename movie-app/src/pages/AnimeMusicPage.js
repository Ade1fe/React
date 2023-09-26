import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/b2c72bbc309e4f3d8545729092b76195-removebg-preview.png"
import Footer from './../components/Footer';
import AnimeOvaTab from '../components/AnimeOvaTab';
import AnimeOnaTab from '../components/AnimeOnaTab';
import AnimeSpecialTab from '../components/AnimeSpecialTab';
import AnimeMusicTab from '../components/AnimeMusicTab';
const AnimeMusicPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <AnimeMusicTab />
        <Footer />
        </>
   
  )
}

export default AnimeMusicPage
