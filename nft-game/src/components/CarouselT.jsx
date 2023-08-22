


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import pk1 from "../assests/0daa563e20dc4713adc772ecd108b0a5.jpeg"
import pk2 from "../assests/1e1d16246ce947d6be789e67530d0a8e.jpeg"
import pk3 from "../assests/3ca9efa34eb3416881178b1eee7f71ee.jpeg"
import pk4 from "../assests/3d75bc3985fe4b4d87bf3a0d3a3ebeb7.jpeg"
import pk5 from "../assests/4c98fb19582a4588a5ba6f206339ae96.jpeg"
import pk6 from "../assests/5e965880909946dc9135be39b4919e0a.jpeg"
import TabLinkImgCards from './TabLinkImgCards';

export default function CarouselT() {
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
