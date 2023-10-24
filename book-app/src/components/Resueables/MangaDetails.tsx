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
          <p>Chapters: {manga.chapters}</p>
          <p>Authors: {manga.authors && manga.authors.map((author) => author.name).join(', ')}</p>
          <p>Genres: {manga.genres && manga.genres.map((genre) => genre.name).join(', ')}</p>
          <p>Favorites: {manga.favorites}</p>
          <p>Published: {manga.published.string}</p>
          <p>Status: {manga.status}</p>
          <a href={manga.url} target="_blank" rel="noopener noreferrer">
            View on MyAnimeList
          </a>
         <img src={manga.images.webp.image_url} alt={`Cover for ${manga.title}`} />

          {/* Render other manga data here */}
        </div>
      ) : (
        <p>Manga not found.</p>
      )}
    </div>
  );
};

export default MangaDetails;
