import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTracksByAlbumId } from '../../AccessToken';
import { Avatar, Box, Image, Text } from '@chakra-ui/react';
import { avatarImg } from '../../assets';



interface Track {
  id: string;
  name: string;
  imageUrl: string;
  // Add more properties if needed
}

const ShowTracksInAlbums = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { state } = location;
  const { playlistSongs } = state || {}; 
  console.log("playlistSongs: ", playlistSongs);

  // Get the value of the 'name' parameter from the query string, defaulting to 'Unknown Genre'
  const name = queryParams.get('name') || 'Unknown Genre';
  
  // Get the value of the 'id' parameter from the URL
  const albumId = location.pathname.split('/').pop() || 'Unknown Album ID'; // Using albumId instead of trackId
  console.log("albumId", albumId);
  
  // Get the value of the 'imageUrl' parameter from the query string
  const imageUrl = queryParams.get('imageUrl');

  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tracksData = await fetchTracksByAlbumId(albumId); // Call fetchTracksByAlbumId with the albumId
        setTracks(tracksData);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    fetchData();
  }, [albumId]);

  // You can use these values in your component as needed
  return (
    <Box  pos='relative' >
     
      <Text fontFamily="Protest Revolution, sans-serif" fontSize={['lg', 'x-large', 'xx-large']} pos='absolute' top='20px' left='20px'>{name}</Text>
      {imageUrl && <Image w='full'height={['auto','350px']} objectFit='cover' src={imageUrl} alt="Album Cover" />}
      {/* Render tracks or handle the data as needed */}
      <Box mt={'90px'}>
      <Text fontFamily="Protest Revolution, sans-serif" fontWeight='bold' fontSize={['lg', 'x-large',]}>Tracks in Album</Text>
        <Box display='grid'  gridTemplateColumns={['repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))']} gap='20px' >
          {tracks.map((track) => (
            <Box key={track.id} pos='relative'>    
             {  <Image src={avatarImg}  />}
            
            <Text  noOfLines={1} fontFamily='Kanit, sans-serif' pos='absolute' bottom='0' fontWeight='bold' textShadow='1px 1px purple'   fontSize={['md',]}>  {track.name}</Text>
         
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ShowTracksInAlbums;
