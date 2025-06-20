import React, { useState ,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/AmineCarousel.css';
import { Navigation } from 'swiper/modules';
import AnimeCarouselCard from './AnimeCarouselCard';

export default function AnimeCarousel() {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        // Fetch anime data from the Jikan API
        fetch('https://api.jikan.moe/v4/top/anime?limit=4&type=movie')
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
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {animeList.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <AnimeCarouselCard
                img={anime.images.webp.large_image_url}
                //  img={anime.images.jpg.image_url}
                contentType={anime.type}
                description={anime.synopsis}
                duration={anime.duration}
                episode={anime.episodes ? anime.episodes : ''}
                title={anime.title}
                year={anime.aired.from}
                id={anime.mal_id}
                rating={anime.rating}
                status={anime.status}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }



