import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import "../../css/SwiperOne.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Define a type for the image data
type ImageData = {
  path: string; // Image URL
  thumbs: {
    small: string; // Small thumbnail URL
    // You can include other thumbnail sizes here if needed
  };
};

const DiaryEntry = () => {

    const bgs = useColorModeValue('#386641', 'gray.700');

  // Define your Wallhaven API key
  const apiKey = 'ZdH1EeNKVAGkwMdapHkyXJz73ZzXu0db';

  const [images, setImages] = useState<ImageData[]>([]);

  // Define a function to fetch images
  async function fetchWallhavenImages() {
    try {
      const response = await axios.get('https://wallhaven.cc/api/v1/search', {
        params: {
          q: 'nature', // Example query, change this to your desired search query
          apikey: apiKey,
          page: 1, // Page number
          //   tag: 'trees',
          //   category: 'anime',
        },
      });

      // Ensure the response contains data before attempting to set images
      if (response.data && response.data.data) {
        const fetchedImages: ImageData[] = response.data.data;
        setImages(fetchedImages);
      } else {
        console.error('API response does not contain image data.');
      }
    } catch (error) {
      console.error('Error fetching Wallhaven images:', error);
    }
  }

  // Call the function to fetch images
  useEffect(() => {
    fetchWallhavenImages();
  }, []);

  return (
    <Box mt={[10,12,14]}>

<Swiper
        slidesPerView={10.4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper "
      > 
      {images.map((image, index) => (
         <SwiperSlide key={index}>  
        <Box
          key={index}
          border="2px solid" 
          borderColor={bgs}
          borderRadius="50%"
          width="100px" 
          height="100px"
          p={1} 
          overflow="hidden"
          shadow={'md'}
        >
          <Box
            width="100%" 
            height="100%" 
            borderRadius="50%" 
            overflow="hidden"
           
          >
            <Image
              src={image.thumbs.small}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        </Box>
        </SwiperSlide>
      ))}

</Swiper>
    </Box>
  );
};

export default DiaryEntry;
