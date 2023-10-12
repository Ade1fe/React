import React from 'react';
import { FaMapMarker, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="bg-white p-4 text-sm md:text-[15px]">
      <div className="mb-5">
        <h2 className="text-sm md:">Contact & Reach Us</h2>
        <p className='text-2xl font-semibold'>Get In Touch!</p>
   
       
        <p>
          Perferendis illum curabitur sapiente voluptates rerum occaecat dui aute magni commodi
          libero magni, suscipit. Incidunt fringilla libero magni, suscipit.
        </p>
      </div>

      <div className="mb-6 shadow-sm rounded-md p-3">
        <h3 className="text-lg md:text-xl font-semibold">Location Details</h3>
        <p>
          <FaMapMarker className="inline-block mr-2" />
          04 Bode Street, 32 Adebowale, Nigeria
        </p>
      </div>

      <div className="mb-6 shadow-sm rounded-md p-3">
        <h3 className="text-lg md:text-xl font-semibold">Email Address</h3>
        <p>
          <FaEnvelope className="inline-block mr-2" />
          addypearl09@mail.com, deifesyntax@email.com
        </p>
      </div>

      <div className="mb-6 shadow-sm rounded-md p-3">
        <h3 className="text-lg md:text-xl font-semibold">Phone Number</h3>
        <p>
          <FaPhoneAlt className="inline-block mr-2" />
          (+234) 90-3825-7434 / (+234) 90-438-6013
        </p>
      </div>
    </div>
  );
};

export default ContactAddress;
