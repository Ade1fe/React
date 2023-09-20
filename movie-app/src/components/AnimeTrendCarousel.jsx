import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/Trending.css"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import AnimeTrendCard from './AnimeTrendCard';


export default function AnimeTrendCarousel() {


    const [animeList, setAnimeList] = useState([]);

    const BreakPoints = {
        // Define breakpoints and their respective settings here
        0: {
            slidesPerView: 1, 
            spaceBetween: 10, 
          },
        320: {
          slidesPerView: 1.70, 
          spaceBetween: 10,
        },
        345: {
            slidesPerView: 1.75, 
            spaceBetween: 10, 
          },
          375: {
            slidesPerView: 1.85, 
            spaceBetween: 10, 
          },
          400: {
            slidesPerView: 2.25, 
            spaceBetween: 10, 
          },
          440: {
            slidesPerView: 2.55, 
            spaceBetween: 10, 
          },
          480: {
            slidesPerView: 2.75, 
            spaceBetween: 10, 
          },
          520: {
            slidesPerView: 3.05, 
            spaceBetween: 10, 
          },
          550: {
            slidesPerView: 3.59, 
            spaceBetween: 10, 
          },
          590: {
            slidesPerView: 2.25, 
            spaceBetween: 10, 
          },
        600: {
          slidesPerView: 2.35, 
          spaceBetween: 20, 
        },
        650: {
            slidesPerView: 2.55, 
            spaceBetween: 20, 
          },
          700: {
            slidesPerView: 2.80, 
            spaceBetween: 20, 
          },
        768: {
          slidesPerView: 3, 
          spaceBetween: 10, 
        },
        800: {
            slidesPerView: 3.15, 
            spaceBetween: 10, 
          },
          850: {
            slidesPerView: 3.35, 
            spaceBetween: 10, 
          },
          900: {
            slidesPerView: 3.65, 
            spaceBetween: 10, 
          },
          980: {
            slidesPerView: 3.75, 
            spaceBetween: 10, 
          },
          1000: {
            slidesPerView: 4, 
            spaceBetween: 10, 
          },
          1160: {
            slidesPerView: 4.34, 
            spaceBetween: 10,
          },
          1230: {
            slidesPerView: 4.64, 
            spaceBetween: 10,
          },
          1290: {
            slidesPerView: 5, 
            spaceBetween: 10,
          },
        // Add more breakpoints as needed
      };

    useEffect(() => {
        // Fetch anime data from the Jikan API
        fetch('https://api.jikan.moe/v4/top/anime?limit=24&type=movie')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Log the entire API response to understand its structure
            console.log('API Response:', data);
      
            // Extract the list of anime from the response
            const animeData = data.data || [];
            console.log('Anime Data:', animeData);
      
            // Update the state with the extracted anime data
            setAnimeList(animeData);
          })
          .catch((error) => {
            console.error('Error fetching anime data:', error);
          });
      }, []);


  return (
    <>
      <Swiper
        slidesPerView={6}
        breakpoints={BreakPoints}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={true} 
      >
         {animeList.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <AnimeTrendCard
                img={anime.images.webp.large_image_url}
                // title={anime.title}
                title={anime.title.substring(0, 20) + '...'}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}


