
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Button } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { fetchAccessToken } from '../../AccessToken';
import { SearchArtistComp } from "..";
import { ArtistCard } from "../../components";

const SearchArtistsPage = () => {
    const [searchItem, setSearchItem] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, ] = useState(""); 
    const [isOpen, setIsOpen] = useState(true);
    const [, setNoResults] = useState(false); 

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await fetchAccessToken(clientId, clientSecret, fetchSearchItem);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching access token:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [clientId, clientSecret]);

    const fetchSearchItem = async (searchTerm: string) => {
        try {
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(
                'https://api.spotify.com/v1/search',
                {
                    params: {
                        q: searchTerm,
                        type: 'artist',
                        market: 'ES',
                        limit: 20,
                        offset: 5,
                        include_external: 'audio'
                    },
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );
            if (response.data.artists.items.length === 0) {
                setNoResults(true);
            } else {
                setSearchItem(response.data.artists.items);
                setNoResults(false);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleSearch = async (searchTerm: string) => {
        console.log('Performing search with term:', searchTerm);
        try {
            setLoading(true);
            await fetchSearchItem(searchTerm);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
        }
    };

    return (
        <Box  mb='10'>
            <Box w={['full']}>
                <SearchArtistComp
                    onSearch={handleSearch}
                />
            </Box>

         

<Swiper
      slidesPerView={6.40}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      breakpoints={{
             // when window width is >= 320px
             320: {
              slidesPerView: 1.70,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2.20,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.50,
              spaceBetween: 10
            },
            740: {
              slidesPerView: 2.80,
              spaceBetween: 20
            },
            840: {
              slidesPerView: 3.0,
              spaceBetween: 20
            },
            940: {
              slidesPerView: 3.30,
              spaceBetween: 20
            },
            1040: {
              slidesPerView: 3.40,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 3.80,
              spaceBetween: 20
            },
            1240: {
              slidesPerView: 4.20,
              spaceBetween: 20
            },
            1340: {
              slidesPerView: 4.80,
              spaceBetween: 20
            },
            1440: {
              slidesPerView: 6.0,
              spaceBetween: 20
            },
          }}
    >
   {searchTerm && searchItem.length === 0 && !loading && (
                <Box zIndex='9999999' className="">
                    No results found.
                </Box>
            )}

{searchItem.length > 0 && (
  <Box zIndex='9999999' pos='relative'>
    {isOpen && (
      <>
      
        {loading ? (
          <div>Loading...</div>
        ) : (
          searchItem.map((item: any) => (
            <SwiperSlide key={item.id}> 
              <ArtistCard artist={item} />
            </SwiperSlide>
          ))
        )}
        
      </>
    )}
    {!isOpen && (
      <Button onClick={toggleOpen} variant="outline" size="sm">Open</Button>
    )}
     
  </Box>
)}
 <Button onClick={toggleOpen} pos='absolute' bottom='0px' zIndex='999999' right='50px' variant="outline" size="sm">Close</Button>
    </Swiper>
        </Box>
    );
};

export default SearchArtistsPage;
