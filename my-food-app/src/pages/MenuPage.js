import React from 'react'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import MenuOne from '../components/MenuOne';
import contain from '../assets/main.jpg';




const MenuPage = () => {
  return (
    <MainLayout>
      <MainContainer img={contain} title="Tasty Food"  notes="Savor the art of flavor at Deife-Food. Our culinary experts craft each dish with passion, using the finest, freshest ingredients. From savory starters to mouthwatering main courses and irresistible desserts, we ensure every bite is a memorable experience. Join us for a culinary adventure that will awaken your taste buds and leave you craving for more." />
      <div>
        <MenuOne />
      </div>

     
      
   
    </MainLayout>
  )
}

export default MenuPage
