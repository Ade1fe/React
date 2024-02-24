import { useEffect, useState } from 'react';
import { fetchGenres, fetchSongsByGenre } from '../../AccessToken';
import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export interface Genre {
    id: string;
    name: string;
    imageUrl: string;
}


const GenresComponent = () => {
    const [genres, setGenres] = useState<Genre[]>([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genresData = await fetchGenres();
                setGenres(genresData);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchData();
    }, []);



    const handleGenreClick = async (id: string, name: string, imageUrl: string) => {
        console.log("Clicked genre ID:", id);
        try {
            const songs = await fetchSongsByGenre(id);
            console.log("Songs for genre ID", id, ":", songs);
          navigate(`/song-list/${id}?name=${encodeURIComponent(name)}&imageUrl=${encodeURIComponent(imageUrl)}`);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };
    return (
        <Box mb={[10,12,14]}>
        <Text mb={[2,3]} fontFamily="Protest Revolution, sans-serif" fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}>Browse all</Text>
        <Box display='grid' fontFamily='Kanit, sans-serif' gridTemplateColumns={['repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))']} gap='20px'>
            {genres.map(genre => (
                <Box key={genre.id} pos='relative'  onClick={() => handleGenreClick(genre.id, genre.name, genre.imageUrl)}>
                    <Image src={genre.imageUrl} alt={genre.name} borderRadius='2xl' />
                    <Text fontWeight='600' textShadow='2px 3px purple' fontSize={['md', 'lg', ]} pos='absolute' top='10px' left='10px'>{genre.name}</Text>
                </Box>
            ))}
        </Box>
    </Box>
    );
};

export default GenresComponent;
