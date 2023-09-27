import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/af686d8691b6451692b64bad17eec9e3-removebg-preview.png"
import Footer from './../components/Footer';
import AnimeOnaTab from '../components/AnimeOnaTab';
const AnimeOnaPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <AnimeOnaTab />
        <Footer />
        </>
   
  )
}

export default AnimeOnaPage
