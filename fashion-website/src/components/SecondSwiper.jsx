
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../css/styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import immp from "../assests/fashion-img20.png"

export default function SecondSwiper() {
  return (
    <div className='px-4 mt-[100px]'>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        breakpoints={{
            // when window width is >= 768px
            0: {
                slidesPerView: 2,
              },
            400: {
                slidesPerView: 3.60,
              },
            768: {
              slidesPerView: 5,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6,
            },
          }}
          autoplay={{
            delay: 1000, 
          }}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


