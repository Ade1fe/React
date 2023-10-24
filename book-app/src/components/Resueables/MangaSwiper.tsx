import React from 'react';
import { useMangaData } from './useMangaData';
import MangaDetails from './MangaDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/SwiperOne.css";
import { Box } from '@chakra-ui/react';

import { MangaData } from './useMangaData'; // Import the MangaData type

interface MangaSwiperProps {
  mangaIds: number[];
}

const MangaSwiper: React.FC<MangaSwiperProps> = ({ mangaIds }) => {
  const { manga, loading } = useMangaData(mangaIds);

  const handleItemClicked = (mangaData: MangaData) => {
    if (mangaData ) {
     console.log(mangaData)
    } else {
      console.error("Invalid manga data or missing URL:", mangaData);
    }
  };

  return (
    <Box>
      {loading ? (
        <p>Loading manga data...</p>
      ) : manga.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={5.70}
        >
          {manga.map((mangaData, index) => (
            <SwiperSlide key={index} onClick={() => handleItemClicked(mangaData)}>
              <MangaDetails manga={mangaData} loading={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No manga found.</p>
      )}
    </Box>
  );
};

export default MangaSwiper;