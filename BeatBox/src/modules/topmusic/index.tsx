import { Box, ListItem, OrderedList } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { fetchAccessToken } from '../../AccessToken';
import { TopMusicCard } from '../../components';

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

const TopMusicComp = () => {
    const [recommendedTracks, setRecommendedTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const accessToken = await fetchAccessToken(clientId, clientSecret);
                const topTracksIds = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B,11dFghVXANMlKmJXsNCbNl';
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${topTracksIds}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    }
                );
                setRecommendedTracks(response.data.tracks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recommended tracks:', error);
                setLoading(false);
            }
        };

        fetchData();

    }, [clientId, clientSecret]);


    return (
        <Box display='grid' gap='4'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                recommendedTracks && recommendedTracks.length > 0 ? (
                    <OrderedList >
                        {recommendedTracks.map((track, index) => (
                            <ListItem key={index} mb={4} fontFamily='Dancing Script, cursive'>
                                <TopMusicCard 
                                    imageUrl={track.album.images[0].url}
                                    musicName={`${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`}
                                    duration={msToMinutesAndSeconds(track.duration_ms)}
                                />
                            </ListItem>
                        ))}
                    </OrderedList>
                ) : (
                    <div>No recommended tracks available</div>
                )
            )}
        </Box>
    );
    
};

// Function to convert milliseconds to minutes and seconds
function msToMinutesAndSeconds(ms: number) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${(parseInt(seconds) < 10 ? '0' : '')}${seconds}`;
}

export default TopMusicComp;
