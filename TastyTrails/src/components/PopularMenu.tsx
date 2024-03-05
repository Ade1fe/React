import { useEffect, useState } from 'react';
import { PopularMenuCard } from '.';
import { Box, Grid } from '@chakra-ui/react';

const PopularMenu = () => {
  function generateRandomPrice(min: number, max: number) {
    const price = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(price); 
  }
  
  function generateRandomRating(min: number, max: number) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(1)); 
  }
  
  const price = generateRandomPrice(10, 20); 
  const rating = generateRandomRating(3, 5); 
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        // Assuming you have a reactive state to store meals
        setMeals(data.meals.slice(0, 8)); // Return first 8 meals
      } catch (error) {
        console.error(error);
        // Handle error gracefully
      }
    };

    fetchMeals();
  }, []);

  return (
    <Grid templateColumns={["repeat(auto-fit, minmax(150px, 1fr ))","repeat(auto-fit, minmax(250px, 1fr))","repeat(auto-fit, minmax(300px, 1fr))"]} gap={[4,6,8]} maxWidth='1340px' mx='auto' mt={['3rem']}>
  {meals.map((meal) => (
    <div key={meal.idMeal}>
      <PopularMenuCard price={price} imageSrc={meal.strMealThumb} title={meal.strMeal} rating={rating} />
    </div>
  ))}
</Grid>
  );
};

export default PopularMenu;
