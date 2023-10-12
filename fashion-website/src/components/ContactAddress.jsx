import React from 'react';
import { FaMapMarker, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="bg-white p-4 text-sm md:text-[15px]">
      <div className="mb-5">
        <h2 className="text-lg md:">Contact & Reach Us</h2>
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
          1810 King Street, 5th Avenue, New York
        </p>
      </div>

      <div className="mb-6 shadow-sm rounded-md p-3">
        <h3 className="text-lg md:text-xl font-semibold">Email Address</h3>
        <p>
          <FaEnvelope className="inline-block mr-2" />
          youremail@mail.com, company@email.com
        </p>
      </div>

      <div className="mb-6 shadow-sm rounded-md p-3">
        <h3 className="text-lg md:text-xl font-semibold">Phone Number</h3>
        <p>
          <FaPhoneAlt className="inline-block mr-2" />
          (+977) 1234-567 / (+977) 123-567-87
        </p>
      </div>
    </div>
  );
};

export default ContactAddress;
