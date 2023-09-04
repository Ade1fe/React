import React from 'react'
import ContactUsOne from '../components/ContactUsOne'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import callus from "../assets/callus.png";

const ContactUsPage = () => {
  return (
    <MainLayout>
        <MainContainer img={callus} title="Contact Us"/>
        <ContactUsOne />
      
    </MainLayout>
  )
}

export default ContactUsPage
