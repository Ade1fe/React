
import { Box, Image, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSongsInPlaylist } from '../../AccessToken';

const ShowSongs = () => {
    const { id } = useParams<{ id?: string }>();
    const [playlistSongs, setPlaylistSongs] = useState<any[]>([]);
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || 'Unknown Genre';
    const imageUrl = queryParams.get('imageUrl');

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


            <Box overflowX="auto" w="full" maxW="1400px"> 
            <Table  w='full' textAlign='left' bg='#000' overflowX="scroll">
                <Thead bg='#000'>
                    <Tr bg='#000'>
                        {/* <Th>Image</Th> */}
                        <Th py='2'>Title</Th>
                        <Th py='2'>Album</Th>
                        <Th py='2'>Artists</Th>
                        <Th py='2'> Duration</Th>
                    </Tr>
                </Thead>
                <Tbody mt='200px'>
                    {playlistSongs.map((song: any, index: number) => (
                        <Tr key={index} my='2'>
                            {/* <Td>
                                {song.imageUrl && <Image borderRadius='2xl' my='2' src={song.imageUrl} alt={song.name} height="70px" width="70px" objectFit="cover" />}
                            </Td> */}
                            <Td display='flex' alignItems='center' gap='3' >
                            {song.imageUrl && <Image borderRadius='2xl' my='2' src={song.imageUrl} alt={song.name} height="70px" width="70px" objectFit="cover" />}
                                {song.name}
                                </Td>
                            <Td>{song.album}</Td>
                            <Td>{song.artists}</Td>
                            <Td>{msToMinutesAndSeconds(song.duration)}</Td>
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
