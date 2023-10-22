import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import Cards from "./Cards";
import { useNavigate } from 'react-router-dom';
import "../../css/SwiperOne.css"


interface Book {
    key: string;
    title: string;
    author_name: string[];
    subject: string[];
    cover_i: number | null;
    bib_key: string;
   
  }
  

interface BookListProps {
  books: Book[];
}




function BookList({ books }: BookListProps) {
    const navigate = useNavigate();

    const handleItemClicked = (book: Book) => {
        if (book.key) {
          const cleanedKey = book.key.replace('/works/', ''); 
          navigate(`/bookdetail/${cleanedKey}`);
        } else {
          console.error("Invalid book key:", book.key);
        }
      }
      
      
      

    // console.log(books);
  return (
    <Box as='section'>
     
      <Swiper
        slidesPerView={5.70}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper "
      >
        {books.map((book) => (
        <SwiperSlide key={book.key} onClick={() => handleItemClicked(book)}>
        <Cards
          pic={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          title={book.title}
          author={book.author_name ? book.author_name.join(', ') : 'Unknown'}
          genres={book.subject ? book.subject.join(', ') : 'Unknown'}
          id={book.key}
          bibKey={book.bib_key}
        />
      </SwiperSlide>
      
        ))}
      </Swiper>
    </Box>
  );
}

export default BookList;
