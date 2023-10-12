import React, { useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import "../css/shopcss.css"

import ImgCard from './ImgCard';
import bag from "../assests/bag.jpg";
import dress from "../assests/blackdress.jpg";
import bow from "../assests/bow.jpg";
import bluedress from "../assests/dressblue.jpg"


export default function ShopCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalItems = 12;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Function to display the current item range
  const getCurrentItemRange = () => {
    const startItem = currentPage * itemsPerPage + 1;
    const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);
    return `Showing  ${startItem} - ${endItem} of ${totalItems} results`;
  };

  const items = [
    { img: bag, h1: "1", price: "$80.50" },
    { img: dress, h1: "2", price: "$120.00" },
    { img: bow, h1: "3", price: "$15.99" },
    { img: bluedress, h1: "4", price: "$5.99" },
    { img: bag, h1: "5", price: "$80.50" },
    { img: dress, h1: "6", price: "$120.00" },
    { img: bow, h1: "7", price: "$15.99" },
    { img: bluedress, h1: "8", price: "$5.99" },
    { img: bag, h1: "9", price: "$80.50" },
    { img: dress, h1: "10", price: "$120.00" },
    { img: bow, h1: "11", price: "$15.99" },
    { img: bluedress, h1: "12", price: "$5.99" },
    // Add more items as needed
  ];

  return (
    <>
      <div className="flex text-sm md:text-[15px] gap-3 justify-between items-start px-2">
      <div className=' px-3 mx-3 py-2 border-2 mb-4 w-fit'>{getCurrentItemRange()}</div>
    
     
    <select id="selectOption" className='p-2 border-2  border-gray-800' name="selectOption">
        <option value="option1" disabled>Default  sorting</option>
        <option value="option2">Sort by popularity 2</option>
        <option value="option3">Sort by average rating</option>
        <option value="option4">Sort by latest</option>
        <option value="option5">Sort by: low to high</option>
        <option value="option6">Sort by: high to low</option>
    </select>
      </div>
      <div className=" py-3 flex justify-evenly mt-5 flex-wrap gap-3 ">
        {items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
          <ImgCard key={index} img={item.img} h1={item.h1} price={item.price} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />

      {/* Additional content goes here */}
    </>
  );
}
