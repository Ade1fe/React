


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import pk1 from "../assests/89795c43eb014eb583b0bd530f37d0d3.jpeg"
import pk2 from "../assests/95c58d2726d54932af653da430c0d332.jpeg"
import pk3 from "../assests/7459d101a64f4424908fd79d1dcd3d58.jpeg"
import pk4 from "../assests/f7f9b5bd23d145768ddaa35712e7c582.jpeg"
import pk5 from "../assests/ddfb8543745042e68144b1ba2fd00f10.jpeg"
import pk6 from "../assests/a8ab213355ee450da07be7caa7abd11f.jpeg"
import TabLinkImgCards from './TabLinkImgCards';

export default function CarouselC() {
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
