import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/MenuTwo.css';
import FoodItemCard from './FoodItemCard';
import { FaSearch, FaTimes } from 'react-icons/fa';
import InforContainer from './InforContainer'; 
import { useNavigate  } from 'react-router-dom';


const MenuTwo = () => {
  const navigate  = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mealCounts, setMealCounts] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [ingredientMeals, setIngredientMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false); 
  

  
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
    
   

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then((response) => response.json())
            .then((data) => {
                const categoryList = data.meals.map((meal) => meal.strCategory);
                setCategories(categoryList);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            const mealCountPromises = categories.map((category) => {
                return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                    .then((response) => response.json())
                    .then((data) => {
                        return { category, count: data.meals ? data.meals.length : 0 };
                    })
                    .catch((error) => {
                        console.error(`Error fetching meal count for ${category}:`, error);
                        return { category, count: 0 };
                    });
            });

            Promise.all(mealCountPromises)
                .then((counts) => {
                    const mealCountMap = {};
                    counts.forEach(({ category, count }) => {
                        mealCountMap[category] = count;
                    });
                    setMealCounts(mealCountMap);
                });
        }
    }, [categories]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then((response) => response.json())
            .then((data) => {
                const ingredientList = data.meals.map((meal) => meal.strIngredient);
                setIngredients(ingredientList);
            })
            .catch((error) => {
                console.error('Error fetching ingredients:', error);
            });
    }, []);
    

    useEffect(() => {
        if (selectedIngredient) {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.meals && data.meals.length > 0) {
                        setIngredientMeals(data.meals);
                    } else {
                        setIngredientMeals([]); // No meals found, clear the data
                    }
                })
                .catch((error) => {
                    console.error(`Error fetching meals containing ${selectedIngredient}:`, error);
                });
        }
    }, [selectedIngredient]);
    
    const breakpoints = {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
  
      310: {
        slidesPerView: 1.48,
        spaceBetween: 20,
      },
  
      370: {
        slidesPerView: 1.70,
        spaceBetween: 20,
      },
  
      428: {
        slidesPerView: 2.10,
        spaceBetween: 10,
      },
  
      478: {
        slidesPerView: 2.40,
        spaceBetween: 10,
      },
  
      568: {
        slidesPerView: 2.70,
        spaceBetween: 10,
      },
  
      668: {
        slidesPerView: 2.90,
        spaceBetween: 10,
      },
      698: {
        slidesPerView: 3.0,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 3.10,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 3.20,
        spaceBetween: 10,
      },
      750: {
        slidesPerView: 3.27,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.0,
        spaceBetween: 10,
      },
      850: {
        slidesPerView: 3.10,
        spaceBetween: 10,
      },
      910: {
        slidesPerView: 3.40,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
     
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      
     
    };
  

    function generateRandomPrice() {
        const randomDecimal = (Math.random() * 100) + 1;
        const roundedPrice = Math.round(randomDecimal * 100) / 100;
        const formattedPrice = `$${roundedPrice.toFixed(2)}`;
        return formattedPrice;
    }
    // const price = generateRandomPrice();

    const fetchFoodItemsForCategory = (category) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => response.json())
            .then((data) => {
                const items = data.meals || [];
                setFoodItems((prevItems) => [...prevItems, { category, items }]);
                
            })
            .catch((error) => {
                console.error(`Error fetching food items for ${category}:`, error);
                alert(`Error fetching food items for ${category}:`, error)
            });
    };

    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedCategories([...selectedCategories, value]);
        fetchFoodItemsForCategory(value);
        setShowInfo(true); // Show the InforContainer when a checkbox is checked
      } else {
        setSelectedCategories(selectedCategories.filter((category) => category !== value));
        setFoodItems(foodItems.filter((item) => item.category !== value));
      }
    };

    const handleFoodItemCardClick = (foodItem) => {
      // const { id, title, img, price } = foodItem;
      const { id, title, img, price } = foodItem;
      console.log('Clicked Food Item Details:');
      console.log('Title:', foodItem.title);
      console.log('Image:', foodItem.img);
      console.log('Price:', foodItem.price);
      console.log('ID:', foodItem.id);
      const idMeal = foodItem.id;
      console.log(idMeal);
      console.log('Clicked Food Item Details:', foodItem);
      navigate('/productdetails', { state: { id, title, img, price } });
    
      
      
     
    };

    return (
        <div className=" mx-auto p-4">
           <InforContainer show={showInfo} setShow={setShowInfo} />
            <div className="my-4">
                <div className="grid sm:flex sm:justify-between gap-4">
                    <div className="w-full mx-auto sm:mx-0 sm:w-2/4">
                    <select
                    className="w-full bg-white border border-gray-300 rounded-md px-2 py-1"
                    value={selectedIngredient}
                    onChange={(e) => setSelectedIngredient(e.target.value)}
                >
                    <option value="" disabled>Select an ingredient</option>
                    {ingredients.map((ingredient, index) => (
                        <option key={index} value={ingredient}>
                            {ingredient}
                        </option>
                    ))}
                </select>

</div>


<div className="w-full mx-auto sm:mx-0 sm:w-2/4">
  <form onSubmit={handleSubmit} className="flex items-center space-x-1 relative">
    <input
      type="text relative flex-1"
      placeholder="Enter a category (e.g., Seafood)"
      className="w-full bg-white border border-gray-300 rounded-md px-2 py-1"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md ml-0">
    <FaSearch />
    </button>
    <button type="button" onClick={handleClear} className="absolute top-4 right-[60px] -translate-y-1/2 bg-red-500 text-white p-1 rounded-full">
    <FaTimes />
    </button>
  </form>
</div>


                </div>
            </div>

            <div className="block md:flex items-start">
                <ul className="w-[80%] sm:w-[50%]  mx-auto p-0  md:w-fit md:pr-5">
                    {categories.map((category) => (
                        <li key={category} className="flex justify-between gap-3 my-2">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-500 h-4 w-4"
                                    value={category}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="text-gray-800">{category}</span>
                            </label>
                            <span className="text-gray-600">{mealCounts[category] || 0}</span>
                        </li>
                    ))}
                </ul>

       

<div className="w-full md:w-[85%] mx-auto overflow-hidden">
  {meals.length > 0 && (
    <div>
      <h2 className="text-2xl font-semibold mt-4">Search Results for "{searchQuery}"</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Pagination]}
        className="mySwiper"
      >
        {meals.map((item) => (
          <SwiperSlide key={item.idMeal}>
      <FoodItemCard
  id={item.idMeal}
  img={item.strMealThumb}
  price={generateRandomPrice()}
  title={item.strMeal}
  onCardClick={(foodItem) => handleFoodItemCardClick(foodItem)}
/>



          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )}

  {ingredientMeals.length > 0 && (
    <div>
      <h2 className="text-2xl font-semibold mt-4 text-center mb-1">Meals containing {selectedIngredient}</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ingredientMeals.map((item) => (
          <SwiperSlide key={item.idMeal}>
        <FoodItemCard
  id={item.idMeal}
  img={item.strMealThumb}
  price={generateRandomPrice()}
  title={item.strMeal}
  onCardClick={(foodItem) => handleFoodItemCardClick(foodItem)}
/>



          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )}
 {selectedCategories.map((selectedCategory) => (
        <div key={selectedCategory}>
            <h2 className="text-2xl font-semibold mt-4 pl-2 md:pl-1">{selectedCategory} Items</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper"
            >
                {foodItems
                    .find((item) => item.category === selectedCategory)
                    ?.items.map((item) => (
                        <SwiperSlide key={item.idMeal}>
    <FoodItemCard
  id={item.idMeal}
  img={item.strMealThumb}
  price={generateRandomPrice()}
  title={item.strMeal}
  onCardClick={(foodItem) => handleFoodItemCardClick(foodItem)}
/>



                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    ))}
  {/* ... other sections ... */}
</div>


            </div>
        </div>
    );
};

export default MenuTwo;
