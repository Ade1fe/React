

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Image, Text, useToast } from '@chakra-ui/react';
import { fetchAccessToken, fetchRecommendations, fetchRelatedArtists } from '../../AccessToken';
import axios from 'axios';
import { JobAdverts } from '..';

interface SongDetails {
    name: string;
    imageUrl: string;
    previewUrl: string;
    artistId: string;
}

interface Artist {
    id: string;
    name: string;
    images?: { url: string }[];
}

interface Track {
    id: string;
    name: string;
    album?: {
        images: { url: string }[];
    };
}

const ShowDetails: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();

    const [songDetails, setSongDetails] = useState<SongDetails | null>(null);
    const [relatedArtists, setRelatedArtists] = useState<Artist[]>([]);
    const [recommendations, setRecommendations] = useState<Track[]>([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('name');
        const imageUrl = searchParams.get('imageUrl');
        const previewUrl = searchParams.get('previewUrl');
        const artistId = searchParams.get('artistId');

        if (name && imageUrl && previewUrl && artistId) {
            setSongDetails({ name, imageUrl, previewUrl, artistId });
            fetchRelatedArtists(artistId)
                .then(relatedArtists => setRelatedArtists(relatedArtists))
                .catch(error => console.error('Error fetching related artists:', error));

            fetchRecommendations([artistId], [], [])
                .then(recommendations => setRecommendations(recommendations))
                .catch(error => console.error('Error fetching recommendations:', error));
        }
    }, [location.search]);

    const handleItemClick = async (artistId: string) => {
        try {
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
        
            const accessToken = await fetchAccessToken(clientId, clientSecret);
            const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const { tracks } = response.data;

            if (tracks.length > 0) {
                const track = tracks[0];
                const { name, album, preview_url } = track;
                const imageUrl = album.images.length > 0 ? album.images[0].url : undefined;

                if (preview_url) {
                    navigate(`/dashboard/show-details/${artistId}?name=${encodeURIComponent(name)}&imageUrl=${encodeURIComponent(imageUrl)}&previewUrl=${encodeURIComponent(preview_url)}&artistId=${encodeURIComponent(artistId)}`);
                } else {
                    toast({
                        title: "Feature Not Available",
                        render: () => (
                            <Box color='white' zIndex='9999' p={3} bg='green.500'>
                            Preview URL not available
                            </Box>
                          ),
            
                        status: "info",
                        position: 'top-right',
                        duration: 5000,
                        isClosable: true,
                    });
                    console.log("Preview URL not available");
                }
            } else {
                console.log("No tracks found for the artist");
            }
        } catch (error) {
            console.error('Error fetching artist details:', error);
        }
    };

    const handleRecommendationClick = () => {
        toast({
            title: "Feature Not Available",
            render: () => (
                <Box color='white' zIndex='999' p={3} bg='green.500'>
                This feature is currently not available, but you can search for it."     
                </Box>
              ),

            status: "info",
            position: 'top-right',
            duration: 5000,
            isClosable: true,
        });
    };


    const fetchRecommendationsWithRetry = async (artistId: string, retryCount: number = 3): Promise<any> => {
        try {
            const recommendations = await fetchRecommendations([artistId], [], []);
            return recommendations;
        } catch (error:any) {
            if (error.response && error.response.status === 429 && retryCount > 0) {
                const waitTimeInSeconds = 5 * Math.pow(2, 3 - retryCount); // Exponential backoff
                await new Promise(resolve => setTimeout(resolve, waitTimeInSeconds * 1000));
                return fetchRecommendationsWithRetry(artistId, retryCount - 1);
            } else {
                throw error;
            }
        }
    };
    

    return (
        <div>
            {songDetails && (
                <>
                <Box h="400px"  pos="relative">
                    <Text pos="absolute" top='10px'  
                    fontFamily="Protest Revolution, sans-serif"
                    fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}
                    textShadow='2px 3px purple' left={[ '20px']}>{songDetails.name}</Text>
                    <Image height="full" width="full" objectFit="cover" src={songDetails.imageUrl} alt="Album Cover" />
                  <Box pos="absolute" bottom='10px' left={[ '20px']}>  <audio controls src={songDetails.previewUrl} ></audio></Box>
                    </Box>
                </>
            )}
            

            <Box my="60px">
           <div className="">
           <Text mb='10px' fontFamily='Kanit, sans-serif'  textShadow='2px 1px purple'
                    fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}>Related Artists</Text>
                <Box display='grid'  gridTemplateColumns={['repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))']} gap='20px' >
                    {relatedArtists.map(artist => (
                        <Box key={artist.id}onClick={() => handleItemClick(artist.id)} w='100%' h={['auto']}  pos='relative'  _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }} cursor='pointer'>
                          <Text fontWeight='500' fontSize={['sm', 'md','lg',]} textShadow='2px 3px purple'>  {artist.name}</Text>
                            {artist.images && artist.images.length > 0 && <Image src={artist.images[0].url}  borderRadius='20px' shadow='base' alt={artist.name} />}
                        </Box>
                    ))}
                </Box>
           </div>

                <JobAdverts />

               {/* <Box mt="50px">
               <Text mb='10px' fontFamily='Kanit, sans-serif'  textShadow='2px 1px purple'
                    fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}>Recommendations</Text>
                <Box  display='grid' gridTemplateColumns={['repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))']} gap='20px'>
                    {recommendations.map(track => (
                        <Box key={track.id} onClick={handleRecommendationClick}  _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }} cursor='pointer'>
                         <Text className="" fontWeight='500' fontSize={['sm', 'md','lg',]} textShadow='2px 3px purple'>   {track.name}</Text>
                            {track.album && track.album.images && track.album.images.length > 0 && <Image borderRadius='20px' shadow='base' src={track.album.images[0].url} alt={track.name} />}
                        </Box>
                    ))}
                </Box>
               </Box> */}
            </Box>
        </div>
    );
};

export default ShowDetails;
