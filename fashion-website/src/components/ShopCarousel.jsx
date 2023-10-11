import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../css/style.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import ImgCard from './ImgCard'
import bag from "../assests/bag.jpg"
import dress from "../assests/blackdress.jpg"
import bow from "../assests/bow.jpg"

export default function ShopCarousel() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (
    
    <>
      <Swiper
        slidesPerView={3}
        grid={{
            rows: 2,
            fill: "row"
          }}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={pagination}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
        <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
         <SwiperSlide><ImgCard img={bag} h1="Sleeveless tops" price="$80.50" /></SwiperSlide>
      </Swiper>
    </>
  );
}

//ShopCarousel