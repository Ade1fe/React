


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import pk1 from "../assests/73d256cc18d8493983509424528c4a05.jpeg"
import pk2 from "../assests/5026c6a3d7034376adca5b9afe1b8738.jpeg"
import pk3 from "../assests/b578be059f6049f5b6b5f77d9682862d.jpeg"
import pk4 from "../assests/9b019137eae54deab98450413e620031.jpeg"
import pk5 from "../assests/e44b69d6908041519091d97dabae8394.jpeg"
import pk6 from "../assests/ff74e5eea617437f9b269a1adc83a8fa.jpeg"
import TabLinkImgCards from './TabLinkImgCards';

export default function CarouselE() {
  return (
    <div className='app'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}        // Add loop option
  autoplay={{        // Fix the syntax of autoplay option
    delay: 1000      // Set the delay in milliseconds
  }}
        
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerView: 1.0, // Number of slides to show on screens larger than 768px width
              },
              250: {
                slidesPerView: 1.0, // Number of slides to show on screens larger than 768px width
              },
              320: {
                slidesPerView: 1.30, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              340: {
                slidesPerView: 1.40, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              380: {
                slidesPerView: 1.50, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
            400: {
                slidesPerView: 1.60, // Number of slides to show on screens larger than 768px width
                spaceBetween:10
              },
              450: {
                slidesPerView: 1.80, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              500: {
                slidesPerView: 2.0, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              550: {
                slidesPerView: 2.20,
                spaceBetween:10  // Number of slides to show on screens larger than 768px width
              },
            600: {
              slidesPerView: 2.40, 
              spaceBetween:10 // Number of slides to show on screens larger than 768px width
            },
            700: {
                slidesPerView: 2.60, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              750: {
                slidesPerView: 2.70,
                spaceBetween:10  // Number of slides to show on screens larger than 768px width
              },
              800: {
                slidesPerView: 3, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              850: {
                slidesPerView: 3, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              900: {
                slidesPerView: 3.10, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              950: {
                slidesPerView: 3.10, 
                spaceBetween:10 // Number of slides to show on screens larger than 768px width
              },
              1000: {
                slidesPerView: 3.50,
                spaceBetween:10  // Number of slides to show on screens larger than 768px width
              },
              1100: {
                slidesPerView: 4.0,
                spaceBetween:10  // Number of slides to show on screens larger than 768px width
              },
            
             
          }}
      >
       

        <SwiperSlide>
        <TabLinkImgCards img={pk1}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>

        <SwiperSlide>
        <TabLinkImgCards img={pk2}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>

        <SwiperSlide>
        <TabLinkImgCards img={pk3}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>

        <SwiperSlide>
        <TabLinkImgCards img={pk4}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>


        <SwiperSlide>
        <TabLinkImgCards img={pk6}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>


        <SwiperSlide>
        <TabLinkImgCards img={pk5}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>


        <SwiperSlide>
        <TabLinkImgCards img={pk4}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>


        <SwiperSlide>
        <TabLinkImgCards img={pk2}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>


        <SwiperSlide>
        <TabLinkImgCards img={pk3}
      name="MANDER #12" price="3.5ETH" dolar="$3.5" />
        </SwiperSlide>



       


        
      </Swiper>
    </div>
  );
}
