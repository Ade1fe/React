import React from 'react'
import MainLayout from './../Layouts/MainLayout';
import MainContent from './../components/MainContent';
import ShopCarousel from '../components/ShopCarousel';
import ShopSidebar from '../components/ShopSidebar';
import Notification from '../components/Notification';
// import ShopSectOne from '../components/ShopSectOne';

const ShopPage = () => {
  return (
   <MainLayout>
    <MainContent />

    <div className='mt-[50px] md:mt-[70px] flex-col items-start md:flex-row flex gap-1'>
 <div className='w-full md:w-2/3 px-3 '>
 <ShopCarousel />
 </div>

 <div className='px-3 w-full md:w-1/3'>
 <ShopSidebar />

 </div>
    </div>

    <Notification />

   </MainLayout>
  )
}

export default ShopPage
