
import { Box, Image, Text } from '@chakra-ui/react';
import{ useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSongsByGenre, fetchSongsInPlaylist } from '../../AccessToken';
import { JobAdverts } from '..';

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

          <Box position="relative" height={['300px', '340px', '360px',  "390px"]} marginBottom="50px">
    <Box
        position="absolute"
        top="0"
        left="0"
        width="full"
        height={['300px', '340px', '360px',  "390px"]} 
        backgroundColor="rgba(0, 0, 0, 0.5)"
        // backdropBlur="blur(10px)"
    />
    <Text    position="absolute"
        top="20px"
        left="20px" fontFamily="Protest Revolution, sans-serif" fontWeight='600'  textShadow='2px 3px purple' fontSize={['lg', 'x-large', 'xx-large']}>{name}</Text>
    {imageUrl && <Image src={imageUrl} alt={name} height="full" width="full" objectFit="cover" />}
</Box>

    <JobAdverts />

            <Box display='grid' fontFamily='Kanit, sans-serif' gridTemplateColumns={['repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))']} gap='20px' >
                {songs.map((song, index) => (
    <Box key={index} onClick={() => handleSongClick(song)} _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}>
        <Box display="grid" alignItems="center" mb={4} >
            <Image src={song.imageUrl} objectFit='cover' alt={song.name} borderRadius="md" mr={4} />
        </Box>
    </Box>
))}

            </Box>


        </Box>
    );
}

export default SongListsComp;



  {/* <Box>
                                <Text fontWeight="bold" noOfLines={1}>{song.name}</Text>
                                <Text noOfLines={1}>ID: {song.id}</Text>
                            </Box> */}