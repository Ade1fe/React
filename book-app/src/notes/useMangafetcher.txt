import React, { useEffect, useState } from 'react';

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

const MangaComponent: React.FC<{ mangaId: number }> = ({ mangaId }) => {
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
      const mangaData: MangaData = responseData.data; // Access data from responseData
      setManga(mangaData);
      setLoading(false);
      } catch (error) {
        console.error('Error fetching manga:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [mangaId]);
  

  return (
    <div>
      {loading ? (
        <p>Loading manga data...</p>
      ) : manga ? (
        <div>
          <h2>{manga.title}</h2>
          <p>{manga.synopsis}</p>
          {/* Render other manga data here */}
        </div>
      ) : (
        <p>Manga not found.</p>
      )}
    </div>
  );
};

export default MangaComponent;
