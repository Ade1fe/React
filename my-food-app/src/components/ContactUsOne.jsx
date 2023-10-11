import React from 'react'
import ContactImg from './ContactImg'
import ContactForm from './ContactForm'

const ContactUsOne = () => {
  return (
    <div className='px-7 md:px-[30px] block sm:flex gap-2 mt-[10px] mb-6 md:mt-[50px] md:my-[90px]'>
       <div className="flex-1">
       <ContactImg />
       </div>
      <div className="flex-1">
      <ContactForm />
      </div>
      
    </div>
  )
}

export default ContactUsOne
