import React from 'react'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import MenuOne from '../components/MenuOne';
import contain from '../assets/main.jpg';




const MenuPage = () => {
  return (
    <MainLayout>
      <MainContainer img={contain} title="Tasty Food" />
      <div>
        <MenuOne />
      </div>

     
      
   
    </MainLayout>
  )
}

export default MenuPage
