import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
import { Pagination } from 'swiper/modules';
import '../css/Trending.css';
import CardImg from './CardImg';

export default function UpComing() {
  const [images, setImages] = useState([]);

  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array to fetch data only once

  // Function to fetch movie genres
  async function fetchGenres() {
    const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    try {
      const response = await fetch(genreApiUrl);
      if (!response.ok) {
        throw new Error('Genre data not available');
      }
      const data = await response.json();
      return data.genres;
    } catch (error) {
      console.error('Error fetching genre data:', error);
      return [];
    }
  }

  // Function to fetch data for a specific page
  async function fetchData() { // Added async keyword
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=7`;
// https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1' \
 
    try {
      const response = await fetch(apiUrl); // Used async/await for fetch
      const genres = await fetchGenres();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const fifteenImages = data.results.slice(4, 18).map(movie => ({
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date, // Map release_date from API
        genre_names: movie.genre_ids.map(genreId =>
          genres.find(genre => genre.id === genreId)?.name || 'Unknown'
        ),
        vote_average: movie.vote_average, // Map vote_average from API
      }));

      setImages(fifteenImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const BreakPoints = {
    // Define breakpoints and their respective settings here
    0: {
        slidesPerView: 1, 
        spaceBetween: 10, 
      },
    320: {
      slidesPerView: 1.20, 
      spaceBetween: 10,
    },
    345: {
        slidesPerView: 1.25, 
        spaceBetween: 10, 
      },
      375: {
        slidesPerView: 1.35, 
        spaceBetween: 10, 
      },
      400: {
        slidesPerView: 1.55, 
        spaceBetween: 10, 
      },
      440: {
        slidesPerView: 1.75, 
        spaceBetween: 10, 
      },
      480: {
        slidesPerView: 1.95, 
        spaceBetween: 10, 
      },
      520: {
        slidesPerView: 2, 
        spaceBetween: 10, 
      },
      550: {
        slidesPerView: 2.09, 
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
  

  return (
    <>
   
      <Swiper
        slidesPerView={5.4}
        spaceBetween={10}
        breakpoints={BreakPoints}
        pagination={{
          clickable: true,
        }}
        className="mySwiper trend"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CardImg
              dates={image.release_date} // Pass release_date as dates prop
              genre={image.genre_names.join(', ')} // Join genre_ids as a string and pass as genre prop
              img={image.poster_path}
              rating={image.vote_average} // Pass vote_average as rating prop
              title={image.title}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


