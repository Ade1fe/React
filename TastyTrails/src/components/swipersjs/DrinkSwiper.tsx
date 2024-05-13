import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuSwipper.css';
import { AllDrink, MenuNavbar } from '..';
import { BreakPoints } from '../Breakpoint';
import { getAuth } from 'firebase/auth';
import MenuDrinkCard from '../cards/MenuDrinkCard';

interface Category {
  strCategory: string;
}

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strDrinkDescription: string; 
}

const DrinkSwiper: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Cocktail');
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const [selectedDrinkImage, setSelectedDrinkImage] = useState<string | null>(null); 

  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Update isAuthenticated state based on user authentication
    });

    return () => unsubscribe(); 
  }, [auth]);

  const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}list.php?c=list`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        if (!data.drinks) {
          throw new Error('No categories found');
        }
        setCategories(data.drinks);
        fetchDrinksByCategory(selectedCategory);
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
    if (drinks.length > 0) {
      setSelectedDrinkImage(drinks[0].strDrinkThumb);
    }
  }, [drinks]);

 
  const fetchDrinkDetails = async (drinkId: string) => {
    try {
      const response = await fetch(`${baseUrl}lookup.php?i=${drinkId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch drink details');
      }
      const data = await response.json();
      if (!data.drinks || data.drinks.length === 0) {
        throw new Error('No drink details found');
      }
      return data.drinks[0]; // Return the first drink detail
    } catch (error) {
      console.error('Error fetching drink details:', error);
      return null;
    }
  };
  
  const fetchDrinksByCategory = async (category: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}filter.php?c=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch drinks');
      }
      const data = await response.json();
      if (!data.drinks) {
        setDrinks([]);
        throw new Error('No drinks found');
      }

      // Fetch drink details for each drink to get the description
      const drinkDetails = await Promise.all(data.drinks.map(async (drink: any) => {
        try {
          const drinkDetail = await fetchDrinkDetails(drink.idDrink);
          return {
            ...drink,
            strDrinkDescription: drinkDetail?.strInstructions || '' // Use strInstructions for drink description
          };
        } catch (error) {
          console.error('Error fetching drink details:', error);
          return {
            ...drink,
            strDrinkDescription: '' // Set empty string for description if fetching fails
          };
        }
      }));

      setDrinks(drinkDetails);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  

  const handleDrinkClick = (imageUrl: string) => {
    setSelectedDrinkImage(imageUrl);
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
      {categories.map((category, index) => (
        <SwiperSlide key={index} onClick={() => setSelectedCategory(category.strCategory)}>
          <MenuDrinkCard categoryName={category.strCategory} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderDrinkList = () => (
    <Box overflowY="auto" maxHeight="calc(100vh - 250px)" >
      <Text>All Drinks</Text>
      <Box minWidth="100%" display='grid' gap='25px'>
        {drinks.length === 0 ? (
          <Text>No drinks found.</Text>
        ) : (
          drinks.map((drink) => (
            <Box key={drink.idDrink} onClick={() => handleDrinkClick(drink.strDrinkThumb)} pr='2'>
              <AllDrink imageUrl={drink.strDrinkThumb} name={drink.strDrink} id={drink.idDrink} price={generateRandomPrice(10, 20)} description={drink.strDrinkDescription}  drinkId={drink.idDrink} />
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
            <MenuNavbar placeholder={"Search for drinks .."} fetchMeals={fetchDrinksByCategory} isAuthenticated={isAuthenticated} />
            <Box maxW="700px" px='3'>{renderCategorySwiper()}</Box>
            {renderDrinkList()}
          </Box>
          <Box bg="transparent" w='55%'>
            {selectedDrinkImage && <Image w='full' objectFit='cover' h='full' src={selectedDrinkImage} alt="Selected Drink" />}
          </Box>
        </Box>
      </Box>

      <Box display={['block','block', 'block', 'none']} className='text-fonts'>
        <Box display="" maxW="1340px" mx="auto">
          <Box display="flex" flexDir='column' gap='20px' gridTemplateColumns={{ base: "100%", md: "40% 60%" }} gridTemplateRows="auto auto">
            <MenuNavbar placeholder={"Search for drinks .."} fetchMeals={fetchDrinksByCategory} isAuthenticated={isAuthenticated} />
            <Box px="10px">{renderCategorySwiper()}</Box>
            <Box bg="transparent" height={['270px','300px','350px']}>
              {selectedDrinkImage && <Image w='full' objectFit='cover' h='full' src={selectedDrinkImage} alt="Selected Drink" />}
            </Box>
            {renderDrinkList()}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DrinkSwiper;












