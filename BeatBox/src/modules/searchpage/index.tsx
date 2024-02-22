// import { Box, Select } from "@chakra-ui/react";
// import { SearchBar } from "../../components";
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { fetchAccessToken } from '../../AccessToken';

// const SearchPage = () => {
//     const [searchItem, setSearchItem] = useState<any[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [searchType, setSearchType] = useState("album"); // Default search type

//     const clientId = import.meta.env.VITE_CLIENT_ID;
//     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const accessToken = await fetchAccessToken(clientId, clientSecret, fetchSearchItem);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching access token:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [clientId, clientSecret]);

//     const handleSearch = (searchTerm: string) => {
//         console.log('Performing search with term:', searchTerm);
//         // Implement your search logic here, e.g., make an API request
//     };

//     const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSearchType(event.target.value);
//     };

//     const fetchSearchItem = async (accessToken: string) => {
//         try {
//             const response = await axios.get(
//                 'https://api.spotify.com/v1/search',
//                 {
//                     params: {
//                         q: 'remaster%20track:Doxy%20artist:Miles%20Davis',
//                         type: searchType, // Using selected search type
//                         market: 'ES',
//                         limit: 10,
//                         offset: 5,
//                         include_external: 'audio'
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${accessToken}`,
//                     },
//                 }
//             );
//             const items = response.data[searchType + "s"].items; // Assuming the response contains items based on the selected type
//             setSearchItem(items);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     return (
//         <Box>
//             <SearchBar onSearch={handleSearch} />
//             <Select value={searchType} onChange={handleTypeChange}>
//                 <option value="album">Albums</option>
//                 <option value="track">Tracks</option>
//                 <option value="artist">Artists</option>
//             </Select>
//             <Box zIndex='9999999' className="">
//                 {/* Render your search results here */}
//                 {loading ? (
//                     <div>Loading...</div>
//                 ) : (
//                     searchItem.map((item: any) => (
//                         <div key={item.id}>{item.name}</div>
                   
//                     ))
//                 )}
//             </Box>
//         </Box>
//     );
// };

// export default SearchPage;


























import { Box, Select } from "@chakra-ui/react";
import { SearchBar } from "../../components";
import axios from 'axios';
import { useEffect, useState } from "react";
import { fetchAccessToken } from '../../AccessToken';

const SearchPage = () => {
    const [searchItem, setSearchItem] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchType, setSearchType] = useState("album"); // Default search type
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

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
        // Whenever searchTerm or searchType changes, perform a search
        if (searchTerm.trim() !== "") {
            handleSearch(searchTerm);
        }
    }, [searchTerm, searchType]);

    const handleSearch = async (searchTerm: string) => {
        console.log('Performing search with term:', searchTerm);
        try {
            setLoading(true);
            await fetchSearchItem(searchTerm); // Fetch search items with the search term
            setLoading(false);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
        }
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(event.target.value);
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
            <SearchBar onSearch={setSearchTerm} />
            <Select value={searchType} onChange={handleTypeChange}>
                <option value="album">Albums</option>
                <option value="track">Tracks</option>
                <option value="artist">Artists</option>
            </Select>
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
