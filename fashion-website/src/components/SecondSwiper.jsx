
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
import immp1 from "../assests/fashion-img16.png"
import immp2 from "../assests/fashion-img17.png"
import immp3 from "../assests/fashion-img18.png"
import immp4 from "../assests/fashion-img19.png"
import immp5 from "../assests/fashion-img20.png"
import immp6 from "../assests/fashion-img21.png"
// import immp7 from "../assests/fashion-img20.png"

export default function SecondSwiper({classnamee}) {
  return (
    <div className={classnamee}>
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
            <img src={immp1} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp2} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp3} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp4} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp5} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp6} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp1} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp2} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp3} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp4} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp5} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="w-[150px]">
            <img src={immp6} className='w-full h-full object-cover' alt="" />
            </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}


