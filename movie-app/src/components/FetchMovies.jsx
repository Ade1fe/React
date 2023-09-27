import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
import '../css/Trending.css';
import CardImg from './CardImg'; 
import { useNavigate } from 'react-router-dom';

const FetchMovies = () => {
  const [images, setImages] = useState([]);
  const [movieGenres, setMovieGenres] = useState({});
  const navigate  = useNavigate();


  const totalPages = 6;
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    fetchMovieData();
  }, []);

  


  async function fetchGenres() {
    const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    try {
      const response = await fetch(genreApiUrl);
      if (!response.ok) {
        throw new Error('Genre data not available');
      }
      const data = await response.json();
  
      // Create a genre map with genre IDs as keys and genre names as values
      const genreMap = {};
      data.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
      });
  
      return genreMap;
    } catch (error) {
      console.error('Error fetching genre data:', error);
      return {};
    }
  }
  
  

  async function fetchMovieData() {
    try {
      const movieData = [];
      const genres = await fetchGenres();
  
      for (let page = 2; page <= totalPages; page++) {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        
        // Map genre IDs to genre names for each movie
        data.results.forEach((movie) => {
          movie.genre_names = movie.genre_ids.map((genreId) =>
            genres[genreId] || 'Unknown'
          );
        });
  
        movieData.push(...data.results);
      }
  
      setImages(movieData);
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

  const handleMovieCardClick = (movieItem) => {
    // Check if the required data is available
    if (movieItem.id && movieItem.title && movieItem.img) {
      const { id, title, img } = movieItem;
      // Use the navigate function to navigate to the overview page
      console.log("movie click")

      console.log(movieItem);
      navigate(`/overview/${id}`, { state: { title, img,id } });
    } else {
      console.error('Required data is missing in movieItem:', movieItem);
    }
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
              dates={image.release_date}
              img={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
              rating={image.vote_average}
              title={image.title}
              genre={image.genre_names.join(', ')}
              movieId={image.id}
              onClick={handleMovieCardClick} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FetchMovies;
