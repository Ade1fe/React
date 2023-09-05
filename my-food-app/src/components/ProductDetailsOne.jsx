import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductTwo from './ProductTwo';
import ProductThree from './ProductThree';
import ProductFour from './ProductFour';
import ProductInfo from './ProductInfo';
import ProductMeasure from './ProductMeasure';
import ProductComments from './ProductComments';

const ProductDetailsPage = () => {
  const location = useLocation();
  const { id, title, img, price } = location.state || {};
  const [productDetails, setProductDetails] = useState(null);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  
    // Make an HTTP GET request to fetch product details
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Check if the data contains the meal details
        if (data.meals && data.meals.length > 0) {
          // Update the state with the fetched product details
          setProductDetails(data.meals[0]); // Access the first meal in the array
        } else {
          console.error('Meal not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div className='mt-[30px] md:mt-[50px] container mx-auto'>
      {productDetails && (
        <div className="block md:flex items-center">
          <ProductTwo
            first={productDetails.strMealThumb}
            sec={productDetails.strMealThumb}
            third={productDetails.strMealThumb}
          />
         <div className="w-full md:w-2/3 px-4">
         <ProductThree h1={productDetails.strMeal}  details={productDetails.strInstructions} />
          <ProductFour price={price} country={productDetails.strArea} tube={productDetails.strYoutube} tags={productDetails.strCategory} />
         </div>
        
        </div>

      

      )}
      <div className="">
  <div className="tab-links ">
    <button
      className={`${
        activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
      } px-4 py-2 rounded-md`}
      onClick={() => handleTabClick(1)}
    >
      Tab 1
    </button>
    <button
      className={`${
        activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
      } px-4 py-2 rounded-md`}
      onClick={() => handleTabClick(2)}
    >
      Tab 2
    </button>
    <button
      className={`${
        activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
      } px-4 py-2 rounded-md`}
      onClick={() => handleTabClick(3)}
    >
      Tab 3
    </button>
  </div>
  <div className="tab-content">
  {activeTab === 1 && productDetails && (
  <ProductInfo details={productDetails.strInstructions.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ))} />
)}


{activeTab === 2 && productDetails && (
  <ProductMeasure>
    {Object.keys(productDetails).map((key) => {
      if (key.startsWith('strIngredient')) {
        const ingredientNumber = key.replace('strIngredient', '');
        const measureKey = `strMeasure${ingredientNumber}`;
        const ingredient = productDetails[key];
        const measure = productDetails[measureKey];
        if (ingredient && measure) {
          return (
            <li key={ingredientNumber} className='my-2 py-2 bg-gray-50 px-3'>
              {`${measure}: ${ingredient}`}
            </li>
          );
        }
      }
      return null;
    })}
  </ProductMeasure>
)}



    {activeTab === 3 && <ProductComments />}
  </div>
</div>

    </div>
  );
};

export default ProductDetailsPage;
