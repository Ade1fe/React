import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ContactIner from './ContactIner';
import ContactForm from './ContactForm';

const ContactCom = () => {
  return (
    <MainLayout>

    
   
    <div className="block mx-auto justify-between gap-6 md:flex my-5 px-3">
    <div className="w-full md:w-[45%]">
    <ContactIner />
    </div>
      <div className="w-full md:w-[55%]">
      <ContactForm />
      </div>
    </div>

   </MainLayout>
  )
}

export default ContactCom
