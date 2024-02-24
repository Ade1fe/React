
import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSongsByGenre, fetchSongsInPlaylist } from '../../AccessToken';

const SongListsComp = () => {
    const navigate = useNavigate();
    const [songs, setSongs] = useState<any[]>([]);
    const { genreId } = useParams<{ genreId: string }>();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || 'Unknown Genre';
    const imageUrl = queryParams.get('imageUrl');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (genreId) {
                    const fetchedSongs = await fetchSongsByGenre(genreId);
                    setSongs(fetchedSongs);
                }
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchData();
    }, [genreId]);



const handleSongClick = async (song: any) => {
    try {
        // Call fetchSongsInPlaylist function with the playlist ID
        const playlistId = song.id; // Assuming song.id is the playlist ID
        const playlistSongs = await fetchSongsInPlaylist(playlistId);
        console.log("Songs in playlist", playlistId, ":", playlistSongs);
        
        // Obtain id, name, and imageUrl from the song object
        const { id, name, imageUrl } = song;

        // Use the obtained id in the navigate function
        navigate(`/dashboard/show-songs/${id}?name=${encodeURIComponent(name)}&imageUrl=${encodeURIComponent(imageUrl)}`, { state: { playlistSongs } });
    } catch (error) {
        console.error('Error fetching songs in playlist:', error);
    }
};


    return (
        <Box>
            <Box className="">
                <Text>{name}</Text>
                {imageUrl && <Image src={imageUrl} alt={name} />}
            </Box>
            <ul>
                {songs.map(song => (
                    <li key={song.id} onClick={() => handleSongClick(song)}>
                        <Box display="flex" alignItems="center" mb={4}>
                            <Image src={song.imageUrl} alt={song.name} width={100} height={100} borderRadius="md" mr={4} />
                            <Box>
                                <Text fontWeight="bold">{song.name}</Text>
                                <Text>ID: {song.id}</Text>
                            </Box>
                        </Box>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default SongListsComp;
