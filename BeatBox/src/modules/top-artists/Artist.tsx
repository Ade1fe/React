// import React, { useState } from 'react';
// import axios from 'axios';
// import { fetchAccessToken } from '../../AccessToken';
// import { Input } from '@chakra-ui/react';

// const Artist = () => {
//     const [artistName, setArtistName] = useState('');
//     const [artistId, setArtistId] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const clientId = import.meta.env.VITE_CLIENT_ID;
//     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

//     const searchArtist = async () => {
//         try {
//             setLoading(true);
//             const accessToken = await fetchAccessToken(clientId, clientSecret); // Assuming you have a function to fetch the access token
//             const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist`, {
//                 headers: {
//                     'Authorization': `Bearer ${accessToken}`
//                 }
//             });

//             // Assuming the first item in the search results is the desired artist
//             const id = response.data.artists.items[0].id;
//             setArtistId(id);
//             setLoading(false);
//             setError(null);
//         } catch (error:any) {
//             console.error('Error fetching artist ID:', error.response.data);
//             setArtistId(null);
//             setLoading(false);
//             setError('Error fetching artist ID' as unknown as null);

//         }
//     };

//     return (
//         <div>
//             <Input
//                 color='black'
//                 type="text"
//                 placeholder="Enter artist name"
//                 value={artistName}
//                 onChange={(e) => setArtistName(e.target.value)}
//             />
//             <button onClick={searchArtist}>Search</button>
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {artistId && <p>Artist ID: {artistId}</p>}
//         </div>
//     );
// };

// export default Artist;
















import React, { useState } from 'react';
import axios from 'axios';
import { fetchAccessToken } from '../../AccessToken';
import { Input, Button } from '@chakra-ui/react';

const ArtistCompoo = () => {
    const [artistName, setArtistName] = useState('');
    const [artistId, setArtistId] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const searchArtist = async () => {
        try {
            setLoading(true);
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const id = response.data.artists.items[0].id;
            setArtistId(id);
            setLoading(false);
            setError(null);
        } catch (error:any) {
            console.error('Error fetching artist ID:', error.response?.data || error.message);
            setArtistId(null);
            setLoading(false);
            setError('Error fetching artist ID' as unknown as null);
        }
    };

    const fetchRelatedArtists = async () => {
        try {
            setLoading(true);
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const relatedIds = response.data.artists.map((artist: { id: any; }) => artist.id);
            setRelatedArtists(relatedIds);
            setLoading(false);
            setError(null);
        } catch (error:any) {
            console.error('Error fetching related artists:', error.response?.data || error.message);
            setRelatedArtists([]);
            setLoading(false);
            setError('Error fetching related artists' as unknown as null);
        }
    };

    return (
        <div>
            <Input
                color='black'
                type="text"
                placeholder="Enter artist name"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
            />
            <Button onClick={searchArtist}>Search</Button>
            <Button onClick={fetchRelatedArtists} disabled={!artistId}>Get Related Artists</Button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {relatedArtists.length > 0 && (
                <div>
                     {artistId && <p>Artist ID: {artistId}</p>}
                    <h3>Related Artists IDs:</h3>
                    <ul>
                        {relatedArtists.map((relatedId, index) => (
                            <li key={index}>{relatedId}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ArtistCompoo;
