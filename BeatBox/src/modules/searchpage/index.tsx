
import { Box,  } from "@chakra-ui/react";
import { SearchBar } from "../../components";
import axios from 'axios';
import { useEffect, useState } from "react";
import { fetchAccessToken } from '../../AccessToken';

const SearchPage = () => {
    const [searchItem, setSearchItem] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchType, setSearchType] = useState<"album" | "track" | "artist">("album");
    const [searchTerm, setSearchTerm] = useState(""); 

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

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

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            handleSearch(searchTerm);
        }
    }, [searchTerm, searchType]);

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

    const handleTypeChange = (searchType: string) => {
        if (searchType === "album" || searchType === "track" || searchType === "artist") {
            setSearchType(searchType as "album" | "track" | "artist");
        } else {
            // Handle invalid search type here if needed
        }
    };
    
    

    const fetchSearchItem = async (searchTerm: string) => {
        try {
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(
                'https://api.spotify.com/v1/search',
                {
                    params: {
                        q: searchTerm,
                        type: searchType,
                        market: 'ES',
                        limit: 10,
                        offset: 5,
                        include_external: 'audio'
                    },
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );
            const items = response.data[searchType + "s"].items;
            setSearchItem(items);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <Box>
        <Box w={['full']}>
        <SearchBar
    onSearch={setSearchTerm}
    searchType={searchType}
    handleTypeChange={handleTypeChange}
/>

        </Box>
    
        <Box zIndex='9999999' className="">
            {loading ? (
                <div>Loading...</div>
            ) : (
                searchItem.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                ))
            )}
        </Box>
    </Box>
    
    );
};

export default SearchPage;
