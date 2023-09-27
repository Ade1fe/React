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
  

  return (
    <>
      <h2 className="px-5 text-2xl font-bold my-3">Recommendations:</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
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
