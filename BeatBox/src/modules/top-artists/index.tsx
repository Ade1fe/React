import{ useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { fetchAccessToken } from '../../AccessToken';
import { TopArtistsCard } from '../../components';

// Define an interface for the track object
interface Track {
    id: string;
    album: {
        images: { url: string }[];
    };
    name: string;
    duration_ms: number;
    artists: { name: string }[];
    // Add other properties as needed
}

const TopArtists = () => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const accessToken = await fetchAccessToken(clientId, clientSecret);
                const topTracksIds =  '4Lt6GXGzYsa1tgkv3nGSTm,0b6rUnRfjDuv60k5oWrCKa,4qlBvxOwFy6og73eik75Ro,580Rp3F98KrnHMdg8yoGvP,6G7Jnkix0H7nBxqjqGbD50';
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${topTracksIds}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    }
                );
                setTracks(response.data.tracks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recommended tracks:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [clientId, clientSecret]);
    

    return (
        <Box>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Box>
                   {tracks.map((track, index) => (
    <Box key={`${track.id}-${index}`} mb="4">
        <TopArtistsCard
            imageUrl={track.album.images[0].url}
            artistName={track.artists[0].name}
            noOfTracks={tracks.length}
        />
    </Box>
))}

                </Box>
            )}


        </Box>
    );
};

export default TopArtists;
