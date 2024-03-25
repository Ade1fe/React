import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuSwipper.css';
import { AllFood, MenuCard } from '..';

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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [selectedCategory]);

  const fetchMealsByCategory = async (category: string) => {
    setLoading(true); // Set loading to true when fetching meals
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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching meals
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <Box display="flex" zIndex='99999' justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="green.500" />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Swiper
        slidesPerView={13}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.idCategory} onClick={() => handleCategoryClick(category.strCategory)}>
            <MenuCard categoryName={category.strCategory} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box bg="green.500" p="20px">
        <Text>All Food</Text>

        {/* Display meals only if loading is false */}
        {!loading && (
          <Box bg="yellow.700">
            {meals.map((meal) => (
              <div key={meal.idMeal}>
                <AllFood imageUrl={meal.strMealThumb} name={meal.strMeal} />
              </div>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default MenuSwippers;
