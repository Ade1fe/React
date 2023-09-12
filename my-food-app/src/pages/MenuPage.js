import React from 'react'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import MenuOne from '../components/MenuOne';
import contain from '../assets/main.jpg';




const MenuPage = () => {
  return (
    <MainLayout>
      <MainContainer img={contain} title="Tasty Food"  notes=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptate minus! Quod, alias! Numquam ducimus
          placeat dicta incidunt, sint vel?" />
      <div>
        <MenuOne />
      </div>

     
      
   
    </MainLayout>
  )
}

export default MenuPage
