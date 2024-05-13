
import { PopularMenuCard } from '.';
import { Box, Icon, Link as ChakraLink,  } from '@chakra-ui/react';
import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Link as ReactRouterLink } from 'react-router-dom';

import '../components/css/Grid.css';

// import required modules
import { Grid,  } from 'swiper/modules';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { BreakPointTwo } from './Breakpoint';

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

        setMeals(data.meals.slice(0, 8));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeals();
  }, []);


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
        breakpoints={BreakPointTwo}
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
      <ChakraLink as={ReactRouterLink} to="/menu-page"  bg='orange.400' mt='2rem' color='white' borderRadius='10px' fontWeight='600' px='2' pt='3' pb='2' w='200px' textAlign='center' mx='auto'>See More Products <Icon ml='20px' as={FaArrowUpRightFromSquare} /> </ChakraLink>
    </Box>
  );
};

export default PopularMenu;
