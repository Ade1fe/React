import React, { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';
import MenuCarouselOne from './MenuCarouselOne';

const MenuCategories = () => {
    const [foodLists, setFoodLists] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [selectedCategories, setSelectedCategories] = useState({});
    const [mealsByCategory, setMealsByCategory] = useState({});

    useEffect(() => {
        async function fetchFoodCategories() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                const data = await response.json();
                const categories = data.meals || [];
                setFoodLists(categories);

                // Fetch the counts for each category
                const counts = {};
                for (const category of categories) {
                    const categoryResponse = await fetch(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
                    );
                    const categoryData = await categoryResponse.json();
                    counts[category.strCategory] = categoryData.meals.length;
                }
                setCategoryCounts(counts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchFoodCategories();
    }, []);

    const handleCheckboxChange = async (e) => {
        const categoryName = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCategories({
            ...selectedCategories,
            [categoryName]: isChecked,
        });

        if (isChecked) {
            try {
                const categoryResponse = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
                );
                const categoryData = await categoryResponse.json();
                const categoryMeals = categoryData.meals || [];
                setMealsByCategory({
                    ...mealsByCategory,
                    [categoryName]: categoryMeals,
                });
            } catch (error) {
                console.error('Error fetching category meals:', error);
            }
        }
    };

    return (
        <div className='border-2 grid gap-2 p-4'>
            {foodLists.map((food, index) => (
                <label key={index} className='border flex items-center p-2 bg-gray-200'>
                    <input
                        type="checkbox"
                        value={food.strCategory}
                        className='mr-2'
                        onChange={handleCheckboxChange}
                        checked={selectedCategories[food.strCategory] || false}
                    />
                    <div className="flex gap-6">
                        <span>{food.strCategory}</span>
                        <span className='ml-2 text-gray-600'>({categoryCounts[food.strCategory] || 0}+)</span>
                    </div>
                </label>
            ))}

            {Object.entries(mealsByCategory).map(([category, meals], index) => (
                <div key={index}>
                    {/* <h2>{category}</h2> */}
                    <MenuCarouselOne foodData={meals} />
                </div>
            ))}
        </div>
    );
};

export default MenuCategories;
