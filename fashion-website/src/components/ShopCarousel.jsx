// eslint-disable-next-line 
import React, { useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import "../css/shopcss.css"

import ImgCard from './ImgCard';
import bag from "../assests/bag.jpg";
import dress from "../assests/blackdress.jpg";
import bow from "../assests/bow.jpg";
import bluedress from "../assests/dressblue.jpg"
import pic1 from "../assests/fashion-product24.jpg"
import pic2 from "../assests/fashion-product19.jpg"
import pic3 from "../assests/fashion-product4.jpg"
import pic4 from "../assests/fashion-product6.jpg"
import pic5 from "../assests/fashion-product21.jpg"
import pic6 from "../assests/fashion-product1.jpg"
import pic7 from "../assests/fashion-product16.jpg"
import pic8 from "../assests/fashion-product12.jpg"
import pic9 from "../assests/fashion-product23.jpg"
import pic10 from "../assests/fashion-product10.jpg"
import pic11 from "../assests/fashion-product20.jpg"
import pic12 from "../assests/fashion-product13.jpg"



export default function ShopCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalItems = 16;

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
    { img: bag, h1: "Hand Bag", price: "$80.50" },
    { img: dress, h1: "Black Dress", price: "$120.00" },
    { img: bow, h1: "Bow", price: "$15.09" },
    { img: bluedress, h1: "Blue Dress", price: "$24.99" },
    { img: pic1, h1: "Cap", price: "$8.50" },
    { img: pic2, h1: "Sunglass", price: "$120.00" },
    { img: pic3, h1: "Blue Shirt", price: "$15.99" },
    { img: pic4, h1: "Down Jacket", price: "$85.00" },
    { img: pic5, h1: "Pattern Heel", price: "$80.50" },
    { img: pic6, h1: "Jacket", price: "$120.00" },
    { img: pic7, h1: "Jumpsuit", price: "$15.99" },
    { img: pic8, h1: "Flee Dress", price: "$27.99" },
    { img: pic9, h1: "Purse", price: "$14.00" },
    { img: pic10, h1: "Sleeveless Dress", price: "$30.00" },
    { img: pic12, h1: "Wedding Dress", price: "$60.99" },
    { img: pic11, h1: "Pink Heels", price: "$17.03" },
   
    // Add more items as needed
  ];

  return (
    <>
      <div className="flex text-sm md:text-[15px] gap-3 justify-between items-start px-2">
      <div className='hidden sm:block px-3 mx-3 py-2 border-2 mb-4 w-fit'>{getCurrentItemRange()}</div>
    
     
    <select id="selectOption" className='p-2 border-2  border-gray-800' name="selectOption">
        <option value="option1" >Default  sorting</option>
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
        activeClassName={"myactive"}
      />

      {/* Additional content goes here */}
    </>
  );
}
