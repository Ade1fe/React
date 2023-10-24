import React from 'react';
import { MangaData } from './useMangaData';
import Cards from './Cards';
import { Box } from '@chakra-ui/react';

interface MangaDetailsProps {
  manga: MangaData; // Update the prop type to a single manga
  loading: boolean;
}

const MangaDetails: React.FC<MangaDetailsProps> = ({ manga, loading }) => {
  return (
    <Box>
      {loading ? (
        <p>Loading manga data...</p>
      ) : manga ? ( // Check if manga is defined
        <Box key={manga.mal_id}>
          <Cards
            pic={manga.images.webp.image_url || ''}
            // alt={`Cover for ${manga.title}`}
            title={manga.title}
            author={manga.authors.map((author) => author.name).join(', ')}
            genres={manga.genres.map((genre) => genre.name).join(', ')}
            id={''}
            bibKey={''}
          />
        </Box>
      ) : (
        <p>Manga not found.</p>
      )}
    </Box>
  );
};

export default MangaDetails;
