import React, { useState } from 'react';
// eslint-disable-next-line
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or display a thank you message).
    console.log(formData);
  };

  return (
    <div className=" py-8 px-2  mx-auto ">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <div className="block sm:flex gap-3 w-full">
      <div className="mb-4 flex-1">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4 flex-1">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            required
          />
        </div>
      </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <h2 className='text-2xl font-semibold mt-16 md:text-2xl mb-2'>Social Links</h2>
      <div className="flex flex-wrap gap-4 mt-1">
        {/* <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
            <FaFacebook size={20} />
        </div> */}
        <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
           <a href="https://twitter.com/deife_syntax"><FaTwitter size={20} /></a>
            
        </div>
        <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
           <a href="https://www.instagram.com/deife_syntax/"><FaInstagram size={20} /></a> 
        </div>
        <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
          <a href="https://github.com/Ade1fe"><FaGithub size={20} /></a>  
        </div>
        <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
            <a href="https://www.linkedin.com/in/damilola-adeife-oluwadamisi-699325235/?trk=contact-info"><FaLinkedin size={20} /></a>
        </div>
        <div className="bg-transparent border-2 border-orange-500 text-orange-500 p-1 rounded-[50%] hover:text-black cursor-pointer">
           <a href="https://linktr.ee/deife_syntax"><FaGlobe size={20} /></a> 
        </div>

      </div>
    </div>
  );
}

export default ContactForm;
