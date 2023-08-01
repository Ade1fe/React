import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt ,FaMap } from 'react-icons/fa';
import Icon from './Icon';


const ContactItem = ({ contact, email1, email2, icon }) => {
  // Create a mapping of contact types to corresponding icons
  const iconMap = {
    mail: AiFillMail,
    phone: FaPhoneAlt,
    home: FaMap,
    twitter: FaTwitter,
    instagram: FaInstagram,
    github: FaGithub,
    linkedin: FaLinkedin,
  };

  // Determine the appropriate icon based on the 'icon' prop
  const IconComponent = iconMap[icon] || AiFillMail; // Use AiFillMail as a default icon if 'icon' is not recognized

 
  // const radiusStyle = icon === "twitter" || icon === "instagram" || icon === "github" || icon === "linkedin" ? { borderRadius: "50%" } : {}; // Add 50% radius for the "twitter" icon
  

  return (
    <div className="my-5 w-[90%] md:w-full mx-auto flex items-center gap-5 px-5 py-4"  style={{
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      }}
      >
      <div
        className=" p-3 rounded-md"
        style={{
          boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
          // ...radiusStyle, 
        }}
      >
        <IconComponent size={30} />
      </div>
      <div className="">
        <h2>{contact}</h2>
        <h4>{email1}</h4>
        <h2>{email2}</h2>
      </div>
    </div>
  );
};

const ContactIner = () => {
  return (
    <div>
      <h2 className='uppercase font-bold my-2 px-3 text-xl w-[90%] md:w-full mx-auto'>Contact Info</h2>
      <ContactItem contact="Mail Us" email1="addypearlp00" email2="joasgcdsgyhuag" icon="mail" />
      <ContactItem contact="Contact Us" email1="addyp080earlp00" email2="joasgcdsgyhuag" icon="phone" />
      <ContactItem contact="Location" email1="04 Bode Edun" email2="Lagos" icon="home" />
      <div className="mt-[40px]">
        <h3 className= 'uppercase font-bold my-2 px-3 text-xl w-[90%] md:w-full mx-auto'>Social Links</h3>
        <div className="mb-5 md:mb-1">
      <Icon />
      </div>
      </div>
      
    </div>
  );
};

export default ContactIner;
