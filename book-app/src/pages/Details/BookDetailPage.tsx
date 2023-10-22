import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



interface BookDetail {
    cover_i: number | null;
    title: string;
    authors: Array<{ name: string }>;
    description: { type: string; value: string };
    created: { type: string; value: string };
    last_modified: { type: string; value: string };
    revision: number;
    subject_places: string[];
    subjects: string[];
    covers: Array<number | string>; 
    image: string; 
  }
  

  
  
  

const BookDetailPage = () => {
  const [bookData, setBookData] = useState<BookDetail | null>();
  const { bookKey } = useParams<{ bookKey: string }>();

  useEffect(() => {
    const apiUrl = `https://openlibrary.org/works/${bookKey}.json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: BookDetail) => {
        setBookData(data);
        console.log(bookData);

      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [bookKey]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
  <h1>Book Detail</h1>
  <p>Book Key: {bookKey}</p>
  <img src={`https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`} alt="Book Cover" />



  <h2>{bookData.title}</h2>
  <p>
    Author: {bookData.authors && bookData.authors.length > 0
      ? bookData.authors.map((author) => author.name).join(', ')
      : 'Unknown'}
  </p>
  <p>Description: {bookData.description?.value}</p>
  <p>Created: {bookData.created?.value}</p>
  <p>Last Modified: {bookData.last_modified?.value}</p>
  <p>Revision: {bookData.revision}</p>
  <p>Subject Places: {bookData.subject_places.join(', ')}</p>
  <p>Subjects: {bookData.subjects.join(', ')}</p>
  <p>Covers: {bookData.covers.map((imageID) => (
  <img
    key={imageID}
    src={`https://covers.openlibrary.org/b/id/${imageID}-M.jpg`}
    alt={`Cover ${imageID}`}
  />
))}</p>


</div>

  );
};

export default BookDetailPage;
