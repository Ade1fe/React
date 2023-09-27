import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
// import { Pagination } from 'swiper/modules';
import '../css/Trending.css';
import MovieCategories from './MovieCategories';

const MovieTabs = ({ activeTab, setActiveTab }) => {


    const BreakPoints = {
        // Define breakpoints and their respective settings here
        0: {
            slidesPerView: 1, 
            spaceBetween: 10, 
          },
        320: {
          slidesPerView: 2.40, 
          spaceBetween: 3,
        },
        345: {
            slidesPerView: 2.90, 
            spaceBetween: 10, 
          },
          375: {
            slidesPerView: 3.10, 
            spaceBetween: 10, 
          },
          400: {
            slidesPerView: 3.55, 
            spaceBetween: 10, 
          },
          440: {
            slidesPerView: 3.75, 
            spaceBetween: 10, 
          },
          480: {
            slidesPerView: 3.95, 
            spaceBetween: 10, 
          },
          520: {
            slidesPerView: 4, 
            spaceBetween: 10, 
          },
          550: {
            slidesPerView: 4.09, 
            spaceBetween: 10, 
          },
          590: {
            slidesPerView: 4.25, 
            spaceBetween: 10, 
          },
        600: {
          slidesPerView: 4.35, 
          spaceBetween: 20, 
        },
        650: {
            slidesPerView: 4.55, 
            spaceBetween: 20, 
          },
          700: {
            slidesPerView: 4.80, 
            spaceBetween: 20, 
          },
        768: {
          slidesPerView: 5, 
          spaceBetween: 10, 
        },
        800: {
            slidesPerView: 5.15, 
            spaceBetween: 10, 
          },
          850: {
            slidesPerView: 5.35, 
            spaceBetween: 10, 
          },
          900: {
            slidesPerView: 5.65, 
            spaceBetween: 10, 
          },
          980: {
            slidesPerView: 5.75, 
            spaceBetween: 10, 
          },
          1000: {
            slidesPerView: 6, 
            spaceBetween: 10, 
          },
          1160: {
            slidesPerView: 6.34, 
            spaceBetween: 10,
          },
          1230: {
            slidesPerView: 6.64, 
            spaceBetween: 10,
          },
          1290: {
            slidesPerView: 7, 
            spaceBetween: 10,
          },
        // Add more breakpoints as needed
      };
  
      

  
      return (
        <>
          <Swiper
            slidesPerView={7}
            spaceBetween={10}
            breakpoints={BreakPoints}
            pagination={{
              clickable: true,
            }}
            className="mySwiper trend"
          >
            {MovieCategories.map(category => (
              <SwiperSlide key={category.id}>
                <button
                  className={`px-4 py-2 mb-3 mt-2 whitespace-nowrap  focus:outline-none ${activeTab === category.id ? 'bg-red-500 text-white rounded-md ' : 'bg-[#222] text-white rounded-md '}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
    }

export default MovieTabs;
