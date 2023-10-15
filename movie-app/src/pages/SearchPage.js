import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/c7a528689417425c887d087e4f8f2c23-removebg-preview.png"
import Footer from './../components/Footer';
import SearchATab from '../components/SearchATab';

const SearchPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <SearchATab />
        <Footer />
        </>
   
  )
}

export default SearchPage
