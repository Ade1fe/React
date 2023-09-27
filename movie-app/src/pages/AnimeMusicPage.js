import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/48049aa3729f47ad84589eca6cac96c4-removebg-preview.png"
import Footer from './../components/Footer';
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
