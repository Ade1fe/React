import React from 'react';
import { FaCode, FaPenAlt, FaViadeo, FaCamera, FaPencilAlt } from 'react-icons/fa';

const ServiceContainerOne = () => {
  const ServiceElement = ({ icon, name }) => {
    const IconComponent = icon;
    return (
      <div className="my-[64px] flex gap-3 px-1">
        <div className='text-purple-500'>
          <IconComponent size={30}/>
        </div>
        <h2 className='uppercase'>{name}</h2>
      </div>
    );
  };

  return (
  <div className="w-[80%] md:w-full mx-auto" style={{  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
      <div className=' border-2 mx-auto w-fit px-1 md:px-3  border-white'>
      <ServiceElement icon={FaCode} name="Web Development" />
      <ServiceElement icon={FaPenAlt} name="Branding" />
      <ServiceElement icon={FaViadeo} name="Web Design" />
      <ServiceElement icon={FaCamera} name="Video" />
      <ServiceElement icon={FaPencilAlt} name="Content Creation" />
    </div>
  </div>
  );
};

export default ServiceContainerOne;
