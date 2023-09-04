import React from 'react';
import SearchIngredients from './SearchIngredients';
import Ingredient from './Ingredient';

const ResultContainer = () => {
  return (
    <div>
      <h2>Search for Food by Category:</h2>
      <SearchIngredients />
      <h2>Search for Meals by Ingredient:</h2>
      <Ingredient />
    </div>
  );
};

export default ResultContainer;
