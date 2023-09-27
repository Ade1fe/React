import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
import '../css/Trending.css';
import CardImg from './CardImg';
import { useNavigate } from 'react-router-dom';

const FetchMoviesById = ({ genreId, getPage }) => {
  const [images, setImages] = useState([]);
  const navigate  = useNavigate();
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  async function fetchGenres() {
    const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

    try {
      const response = await fetch(genreApiUrl);
      if (!response.ok) {
        throw new Error('Genre data not available');
      }
      const data = await response.json();

      if (!Array.isArray(data.genres)) {
        throw new Error('Genres data is not an array');
      }

      return data.genres; // Return the array of genre objects
    } catch (error) {
      console.error('Error fetching genre data:', error);
      return [];
    }
  }

  async function fetchData() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${getPage}&with_genres=${genreId}`;

    try {
      const response = await fetch(apiUrl);
      const genres = await fetchGenres();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (!data.results) {
        throw new Error('Results data not available');
      }

      const fifteenImages = data.results.slice(4, 18).map(movie => ({
        id: movie.id, // Add this line to include the id
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        genre_names: movie.genre_ids.map(genreId =>
          genres.find(genre => genre.id === genreId)?.name || 'Unknown'
        ),
        vote_average: movie.vote_average,
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
           genre={image.genre_names.join(', ')} 
           img={image.poster_path}
           rating={image.vote_average} 
           title={image.title}
           key={index}
           movieId={image.id}
           onClick={() => handleMovieCardClick({
             id: image.id,     
             title: image.title,
             img: image.poster_path
           })} 
         />
       </SwiperSlide>
       
        ))}
      </Swiper>
    </>
  );
}

export default FetchMoviesById;
