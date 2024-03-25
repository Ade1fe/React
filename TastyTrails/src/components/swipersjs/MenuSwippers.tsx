

import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner ,Image} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuSwipper.css';
import { AllFood, MenuCard, MenuNavbar } from '..';

interface Category {
  idCategory: string;
  strCategory: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MenuSwippers: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Vegan');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMealImage, setSelectedMealImage] = useState<string | null>(null); // State to store selected meal image URL
  const baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}categories.php`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        if (!data.categories) {
          throw new Error('No categories found');
        }
        setCategories(data.categories);
        fetchMealsByCategory(selectedCategory);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [selectedCategory]);

  useEffect(() => {
    // Set the image of the first meal when the component mounts
    if (meals.length > 0) {
      setSelectedMealImage(meals[0].strMealThumb);
    }
  }, [meals]);

  const fetchMealsByCategory = async (category: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}filter.php?c=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      if (!data.meals) {
        throw new Error('No meals found');
      }
      setMeals(data.meals);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMealClick = (imageUrl: string) => {
    setSelectedMealImage(imageUrl);
  };

  function generateRandomPrice(min: number, max: number) {
    const price = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(price);
  }
  if (loading) {
    return (
      <Box display="flex" zIndex='99999' justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="5xl" color="green.500" />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Box display="" maxW="1340px" mx="auto">
        <Box display="grid" gap='20px' gridTemplateColumns={{ base: "100%", md: "45% 55%" }}  gridTemplateRows="auto auto">
          <MenuNavbar />
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.idCategory} onClick={() => setSelectedCategory(category.strCategory)}>
                <MenuCard categoryName={category.strCategory} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Box bg="transparent" gridColumn="2 / span 1" gridRow="1 / span 3">
          {selectedMealImage && <Image w='full' objectFit='cover'  h='full' src={selectedMealImage} alt="Selected Meal" />}
          </Box>

          <Box gridColumn="1 / span 1" overflowY="auto" maxHeight="calc(100vh - 250px)">
            <Text>All Food</Text>
            {!loading && (
              <Box minWidth="100%" display='grid' gap='25px'>
                {meals.map((meal) => (
                  <div key={meal.idMeal} onClick={() => handleMealClick(meal.strMealThumb)}> {/* Pass the meal image URL to the handler */}
                   <AllFood imageUrl={meal.strMealThumb} name={meal.strMeal} id={meal.idMeal}   price={generateRandomPrice(10, 20)}/>
                  </div>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuSwippers;
