


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import PokeCards from './PokeCards'
import poke1 from "../assests/0a52f687168f459eb636df5589adb54e.jpeg"
import poke2 from "../assests/0a212c85a3b44bcb96428ead7ba5d408.jpeg"
import poke3 from "../assests/0d1baa8ae6ea4076a421d0824bfa5753.jpeg"
import poke4 from "../assests/0d9ae5bbf3ed498aafbaee44327aa0e2.jpeg"
import poke5 from "../assests/0a212c85a3b44bcb96428ead7ba5d408.jpeg"
import poke6 from "../assests/3d75bc3985fe4b4d87bf3a0d3a3ebeb7.jpeg"

export default function Carousel() {
  return (
    <div className='app'>
      <Swiper
        slidesPerView={5}
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
                slidesPerView: 1.30, // Number of slides to show on screens larger than 768px width
              },
              250: {
                slidesPerView: 1.50, // Number of slides to show on screens larger than 768px width
              },
              320: {
                slidesPerView: 1.80, // Number of slides to show on screens larger than 768px width
              },
              340: {
                slidesPerView: 2, // Number of slides to show on screens larger than 768px width
              },
            400: {
                slidesPerView: 2.30, // Number of slides to show on screens larger than 768px width
              },
              450: {
                slidesPerView: 2.50, // Number of slides to show on screens larger than 768px width
              },
              500: {
                slidesPerView: 2.90, // Number of slides to show on screens larger than 768px width
              },
              550: {
                slidesPerView: 3, // Number of slides to show on screens larger than 768px width
              },
            600: {
              slidesPerView: 3.30, // Number of slides to show on screens larger than 768px width
            },
            700: {
                slidesPerView: 3.90, // Number of slides to show on screens larger than 768px width
              },
              800: {
                slidesPerView: 4, // Number of slides to show on screens larger than 768px width
              },
              900: {
                slidesPerView: 4.20, // Number of slides to show on screens larger than 768px width
              },
            1024: {
              slidesPerView: 4.50, // Number of slides to show on screens larger than 1024px width
            },
            1440: {
              slidesPerView: 4.90, // Number of slides to show on screens larger than 1440px width
            },
          }}
      >
        <SwiperSlide>
        <PokeCards img={poke1} />
        </SwiperSlide>

        <SwiperSlide>
        <PokeCards img={poke2} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke3} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke4} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke5} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke6} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke1} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke1} />
        </SwiperSlide>

        <SwiperSlide>
        <PokeCards img={poke2} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke3} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke4} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke5} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke6} />
        </SwiperSlide>


        <SwiperSlide>
        <PokeCards img={poke1} />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
