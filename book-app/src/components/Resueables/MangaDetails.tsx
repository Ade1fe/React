import React from 'react';
import { MangaData } from './useMangaData';

interface MangaDetailsProps {
  manga: MangaData | null;
  loading: boolean;
}

const MangaDetails: React.FC<MangaDetailsProps> = ({ manga, loading }) => {
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

export default MangaDetails;
