import { useState, useEffect } from 'react';

export function useBookFetcher(searchQuery: string) { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${searchQuery}`
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
  }, [searchQuery]);

  return { data, loading, error };
}
