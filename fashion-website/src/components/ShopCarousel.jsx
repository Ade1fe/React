import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// IMPORT REACT PAGINATE
import ReactPaginate from 'react-paginate';
// import 'react-paginate/dist/react-paginate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../css/style.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

const itemsPerPage = 6; 
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 

export default function App() {

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);


  return (
    
    <div className="shop-carousel-with-pagination">
      <Swiper
        slidesPerView={3}
        grid={{
            rows: 2,
            fill: "row"
          }}
        spaceBetween={30}

        pagination={{
            clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {currentItems.map((item) => (
           <SwiperSlide key={item}>Slide {item}</SwiperSlide>
           
           ))}
         </Swiper>
      <div className="pagination-container">
        <ReactPaginate
          pageCount={Math.ceil(items.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

//ShopCarousel