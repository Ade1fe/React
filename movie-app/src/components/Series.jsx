import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../css/Series.css';
// eslint-disable-next-line
import { Grid, Pagination } from 'swiper/modules';
import CardImg from './CardImg';
import { useNavigate } from 'react-router-dom';

export default function Series() {
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';
  const totalPages = 5; // Change this to the number of pages you want to retrieve

  const [seriesData, setSeriesData] = useState([]);
  const [genres, setGenres] = useState([]);
  // eslint-disable-next-line
  const [images, setImages] = useState([]);
  const navigate  = useNavigate();

  useEffect(() => {
    async function fetchGenres() {
      const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      try {
        const response = await fetch(genreApiUrl);
        if (!response.ok) {
          throw new Error('Genre data not available');
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genre data:', error);
      }
    }

    async function fetchAllSeries() {
      const allSeriesData = [];
      for (let page = 1; page <= totalPages; page++) {
        try {
          const data = await fetchSeriesData(page);
          allSeriesData.push(...data.results);
          console.log(allSeriesData);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
      setSeriesData(allSeriesData);
    }

    async function fetchSeriesData(pageNumber) {
      const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${pageNumber}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }

    fetchGenres();
    fetchAllSeries();
  }, []);

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
  
    const BreakPoints = {
      // Define breakpoints and their respective settings here
      0: {
          slidesPerView: 1, 
          spaceBetween: 10, 
          fill: 'row',
        },
      320: {
        slidesPerView: 1.45, 
        spaceBetween: 10,
        fill: 'row',
      },
      338: {
          slidesPerView: 1.61, 
          spaceBetween: 10, 
          fill: 'row',
        },
        375: {
          slidesPerView: 1.70, 
          spaceBetween: 10, 
          fill: 'row',
        },
        400: {
          slidesPerView: 1.95, 
          spaceBetween: 10, 
          fill: 'row',
        },
        440: {
          slidesPerView: 2.0, 
          spaceBetween: 10, 
          fill: 'row',
        },
        480: {
          slidesPerView: 2.25, 
          spaceBetween: 10, 
          fill: 'row',
        },
        520: {
          slidesPerView: 2.40, 
          spaceBetween: 10, 
          fill: 'row',
        },
        550: {
          slidesPerView: 2.52, 
          spaceBetween: 10, 
          fill: 'row',
        },
        590: {
          slidesPerView: 2.72, 
          spaceBetween: 10, 
          fill: 'row',
        },
      600: {
        slidesPerView: 2.80, 
        spaceBetween: 20, 
        fill: 'row',
      },
      650: {
          slidesPerView: 2.95, 
          spaceBetween: 20, 
          fill: 'row',
        },
        700: {
          slidesPerView: 3.05, 
          spaceBetween: 20, 
          fill: 'row',
        },
        738: {
          slidesPerView: 3.15, 
          spaceBetween: 10, 
          fill: 'row',
        },
      768: {
        slidesPerView: 3.35, 
        spaceBetween: 10, 
        fill: 'row',
      },
      800: {
          slidesPerView: 3.55, 
          spaceBetween: 10, 
          fill: 'row',
        },
        850: {
          slidesPerView: 3.85, 
          spaceBetween: 10, 
          fill: 'row',
        },
        900: {
          slidesPerView: 4.05, 
          spaceBetween: 10, 
          fill: 'row',
        },
        950: {
          slidesPerView: 4.35, 
          spaceBetween: 10, 
          fill: 'row',
        },
        980: {
          slidesPerView: 4.75, 
          spaceBetween: 10, 
          fill: 'row',
        },
        1000: {
          slidesPerView: 4.80, 
          spaceBetween: 10, 
          fill: 'row',
        },
        1160: {
          slidesPerView: 4.85, 
          spaceBetween: 10,
          fill: 'row',
        },
        1230: {
          slidesPerView: 4.95, 
          spaceBetween: 10,
          fill: 'row',
        },
        1290: {
          slidesPerView: 5.20, 
          spaceBetween: 10,
          fill: 'row',
        },
      // Add more breakpoints as needed
    };
   

  // Render the Swiper component only when seriesData is available
  return (
    <>
      {seriesData.length > 0 && (
        <Swiper
        slidesPerView={5.34}
          grid={{
            rows: 3,
            fill: 'row',
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={BreakPoints}
          modules={[Grid,]}
          className="mySwiper trend"
        >
          {seriesData.map((series, index) => (
            <SwiperSlide key={index}>
              <CardImg
                dates={series.first_air_date}
                genre={getGenreNames(series.genre_ids)}
                img={series.poster_path}
                rating={series.vote_average}
                title={series.name} 
                movieId={series.id}
                key={index}
                onClick={handleMovieCardClick} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );

  function getGenreNames(genreIds) {
    const genreNames = genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : '';
    });
    return genreNames.join(', ');
  }
}
