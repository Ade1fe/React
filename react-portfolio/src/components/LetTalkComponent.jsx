import React from 'react'
import LetsTalkInner from './LetsTalkInner'
import talk from "../assets/contact-g0f210452d_1280.jpg";


const LetTalkComponent = () => {
  return (
    <div className='block md:flex px-3 md:px-10 gap-6 items-center my-5'>
       
        <div className="w-full md:w-[80%] mx-auto mt-8 bg-white p-8 rounded-lg" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-gray-700 mb-4">Thank you for visiting our portfolio! We are thrilled to have you here. Whether you have a project idea, a collaboration proposal, or just want to say hello, we'd love to hear from you. Feel free to reach out to us by sending a message using the form below.</p>
        <img src={talk} alt="Illustration" className="w-full h-auto" />
      </div>
      <LetsTalkInner />
    </div>
  )
}

export default LetTalkComponent
