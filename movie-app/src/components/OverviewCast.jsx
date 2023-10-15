import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
import '../css/Trending.css';
import OverCastCard from './OverCastCard';

const OverviewCast = ({ contentType }) => {
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const { id } = location.state || {};
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  const fetchCastData = async (contentId) => {
    if (!contentType) {
      setError('Content type not available');
      return;
    }
    const castApiUrl = `https://api.themoviedb.org/3/${contentType}/${contentId}/credits?api_key=${apiKey}`;
    try {
      const castResponse = await fetch(castApiUrl);
      if (castResponse.ok) {
        const castData = await castResponse.json();
        setCast(castData.cast);
        
      } else {
        throw new Error('Cast data not found');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      console.log(`Fetching cast data for ${contentType} ID ${id}`);
      fetchCastData(id);
    }
    // eslint-disable-next-line
  }, [id, contentType]);

//   fetchCastData(id); // Log the response

const BreakPoints = {
    // Define breakpoints and their respective settings here
    0: {
        slidesPerView: 1.30, 
        spaceBetween: 10, 
      },
    320: {
      slidesPerView: 2.30, 
      spaceBetween: 0,
    },
    345: {
        slidesPerView: 2.45, 
        spaceBetween: 10, 
      },
      375: {
        slidesPerView: 2.75, 
        spaceBetween: 10, 
      },
      400: {
        slidesPerView: 3.0, 
        spaceBetween: 10, 
      },
      440: {
        slidesPerView: 3.35, 
        spaceBetween: 10, 
      },
      480: {
        slidesPerView: 3.65, 
        spaceBetween: 10, 
      },
      520: {
        slidesPerView: 3.95, 
        spaceBetween: 10, 
      },
      550: {
        slidesPerView: 4.05, 
        spaceBetween: 10, 
      },
      590: {
        slidesPerView: 4.25, 
        spaceBetween: 10, 
      },
    600: {
      slidesPerView: 4.55, 
      spaceBetween: 20, 
    },
    650: {
        slidesPerView: 4.75, 
        spaceBetween: 20, 
      },
      700: {
        slidesPerView: 5.0, 
        spaceBetween: 20, 
      },
    768: {
      slidesPerView: 5.45, 
      spaceBetween: 10, 
    },
    800: {
        slidesPerView: 4.95, 
        spaceBetween: 10, 
      },
      850: {
        slidesPerView: 5.45, 
        spaceBetween: 10, 
      },
      900: {
        slidesPerView: 5.95, 
        spaceBetween: 10, 
      },
      980: {
        slidesPerView: 6.35, 
        spaceBetween: 10, 
      },
      1000: {
        slidesPerView: 6.75, 
        spaceBetween: 10, 
      },
      1160: {
        slidesPerView: 6.99, 
        spaceBetween: 10,
      },
      1230: {
        slidesPerView: 7.74, 
        spaceBetween: 10,
      },
      1290: {
        slidesPerView: 8.40, 
        spaceBetween: 10,
      },
    // Add more breakpoints as needed
  };
 


  return (

    <>
   <h2 className='px-5 text-lg md:text-2xl font-bold my-3'>Full Cast & Crew</h2>
    <Swiper
      slidesPerView={8.60}
      spaceBetween={10}
      breakpoints={BreakPoints}
      pagination={{
        clickable: true,
      }}
      className="mySwiper trend"
    >
     {cast.map((actor) => (
        <SwiperSlide key={actor.id}>
     <OverCastCard img={actor.profile_path}  alt={actor.name} name= {actor.name} />
        </SwiperSlide>
      ))}
    </Swiper>
    
  </>
  )
}

export default OverviewCast;
