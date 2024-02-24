import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSongsInPlaylist } from '../../AccessToken';

const ShowSongs = () => {
    const { id } = useParams<{ id?: string }>();
    const [playlistSongs, setPlaylistSongs] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const songs = await fetchSongsInPlaylist(id);
                    setPlaylistSongs(songs);
                }
            } catch (error) {
                console.error('Error fetching songs in playlist:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <Box>
            {playlistSongs.map((song: any, index: number) => (
                <Box key={index} display="flex" alignItems="center" mb={4}>
                    {/* Check if imageUrl exists before rendering Image component */}
                    {song.imageUrl && <Image src={song.imageUrl} alt={song.name} width={100} height={100} borderRadius="md" mr={4} />}
                    <Box>
                        <Text fontWeight="bold">{song.name}</Text>
                        <Text>ID: {song.id}</Text>
                        {/* Check if primaryColor is not null before rendering */}
                        {song.primaryColor && <Text>Primary Color: {song.primaryColor}</Text>}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default ShowSongs;
