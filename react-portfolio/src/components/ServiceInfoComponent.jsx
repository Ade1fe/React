import React from 'react';

const ServiceInfoComponent = () => {
  const ServiceInfoElement = ({ title, desc }) => {
    return (
      <div className=" p-4" style={{  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2">{desc}</p>
      </div>
    );
  };

  return (
    <div className='grid mt-5 md:mt-0 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <ServiceInfoElement title="Web Development" desc="Sit amet luctussd fav venenatis, 
        lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim 
        aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim." />

      <ServiceInfoElement title="Branding" desc="Sit amet luctussd fav venenatis, 
        lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim 
        aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim." />

      <ServiceInfoElement title="Web Design" desc="Sit amet luctussd fav venenatis, 
        lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim 
        aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim." />

      <ServiceInfoElement title="Video" desc="Sit amet luctussd fav venenatis, 
        lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim 
        aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim." />

      <ServiceInfoElement title="Content Creation" desc="Sit amet luctussd fav venenatis, 
        lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim 
        aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim." />
    </div>
  );
};

export default ServiceInfoComponent;
