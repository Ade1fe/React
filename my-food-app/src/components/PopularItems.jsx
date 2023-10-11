import React, { useEffect, useState } from 'react';
import { FoodCard } from './FoodCard';
import { Link } from 'react-router-dom';

const PopularItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await response.json();
        setFoodItems(data.meals.slice(0, 8)); // Get the first 6 items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto text-center  sm:px-3 md:px-4">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold px-2 lg:text-5xl text-center mb-3 md:mb-5'>Our Popular Food Menu</h2>
        <p className='text-sm md:text-lg w-[full] md:w-[80%] mx-auto font-semibold text-center px-4 mb-6 md:mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga esse laudantium
             aspernatur aliquam eligendi 
            repellendus, laboriosam quo impedit modi!</p>
        <div className='flex flex-wrap justify-center gap-2 sm:gap-5 md:gap-8  '>
      {foodItems.map((food) => (
        <FoodCard key={food.idMeal} img={food.strMealThumb} title={food.strMeal} />
      ))}
    </div>

    <Link>
    <button className='w-fit px-4 py-2 mx-auto text-center mt-5 md:mt-10 bg-orange-500 text-sm md:text-lg rounded-md
     text-white border-2 border-orange-500 hover:bg-transparent hover:text-black font-semibold'>See More</button>
    </Link>
    </div>
  );
};

export default PopularItems;
