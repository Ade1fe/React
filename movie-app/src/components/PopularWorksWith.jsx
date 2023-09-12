

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../css/PopularWorksWith.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import PopularCard from './PopularCard';
import pic1 from "../assets/net-removebg-preview.png"
import pic2 from "../assets/you-removebg-preview.png"
import pic3 from "../assets/web-removebg-preview.png"
import pic4 from "../assets/hbo-removebg-preview.png"
import pic5 from "../assets/prime-removebg-preview.png"

export default function PopularWorksWith() {
    

    const BreakPoints = {
        // Define breakpoints and their respective settings here
        0: {
            slidesPerView: 1, 
            spaceBetween: 10, 
          },
        320: {
          slidesPerView: 2, 
          spaceBetween: 10,
        },
        345: {
            slidesPerView: 2.05, 
            spaceBetween: 10, 
          },
          375: {
            slidesPerView: 2.25, 
            spaceBetween: 10, 
          },
          400: {
            slidesPerView: 2.55, 
            spaceBetween: 10, 
          },
          440: {
            slidesPerView: 2.75, 
            spaceBetween: 10, 
          },
          480: {
            slidesPerView: 2.95, 
            spaceBetween: 10, 
          },
          520: {
            slidesPerView: 3, 
            spaceBetween: 10, 
          },
          550: {
            slidesPerView: 3.09, 
            spaceBetween: 10, 
          },
          590: {
            slidesPerView: 3.25, 
            spaceBetween: 10, 
          },
        600: {
          slidesPerView: 3.35, 
          spaceBetween: 20, 
        },
        650: {
            slidesPerView: 3.55, 
            spaceBetween: 20, 
          },
          700: {
            slidesPerView: 3.80, 
            spaceBetween: 20, 
          },
        768: {
          slidesPerView: 4, 
          spaceBetween: 10, 
        },
        800: {
            slidesPerView: 4.15, 
            spaceBetween: 10, 
          },
          850: {
            slidesPerView: 4.35, 
            spaceBetween: 10, 
          },
          900: {
            slidesPerView: 4.65, 
            spaceBetween: 10, 
          },
          980: {
            slidesPerView: 4.75, 
            spaceBetween: 10, 
          },
          1000: {
            slidesPerView: 5, 
            spaceBetween: 10, 
          },
          
        // Add more breakpoints as needed
      };



  return (
    <>
      <Swiper

autoplay={{
    delay: 3000, 
    disableOnInteraction: false,
  }}
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={BreakPoints}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><PopularCard img={pic1} /></SwiperSlide>
        <SwiperSlide><PopularCard img={pic2} /></SwiperSlide>
        <SwiperSlide><PopularCard img={pic3} /></SwiperSlide>
        <SwiperSlide><PopularCard img={pic4} /></SwiperSlide>
        <SwiperSlide><PopularCard img={pic5} /></SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
