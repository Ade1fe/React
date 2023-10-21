import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react'

interface Book {
  key: string; 
  title: string;
  author_name: string[] | undefined;
  subject: string[] | undefined;
  cover_i: number | undefined;
}

function BookApp() {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=Grisham"
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        setData(json.docs || []);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box as="section" bg="#">
      <h1>My Book App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((book) => (
            <li key={book.key}>
              <h3>{book.title}</h3>
              <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <p>Genre: {book.subject ? book.subject.join(', ') : 'Unknown'}</p>
              {book.cover_i && (
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
              )}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default BookApp;
