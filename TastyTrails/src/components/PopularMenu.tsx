
import { PopularMenuCard } from '.';
import { Box, Button, Icon,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../components/css/Grid.css';

// import required modules
import { Grid,  } from 'swiper/modules';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PopularMenu = () => {
  function generateRandomPrice(min: number, max: number) {
    const price = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(price);
  }
  
  function generateRandomRating(min: number, max: number) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(1));
  }
  
  const [meals, setMeals] = useState<any[]>([]);


  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${baseUrl}search.php?f=c`);

        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }

        const data = await response.json();

        if (!data.meals) {
          throw new Error('No meals found');
        }

        setMeals(data.meals.slice(0, 8)); // Return first 8 meals
      } catch (error) {
        console.error(error);
        // Handle error gracefully
      }
    };

    fetchMeals();
  }, []);

  // const BreakPoints = {
  //   // Define breakpoints and their respective settings here
  //   0: {
  //       slidesPerView: 1, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //   320: {
  //     slidesPerView: 1.45, 
  //     spaceBetween: 10,
  //     fill: 'row',
  //   },
  //   338: {
  //       slidesPerView: 1.61, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     375: {
  //       slidesPerView: 1.70, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     400: {
  //       slidesPerView: 1.95, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     440: {
  //       slidesPerView: 2.0, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     480: {
  //       slidesPerView: 2.25, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     520: {
  //       slidesPerView: 2.40, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     550: {
  //       slidesPerView: 2.52, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     590: {
  //       slidesPerView: 2.72, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //   600: {
  //     slidesPerView: 2.80, 
  //     spaceBetween: 20, 
  //     fill: 'row',
  //   },
  //   650: {
  //       slidesPerView: 2.95, 
  //       spaceBetween: 20, 
  //       fill: 'row',
  //     },
  //     700: {
  //       slidesPerView: 3.05, 
  //       spaceBetween: 20, 
  //       fill: 'row',
  //     },
  //     738: {
  //       slidesPerView: 3.15, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //   768: {
  //     slidesPerView: 3.35, 
  //     spaceBetween: 10, 
  //     fill: 'row',
  //   },
  //   800: {
  //       slidesPerView: 3.55, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     850: {
  //       slidesPerView: 3.85, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     900: {
  //       slidesPerView: 4.05, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     950: {
  //       slidesPerView: 4.35, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     980: {
  //       slidesPerView: 4.75, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     1000: {
  //       slidesPerView: 4.80, 
  //       spaceBetween: 10, 
  //       fill: 'row',
  //     },
  //     1160: {
  //       slidesPerView: 4.85, 
  //       spaceBetween: 10,
  //       fill: 'row',
  //     },
  //     1230: {
  //       slidesPerView: 4.95, 
  //       spaceBetween: 10,
  //       fill: 'row',
  //     },
  //     1290: {
  //       slidesPerView: 4, 
  //       spaceBetween: 10,
  //       fill: 'row',
  //     },
    
  // };

  return (
    <Box maxWidth='1340px' mx='auto' mt='2rem' display='grid'>
      <Swiper
        slidesPerView={3.70}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // breakpoints={BreakPoints}
        modules={[Grid, ]}
        className="mySwiper"
      >
        {meals.map(meal => (
          <SwiperSlide key={meal.idMeal}>
            <PopularMenuCard
              price={generateRandomPrice(10, 20)}
              imageSrc={meal.strMealThumb}
              title={meal.strMeal}
              rating={generateRandomRating(3, 5)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button bg='orange.400' mt='2rem' color='white' borderRadius='10px' fontWeight='600' p='2' w='200px' textAlign='center' mx='auto'>See More Products <Icon ml='20px' as={FaArrowUpRightFromSquare} /> </Button>
    </Box>
  );
};

export default PopularMenu;
