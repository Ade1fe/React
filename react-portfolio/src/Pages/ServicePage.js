// about.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServiceComponentPage from '../components/ServiceComponentPage';
import ServiceFinalPage from '../components/ServiceFinalPage';


const ServicePage = () => {
  return (
    <MainLayout>

    <ServiceComponentPage />
     <ServiceFinalPage />

   </MainLayout>
  );
};

export default ServicePage;