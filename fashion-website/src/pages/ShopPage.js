import React from 'react'
import MainLayout from './../Layouts/MainLayout';
import MainContent from './../components/MainContent';
import ShopCarousel from '../components/ShopCarousel';
// import ShopSectOne from '../components/ShopSectOne';

const ShopPage = () => {
  return (
   <MainLayout>
    <MainContent />

    <div>
  <ShopCarousel />

    </div>

   </MainLayout>
  )
}

export default ShopPage
