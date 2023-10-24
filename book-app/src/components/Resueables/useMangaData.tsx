// useMangaData.ts

import { useEffect, useState } from 'react';

export interface MangaData {
  mal_id: string;
  title: string;
  synopsis: string;
  chapters: number;
  image_url: string;
  authors: {
    name: string;
  }[];
  genres: {
    name: string;
  }[];
  favorites: number;
  published: {
    from: string;
    to: string;
    prop: never;
    string: string;
  };
  status: string;
  url: string;
  images: {
    jpg: {
      url: string;
    };
    webp: {
      image_url: string | undefined;
      url: string;
    };
  };
  // Add more properties as needed
}

const apiUrl = 'https://api.jikan.moe/v4/manga/';
export function useMangaData(mangaIds: number[]) {
  const [manga, setManga] = useState<MangaData[]>([]); // Use an array for multiple manga
  const [loading, setLoading] = useState(true);

  useEffect(() => {

const fetchData = async () => {
  try {
    const mangaDataPromises = mangaIds.map(async (id) => {
      try {
        const response = await fetch(`${apiUrl}${id}`);
        if (response.status === 429) {
          // Handle rate limiting: Extract the 'Retry-After' header and wait before retrying.
          const retryAfter = parseInt(response.headers.get('Retry-After') || '10', 10); // Default to waiting for 10 seconds
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
          // return fetchData(id); // Retry the request.
        }
        if (!response.ok) {
          if (response.status === 404) {
            return null; // Return null to represent that manga was not found
          }
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return responseData.data;
      } catch (error) {
        console.error(`Error fetching manga with ID ${id}:`, error);
        return null; // Return null for the current manga if an error occurs
      }
    });

    const mangaData = await Promise.all(mangaDataPromises);
    // Filter out null values (manga not found) and set the rest of the data
    setManga(mangaData.filter((data) => data !== null));
    setLoading(false);
  } catch (error) {
    console.error('Error fetching manga:', error);
    setLoading(false);
  }
};


    fetchData();
  }, [mangaIds]);

  return { manga, loading };
}
