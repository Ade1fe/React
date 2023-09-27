import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/6727a3af158845429303fab9669fd87b-removebg-preview.png"
import Footer from './../components/Footer';
import AnimeOvaTab from '../components/AnimeOvaTab';
const AnimeOvaPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <AnimeOvaTab />
        <Footer />
        </>
   
  )
}

export default AnimeOvaPage
