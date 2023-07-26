import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

const AboutPage = () => {
  const images = [
    require('../assets/photo_5884139100448079557_y.jpg'),
    require('../assets/photo_5884139100448079555_y.jpg'),
    require('../assets/photo_5884139100448079558_y.jpg'),
  ];

  return (
    <MainLayout>
      <div>
        <div className="first block rounded-[20px] one sm:flex gap-5 justify-between items-center py-7 w-auto px-5">
          <div className='bg-gray-200 py-10 w-1/3 rounded-[20px]' style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
            <div className="w-[300px] h-[full] mx-auto rounded-[20px] overflow-hidden">
              <Carousel images={images} />
            </div>
          </div>
          <div className='w-2/3'>
            <div>
              <h2 className='text-xl sm:text-3xl text-center px-2 py-2 my-2 mx-auto'>SELF-SUMMARY</h2>
            </div>
            <div className="bg-gray-200 px-2 py-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
              <Header first="David Henderson" headerClassName="font-bold text-xl sm:text-2xl mb-2"
              pClassame="text-xl sm:text-2xl mb-2" second="I am a San Francisco-based product designer with a focus on web design, illustration, and visual development. I have a diverse range of experience having worked across various fields and industries." />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
