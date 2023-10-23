import { useEffect, useState } from 'react';

interface MangaData {
  title: string;
  synopsis: string;
  chapters: {
    title: string;
    chapter_number: number;
  }[];
  // Add more properties as needed
}

const apiUrl = 'https://api.jikan.moe/v4/manga/';

export function useMangaData(mangaId: number) {
  const [manga, setManga] = useState<MangaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}${mangaId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        const mangaData: MangaData = responseData.data;
        setManga(mangaData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching manga:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [mangaId]);

  return { manga, loading };
}
