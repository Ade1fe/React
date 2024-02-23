import { useEffect, useState } from 'react';
import { fetchGenres } from '../../AccessToken';

export interface Genre {
    id: string;
    name: string;
    imageUrl: string;
}


const GenresComponent = () => {
    const [genres, setGenres] = useState<Genre[]>([]); 

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

    return (
        <div>
            <h2>Genres</h2>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>
                        <img src={genre.imageUrl} alt={genre.name} />
                        <span>{genre.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenresComponent;
