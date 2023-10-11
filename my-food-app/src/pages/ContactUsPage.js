import React from 'react'
import ContactUsOne from '../components/ContactUsOne'
import MainLayout from './../layouts/MainLayout';
import MainContainer from '../components/MainContainer';
import callus from "../assets/callus.png";

const ContactUsPage = () => {
  return (
    <MainLayout>
        <MainContainer img={callus} title="Contact Us" notes=" Have questions or want to get in touch? We're here to assist you.  Feel free to reach out to us anytime; we look forward to hearing from you!"/>
        <ContactUsOne />
      
    </MainLayout>
  )
}

export default ContactUsPage
