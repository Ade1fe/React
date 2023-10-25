import { useState, useEffect } from 'react';


export interface BookDetail {
    cover_i: number | null;
    title: string;
    authors: Array<{ name: string }>;
    description: { type: string; value: string } | undefined;
    created: { type: string; value: string } | undefined;
    last_modified: { type: string; value: string } | undefined;
    revision: number | undefined;
    subject_places: string[] | undefined;
    subjects: string[] | undefined;
    covers: Array<number | string> | undefined;
    image: string;
  }

const useBookDetails = (bookKey: string) => {
  const [bookData, setBookData] = useState<BookDetail | null>(null);

  useEffect(() => {
    const apiUrl = `https://openlibrary.org/works/${bookKey}.json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: BookDetail) => {
        setBookData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [bookKey]);

  return bookData;
};

export default useBookDetails;
