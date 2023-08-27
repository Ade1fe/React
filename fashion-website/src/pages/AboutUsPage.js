import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import MainContent from '../components/MainContent'
import AbTextContent from '../components/AbTextContent'
import AdvertContainer from './../components/AdvertContainer';
import AbVideoContainer from '../components/AbVideoContainer';
import AbSwiper from '../components/AbSwiper';

const AboutUsPage = () => {
  return (
    <MainLayout>
       <div >
        <MainContent text="About Us" />
        <AbTextContent />
        <AdvertContainer />
        <AbVideoContainer />
        <AbSwiper />
        
       </div>
      
    </MainLayout>
  )
}

export default AboutUsPage
