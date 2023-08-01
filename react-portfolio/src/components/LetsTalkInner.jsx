import React from 'react';


const LetsTalkInner = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="w-full md:w-[90%]  mx-auto bg-white p-8  rounded-lg" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Let's <span className='text-purple-500'>Talk</span></h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-200">Send Message</button>
        </form>
      </div>

     
    </div>
  );
};

export default LetsTalkInner;
