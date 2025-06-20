
import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuSwipper.css';
import { AllFood, MenuCard, MenuNavbar } from '..';
import { BreakPoints } from '../Breakpoint';
import { getAuth } from 'firebase/auth';

interface Category {
  idCategory: string;
  strCategory: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  mealId: string;
  strMealDescription: string; 
}

const MenuSwippers: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Vegan');
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const [selectedMealImage, setSelectedMealImage] = useState<string | null>(null); 


  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Update isAuthenticated state based on user authentication
    });

    return () => unsubscribe(); 
  }, [auth]);

  const baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
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
        setMeals([]);
        throw new Error('No meals found');
      }
  
      // Fetch meal details for each meal to get the description
      const mealDetails = await Promise.all(data.meals.map(async (meal: Meal) => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
          if (!response.ok) {
            throw new Error('Failed to fetch meal details');
          }
          const mealData = await response.json();
          const mealDetail = mealData.meals ? mealData.meals[0] : null;
          return {
            ...meal,
            strMealDescription: mealDetail?.strInstructions || '' 
          };
        } catch (error) {
          console.error('Error fetching meal details:', error);
          return {
            ...meal,
            strMealDescription: ''
          };
        }
      }));
  
      setMeals(mealDetails);
    } catch (error) {
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




  const renderCategorySwiper = () => (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      pagination={{ clickable: true }}
       breakpoints={BreakPoints}
      className="mySwiper"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.idCategory} onClick={() => setSelectedCategory(category.strCategory)}>
          <MenuCard categoryName={category.strCategory} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderMealList = () => (
    <Box overflowY="auto" maxHeight="calc(100vh - 250px)" >
      <Text>All Food</Text>
      <Box minWidth="100%" display='grid' gap='25px'>
        {meals.length === 0 ? (
          <Text>No meals found.</Text>
        ) : (
          meals.map((meal) => (
            <Box key={meal.idMeal} onClick={() => handleMealClick(meal.strMealThumb)} pr='2'>
              <AllFood imageUrl={meal.strMealThumb} name={meal.strMeal} id={meal.idMeal} price={generateRandomPrice(10, 20)}   description={meal.strMealDescription}   mealId={meal.idMeal}  />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );

  return (
    <>
      {loading && (
        <Box display="flex" zIndex='99999' justifyContent="center" alignItems="center" height="100vh">
          <Spinner size="5xl" color="green.500" />
        </Box>
      )}

      <Box display={['none','none', 'none', 'block']} maxW="1340px" mx="auto" className='text-fonts'>
        <Box display='flex'>
          <Box display="flex" w='45%' flexDir='column' gap='20px'>
            <MenuNavbar placeholder={"Search for food .."} fetchMeals={fetchMealsByCategory} isAuthenticated={isAuthenticated} />
            <Box maxW="700px" px='3'>{renderCategorySwiper()}</Box>
            {renderMealList()}
          </Box>
          <Box bg="transparent" w='55%'>
            {selectedMealImage && <Image w='full' objectFit='cover' h='full' src={selectedMealImage} alt="Selected Meal" />}
          </Box>
        </Box>
      </Box>

      <Box display={['block','block', 'block', 'none']} className='text-fonts'>
        <Box display="" maxW="1340px" mx="auto">
          <Box display="flex" flexDir='column' gap='20px' gridTemplateColumns={{ base: "100%", md: "40% 60%" }} gridTemplateRows="auto auto">
            <MenuNavbar placeholder={"Search for food .."} fetchMeals={fetchMealsByCategory} isAuthenticated={isAuthenticated} />
          <Box px="10px">   {renderCategorySwiper()} </Box>
            <Box bg="transparent" height={['270px','300px','350px']}>
              {selectedMealImage && <Image w='full' objectFit='cover' h='full' src={selectedMealImage} alt="Selected Meal" />}
            </Box>
            {renderMealList()}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuSwippers;
