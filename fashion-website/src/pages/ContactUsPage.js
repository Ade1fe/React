import React from 'react'
import ContactUsForm from '../components/ContactUsForm'
import ContactAddress from '../components/ContactAddress'
import MainLayout from '../Layouts/MainLayout'
import MainContent from '../components/MainContent'
import Notification from '../components/Notification'

const ContactUsPage = () => {
  return (
    <MainLayout>
         <MainContent text="Contact Us" />
    <div className=''>
      <div> 
      <iframe
          title="Location"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.878176832842!2d-74.00059368480606!3d40.73878767933055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d2c7c94f83106df!2sYour%20Location!5e0!3m2!1sen!2sus!4v1568759709824!5m2!1sen!2sus"
        />
      </div>

      <div className='grid mt-5 grid-cols-1 sm:grid-cols-2 gap-3'>
      <ContactAddress />
      <ContactUsForm />
    
      </div>
    </div>
    <Notification />
    </MainLayout>
  )
}

export default ContactUsPage
