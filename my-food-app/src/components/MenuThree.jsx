import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuTwo.css';
import FoodItemCard from './FoodItemCard';
import { useNavigate } from 'react-router-dom';


const MenuThree = () => {
  const navigate  = useNavigate();
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState([]);
   // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
   // eslint-disable-next-line
  const [isLoadings, setIsLoadings] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Canadian meals:', error);
        setIsLoading(false);
      });

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Jamaican')
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals);
        setIsLoadings(false);
      })
      .catch((error) => {
        console.error('Error fetching Jamaican meals:', error);
        setIsLoadings(false);
      });
  }, []);

   const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    318: {
      slidesPerView: 1.58,
      spaceBetween: 20,
    },

    348: {
        slidesPerView: 1.68,
        spaceBetween: 20,
      },

    370: {
      slidesPerView: 1.88,
      spaceBetween: 20,
    },

    400: {
      slidesPerView: 2.04,
      spaceBetween: 10,
    },

    478: {
      slidesPerView: 2.40,
      spaceBetween: 10,
    },

    557: {
      slidesPerView: 2.70,
      spaceBetween: 10,
    },

    642: {
      slidesPerView: 2.90,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 3.20,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3.30,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 3.60,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3.80,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.0,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 4.30,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4.60,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 4.70,
      spaceBetween: 10,
    },
    1024: {
        slidesPerView: 4.70,
        spaceBetween: 10,
      },

      1110: {
        slidesPerView: 5.0,
        spaceBetween: 10,
      },
   
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    
   
  };

  function generateRandomPrice() {
    const randomDecimal = Math.random() * 100 + 1;
    const roundedPrice = Math.round(randomDecimal * 100) / 100;
    const formattedPrice = `${roundedPrice.toFixed(2)}`;
    return formattedPrice;
  }

  
  const handleFoodItemCardClick = (foodItem) => {
    // Check if the required data is available
    if (foodItem.id && foodItem.img && foodItem.title) {
      const { id, title, img } = foodItem;
      const price = generateRandomPrice(); // Generate random price
      navigate('/productdetails', { state: { id, title, img, price } });
    } else {
      console.error('Required data is missing in foodItem:', foodItem);
    }
  };
  

  return (
    <div className=' mx-auto mt-3 md:mt-7 mb-10 md:mb-24'>
      <div className="w-full mx-auto overflow-hidden ">
        {meals.length > 0 && (
          <div className=' mt-3 md:mt-6'>
            <h2 className="text-2xl font-semibold mt-4 pl-3">Canadians:</h2>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={breakpoints}
              className="mySwiper"
            >
              {meals.map((item) => (
                <SwiperSlide key={item.idMeal}>
                  <FoodItemCard
                  id={item.idMeal}
                    img={item.strMealThumb}
                    price={generateRandomPrice()}
                    title={item.strMeal}
                    idMeal={item.idMeal}
                    mealid={item.idMeal} 
                    // title={item.strMeal}
                    onCardClick={(foodItem) => handleFoodItemCardClick(foodItem)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {meal.length > 0 && (
          <div className=' mt-5  md:mt-10'>
            <h2 className="text-2xl font-semibold mt-4 pl-3">Jamaicans:</h2>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={breakpoints}
              className="mySwiper"
            >
              {meal.map((item) => (
                <SwiperSlide key={item.idMeal}>
                  <FoodItemCard
                  id={item.idMeal}
                    img={item.strMealThumb}
                    price={generateRandomPrice()}
                    title={item.strMeal}
                    idMeal={item.idMeal}
                    mealid={item.idMeal} 
                    onCardClick={(foodItem) => handleFoodItemCardClick(foodItem)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuThree;



