import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CarouselOne.css';
// eslint-disable-next-line
import { Pagination } from 'swiper/modules';
import mainImage from '../assets/alley-g97f0dd69a_1280.jpg';
import Navbar from './Navbar';
import { FaStar, FaStarHalf } from 'react-icons/fa';



export default function CarouselOne({ h1, text }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Keep track of the current image index
  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const firstThreeImages = data.results.slice(0, 3).map(movie => ({
          backdrop_path: movie.backdrop_path,
          title: movie.title,
          overview: movie.overview,
        }));

        setImages(firstThreeImages);
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
     
    }

    fetchData();
  }, []);

  // Callback to update the current image index when Swiper changes
  const handleSwiperSlideChange = (swiper) => {
    setCurrentImageIndex(swiper.realIndex);
  };

  return (
    <>
      <Navbar backgroundImage={`https://image.tmdb.org/t/p/original${images[currentImageIndex]?.backdrop_path || mainImage}`} />
      <Swiper
        onSwiper={handleSwiperSlideChange}
        onSlideChange={handleSwiperSlideChange}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        
        // modules={[Pagination]}
        className="mySwiper"
      >
         {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="w-full h-[400px] sm:h-[450px]  md:h-auto relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  className="w-full h-full object-cover"
                  alt=""
                />
                  <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
              </div>
              <div className="absolute w-full  md:w-[90%] top-1/2  text-left  p-3 left-0 md:left-4 text-white">
                <h2 className='truncate text-xl   sm:text-2xl mb-2  '>{image.title}</h2>
                <p className='text-sm md:text-lg line-clamp-3 sm:line-clamp-none md:line-clamp-4'>{image.overview}</p>
                <div className="flex gap-1 text-orange-600">
                <FaStar size={15} /> <FaStar size={15} /> <FaStar size={15} /> <FaStar size={15} /> <FaStarHalf size={15} /> 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
