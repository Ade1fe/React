import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Trending.css';
import RecommendCard from './RecommendCard';


const Recommendations = ({ cast }) => {
  const [recommendations, setRecommendations] = useState([]);
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    if (cast.length > 0) {
      // Use your logic to construct the API request URL for recommendations
      const recommendationsApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${cast.join(',')}`;
  
      const fetchRecommendations = async () => {
        try {
          const response = await fetch(recommendationsApiUrl);
          if (response.ok) {
            const data = await response.json();
            setRecommendations(data.results);
          } else {
            throw new Error('Failed to fetch recommendations');
          }
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };
  
      fetchRecommendations();
    }
  }, [cast, apiKey]);

  
const BreakPoints = {
  0: {
    slidesPerView: 1.30, 
    spaceBetween: 10, 
  },
320: {
  slidesPerView: 1.03, 
  spaceBetween: 0,
},
345: {
    slidesPerView: 1.10, 
    spaceBetween: 10, 
  },
  375: {
    slidesPerView: 1.15, 
    spaceBetween: 10, 
  },
  400: {
    slidesPerView: 1.20, 
    spaceBetween: 10, 
  },
  440: {
    slidesPerView: 1.35, 
    spaceBetween: 10, 
  },
  480: {
    slidesPerView: 1.45, 
    spaceBetween: 10, 
  },
  520: {
    slidesPerView: 1.55, 
    spaceBetween: 10, 
  },
  550: {
    slidesPerView: 1.65, 
    spaceBetween: 10, 
  },
  590: {
    slidesPerView: 1.75, 
    spaceBetween: 10, 
  },
600: {
  slidesPerView: 1.95, 
  spaceBetween: 20, 
},
650: {
    slidesPerView: 2.05, 
    spaceBetween: 20, 
  },
  700: {
    slidesPerView: 2.10, 
    spaceBetween: 20, 
  },
768: {
  slidesPerView: 2.25, 
  spaceBetween: 10, 
},
800: {
    slidesPerView: 2.30, 
    spaceBetween: 10, 
  },
  850: {
    slidesPerView: 2.40, 
    spaceBetween: 10, 
  },
  900: {
    slidesPerView: 2.50, 
    spaceBetween: 10, 
  },
  980: {
    slidesPerView: 2.65, 
    spaceBetween: 10, 
  },
  1000: {
    slidesPerView: 2.90, 
    spaceBetween: 10, 
  },

// Add more breakpoints as needed
};
  

  return (
    <>
      <h2 className="px-5 text-2xl font-bold my-3">Recommendations:</h2>
      <Swiper
        slidesPerView={3.90}
        spaceBetween={10}
        breakpoints={BreakPoints}
        pagination={{
          clickable: true,
        }}
        className="mySwiper recommendations"
      >
        {recommendations.map((recommendation) => (
          <SwiperSlide key={recommendation.id}>
            <RecommendCard img={recommendation.backdrop_path} name={recommendation.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Recommendations;
