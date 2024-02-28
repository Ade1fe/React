
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Button } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { fetchAccessToken } from '../../AccessToken';
import { SearchArtistComp } from "..";
import { ArtistCard } from "../../components";

const SearchAlbums = () => {
    const [searchItem, setSearchItem] = useState<any[]>([]);
    const [loading, setLoading] = useState(false); // Change initial loading state to false
    const [searchTerm, setSearchTerm] = useState(""); // State to hold search term
    const [noResults, setNoResults] = useState(false); // State to track if no results found
    const [isOpen, setIsOpen] = useState(true);

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (searchTerm) {
            handleSearch(searchTerm);
        }
    }, [searchTerm]);

    const fetchSearchItem = async (searchTerm: string) => {
        try {
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(
                'https://api.spotify.com/v1/search',
                {
                    params: {
                        q: searchTerm,
                        type: 'album', // Change type to 'album' to search for albums
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
            if (response.data.albums.items.length === 0) { // Check if no albums found
                setNoResults(true);
            } else {
                setSearchItem(response.data.albums.items);
                setNoResults(false);
            }
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
        }
    };

    const handleSearch = async (searchTerm: string) => {
        console.log('Performing search with term:', searchTerm);
        try {
            setLoading(true); 
            await fetchSearchItem(searchTerm);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
        }
    };

    return (
        <Box mb='10'>
            <Box w={['full']}>
                <SearchArtistComp placholder={"Search albums "}
                    onSearch={(term) => setSearchTerm(term)} 
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
                {noResults && !loading && ( // Display no results message when no results found
                    <Box zIndex='9999999' className="">
                        No results found.
                    </Box>
                )}

                <Box zIndex='9999999' pos='relative'>
                    {isOpen && (
                        <>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                searchItem.map((item: any) => (
                                    <SwiperSlide key={item.id}>
                                        {/* Render album card */}
                                        <ArtistCard artist={item} albumName='Album'/> 
                                    </SwiperSlide>
                                ))
                            )}
                        </>
                    )}
                    {!isOpen && (
                        <Button onClick={toggleOpen} variant="outline" size="sm">Open</Button>
                    )}

                </Box>
                <Button onClick={toggleOpen} pos='absolute' bottom='0px' zIndex='999999' right='50px' variant="outline" size="sm">Close</Button>
            </Swiper>
        </Box>
    );
};

export default SearchAlbums;
