import React, { useState} from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import MenuCarouselThree from './MenuCarouselThree';

const SearchIngredients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return; // Prevent empty search
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const mealData = data.meals || [];

      setMeals(mealData);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setMeals([]);
  };

  return (
    <div className="">
      {/* <h2 className="text-2xl font-semibold mb-4">Search for Food by Category:</h2> */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter a category (e.g., Seafood)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 rounded-full"
            >
              <FaTimes />
            </button>
          )}
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          <FaSearch />
        </button>
      </form>
      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <div className="mt-4">
          {meals.length > 0 ? (
             <MenuCarouselThree meals={meals} />
          ) : (
            <p>No meals found for the selected category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchIngredients;
