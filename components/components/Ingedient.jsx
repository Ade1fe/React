import React, { useEffect, useState } from 'react';

const Ingredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const ingredientData = data.meals || [];

        // Map the ingredients to an array of ingredient names
        const ingredientNames = ingredientData.map((meal) => meal.strIngredient);

        setIngredients(ingredientNames);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  useEffect(() => {
    async function fetchMealsByIngredient() {
      if (selectedIngredient) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          const mealData = data.meals || [];

          setMeals(mealData);
        } catch (error) {
          console.error('Error fetching meals:', error);
        }
      } else {
        setMeals([]);
      }
    }

    fetchMealsByIngredient();
  }, [selectedIngredient]);

  const handleIngredientChange = (event) => {
    setSelectedIngredient(event.target.value);
  };

  return (
    <div>
      {/* <h2>Choose an Ingredient:</h2> */}
      <select value={selectedIngredient}  className='border-2 px-1 py-1' onChange={handleIngredientChange}>
        <option value="">Select an ingredient</option>
        {ingredients.map((ingredient, index) => (
          <option key={index} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      <h2>Meals with {selectedIngredient}:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ingredient;


          // <div key={index} className="mt-4">
                //     <h2>{category}:</h2>
                //     {meals.length > 0 ? (
                //         <ul>
                //             {meals.map((meal) => (
                //                 <li key={meal.idMeal} className="mb-2">
                //                     {meal.strMeal}
                //                 </li>
                //             ))}
                //         </ul>
                //     ) : (
                //         <p>No meals found for {category}.</p>
                //     )}
                // </div>