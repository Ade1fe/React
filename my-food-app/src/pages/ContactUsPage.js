import React from 'react'
import ContactUsOne from '../components/ContactUsOne'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import callus from "../assets/callus.png";

const ContactUsPage = () => {
  return (
    <MainLayout>
        <MainContainer img={callus} title="Contact Us" notes=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptate minus! Quod, alias! Numquam ducimus
          placeat dicta incidunt, sint vel?"/>
        <ContactUsOne />
      
    </MainLayout>
  )
}

export default ContactUsPage
