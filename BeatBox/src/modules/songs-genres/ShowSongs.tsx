
import { Box, Image, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAccessToken, fetchSongsInPlaylist } from '../../AccessToken';
import axios from 'axios';


const ShowSongs = () => {
    const { id } = useParams<{ id?: string }>();
    const [playlistSongs, setPlaylistSongs] = useState<any[]>([]);
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || 'Unknown Genre';
    const imageUrl = queryParams.get('imageUrl');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const songs = await fetchSongsInPlaylist(id);
                    setPlaylistSongs(songs);
                    console.log("song-lists: " ,songs.album);
                    // console.log("Tracks:", tracks);

                }
            } catch (error) {
                console.error('Error fetching songs in playlist:', error);
            }
        };

        fetchData();
    }, [id]);






    const handleItemClick = async (songId: string) => {
        try {
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
        
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(`https://api.spotify.com/v1/tracks/${songId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            console.log("response.data" , response.data,)
            const { name, album, external_urls ,preview_url, artists } = response.data;
            const imageUrl = album.images[0]?.url;
            const audioUrl = external_urls?.spotify;
            const previewurl = preview_url;
            const artistId = artists[0].id; 
    
            console.log("previ " , previewurl)
    
            console.log("Clicked Song:", name);
            console.log("Image URL:", imageUrl);
            console.log("Audio URL:", audioUrl);
            console.log("artistId:", artistId);

            
    
            if (previewurl) {
                navigate(`/dashboard/show-details/${artistId}?name=${encodeURIComponent(name)}&imageUrl=${encodeURIComponent(imageUrl)}&previewUrl=${encodeURIComponent(previewurl)}&artistId=${encodeURIComponent(artistId)}`, { state: { playlistSongs } });
                console.log("artistId", artistId);
            }
            else {
                // Handle the case where preview_url doesn't exist
                console.log("Preview URL not available");
            }
        } catch (error) {
            console.error('Error fetching song details:', error);
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
                />
                <Text
                    position="absolute"
                    top="20px"
                    left="20px"
                    fontFamily="Protest Revolution, sans-serif"
                    fontWeight='600'
                    textShadow='2px 3px purple'
                    fontSize={[ 'xx-large', 'xxx-large', '50px']}
                >
                    {name}
                </Text>
                {imageUrl && <Image src={imageUrl} alt={name} height="full" width="full" objectFit="cover" />}
            </Box>


            <Box textAlign="left" bg="#000" overflowX="scroll"> 
            <Table   w={['800px', '1000px', '1200px', "1400px"]} mx='auto'  textAlign='left' bg='#000' overflowX="scroll">
                <Thead bg='#000' fontSize={['lg', 'x-large', 'xx-large']}>
                    <Tr bg='#000'   fontFamily="Protest Revolution, sans-serif">
                        {/* <Th>Image</Th> */}
                        <Th py='2'>Title</Th>
                        <Th py='2'>Album</Th>
                        <Th py='2'>Artists</Th>
                        <Th py='2'> Duration</Th>
                    </Tr>
                </Thead>
                <Tbody mt='200px'>
                    {playlistSongs.map((song: any, index: number) => (
                      <Tr key={index} my='2' onClick={() => handleItemClick(song.id)} fontFamily='Kanit, sans-serif'>

                            <Td whiteSpace='nowrap' display='flex' alignItems='center' gap='3' pr='20px'>
                            {song.imageUrl && <Image borderRadius='2xl' my='2' src={song.imageUrl} alt={song.name} height="70px" width="70px" objectFit="cover" />}
                                {song.name}
                                </Td>
                            <Td pr='20px' whiteSpace='nowrap'>{song.album}</Td>
                            <Td pr='20px' whiteSpace='nowrap'>{song.artists}</Td>
                            <Td pr='20px' whiteSpace='nowrap'>{msToMinutesAndSeconds(song.duration)}</Td>
                            {/* <Td>{song.songId}</Td> */}
                            
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </Box>

        </Box>
    );
}

// Function to convert milliseconds to minutes and seconds
function msToMinutesAndSeconds(duration: number) {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${(parseInt(seconds) < 10 ? '0' : '')}${seconds}`;
}

export default ShowSongs;
