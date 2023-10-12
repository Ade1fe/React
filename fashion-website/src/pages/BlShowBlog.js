


import React from 'react';
import BlShowComOne from '../components/BlShowComOne';
import { useLocation } from 'react-router-dom';
import { FaMale , FaComment ,FaCalendar } from "react-icons/fa";
import MainLayout from './../Layouts/MainLayout';
import Notification from '../components/Notification';

const BlShowBlog = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const img = queryParams.get('img');
  const h2 = queryParams.get('h2');
  // const p = queryParams.get('p');
  const span1 = queryParams.get('span1');
  const span2 = queryParams.get('span2');
  const span3 = queryParams.get('span3');
  const img2 = queryParams.get('img');
  // const spanc1 = queryParams.get('spanc1');
  // const spanc2 = queryParams.get('spanc2');
  // const spanc3 = queryParams.get('spanc3');


  return (
    <MainLayout className=' '>
      <div className='text-center bg-gray-100 text-black flex flex-col px-5 md:px-9 py-5 md:py-14'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl  uppercase my-5'>{decodeURIComponent(h2)}</h2>
    
        <h2 className='flex flex-wrap border-t-2 border-b-2 w-fit mx-auto mb-6 md:mb-9 p-3 md:p-5 gap-6 md:gap-11 justify-center items-center my-5'>
        <span className='flex items-center gap-1 border-r-2 pr-3'> <FaMale size={20} className='text-cyan-500' />  {decodeURIComponent(span1)} </span>
        <span className='flex items-center gap-1  border-r-2 pr-3'> <FaCalendar size={20} className='text-cyan-500'  /> {decodeURIComponent(span2)}</span> 
        <span className='flex items-center gap-1'> <FaComment size={20} className='text-cyan-500'  /> {decodeURIComponent(span3)}</span>
       </h2>
       <div className='w-full h-[550px] md:h-[550px]'> <img className='w-full h-full object-cover' src={decodeURIComponent(img) || decodeURIComponent(img2)} alt="" /></div>
      </div>

     
      <BlShowComOne />
      <Notification />
    </MainLayout>
  );
};

export default BlShowBlog;

