import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-full p-10  mx-auto"style={{
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        
      }}>
        <h1 className='font-bold my-4 text-2xl md:text-4xl'>Let’s work <span className='text-purple-500'>together</span>.</h1>
      <div className="mb-4  " >
        <label htmlFor="name" className="flex items-center">
         
          Name <span className='text-red-500 font-bold mx-1'>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="flex items-center">
         
          Email <span className='text-red-500 font-bold mx-1'>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="flex items-center">
         
          Your Subject <span className='text-red-500 font-bold mx-1'>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your subject"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Your Message <span className='text-red-500 font-bold mx-1'>*</span></label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your message"
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:focus:ring-purple-500">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
