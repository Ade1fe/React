import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../assests/girl-gb16739572_1280.jpg";
import img2 from "../assests/woman-g10dd82644_1280.jpg";
import img3 from "../assests/woman-g3a702a80a_1280.jpg";
import '../css/styles.css'; // Include your other styles if needed

const Carousel = () => {
  useEffect(() => {
    const changeColor = (elements, color) => {
      elements.forEach(element => {
        element.style.color = color;
      });
    };

    const prevButtons = document.querySelectorAll('.swiper-button-prev');
    changeColor(prevButtons, 'cyan');

    const nextButtons = document.querySelectorAll('.swiper-button-next');
    changeColor(nextButtons, 'cyan');

    const progressBarFill = document.querySelectorAll('.swiper-pagination-progressbar-fill');
    changeColor(progressBarFill, 'cyan');
  }, []);

  return (
    <Swiper
      pagination={{
        type: '', // You can set the type you prefer
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-[550px] md:h-full">
          <img src={img1} alt="" className="w-full" />
          <div className="w-[96%]  left-2 md:w-[80%] lg:w-[700px] absolute top-[40%] md:absolute sm:top-[30%] sm:absolute md:top-[40%] md:left-[10%] lg:left-[25%] p-4 ">
            <h1 className="text-white text-sm mb-2">Fashion Collection for men</h1>
            <p className="text-white  text-6xl  sm:text-7xl md:text-8xl lg:text-9xl">
            Seasonal 
            </p>

            <p className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
             Wardrode
            </p>
            <button className='py-4 my-2 px-5  hover:font-bold hover:text-white border-4  hover:bg-opacity-50 border-black bg-black text-white'>Shop Collection</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px] md:h-full">
          <img src={img2} alt="" className="w-full" />
          <div className="w-[96%]  left-2 md:w-[80%] lg:w-[700px] absolute top-[40%] md:absolute sm:top-[30%] sm:absolute md:top-[40%] md:left-[10%] lg:left-[25%] p-4 ">
            <h1 className="text-white text-sm mb-2">Fashion Collection for men</h1>
            <p className="text-white  text-6xl  sm:text-7xl md:text-8xl lg:text-9xl">
            Seasonal 
            </p>

            <p className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
             Wardrode
            </p>
            <button className='py-4 my-2 px-5  hover:font-bold hover:text-white  hover:bg-opacity-50 border-4 border-black bg-black text-white'>Shop Collection</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px] md:h-full">
          <img src={img3} alt="" className="w-full" />
          <div className="w-[96%]  left-2 md:w-[80%] lg:w-[700px] absolute top-[40%] md:absolute sm:top-[30%] sm:absolute md:top-[40%] md:left-[10%] lg:left-[25%] p-4 ">
            <h1 className="text-white text-sm mb-2">Fashion Collection for men</h1>
            <p className="text-white  text-6xl  sm:text-7xl md:text-8xl lg:text-9xl">
            Seasonal 
            </p>

            <p className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
             Wardrode
            </p>
            <button className='py-4 my-2 px-5  hover:font-bold hover:text-white border-4 border-black bg-black text-white hover:bg-opacity-50'>Shop Collection</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
