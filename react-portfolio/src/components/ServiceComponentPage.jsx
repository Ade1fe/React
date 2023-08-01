import React from 'react'
import ServiceContainerOne from './ServiceContainerOne'
import ServiceInfoComponent from './ServiceInfoComponent'

const ServiceComponentPage = () => {
  return (
    <div className='block md:flex gap-7 px-7 mt-3'  >
        <div className="w-[80%] mx-auto md:w-[30%]">
        <ServiceContainerOne />
        </div>
        <div className="w-full md:w-[65%]">
        <ServiceInfoComponent />
        </div>
      
    </div>
  )
}

export default ServiceComponentPage
