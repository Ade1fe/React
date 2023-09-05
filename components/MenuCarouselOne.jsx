import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FoodItemCard from './FoodItemCard';

const MenuCarouselOne = ({ foodData }) => {
    // Function to generate a random price
    function generateRandomPrice() {
        const randomDecimal = (Math.random() * 100) + 1;
        const roundedPrice = Math.round(randomDecimal * 100) / 100;
        const formattedPrice = `$${roundedPrice.toFixed(2)}`;
        return formattedPrice;
    }

    // Usage example:
    const price = generateRandomPrice();
    console.log(price);

    if (!foodData || !Array.isArray(foodData)) {
        return <p>No data available</p>;
    }

    return (
        <div className="swiper-container" style={{ width: '1120px' }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {foodData.map((foodItem, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <FoodItemCard
                            img={foodItem.strMealThumb}
                            details={foodItem.strInstructions}
                            title={foodItem.strMeal}
                            price={foodItem.price || generateRandomPrice()} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MenuCarouselOne;
