
import React, { useEffect, useState } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';
import pic from "../assets/9dea64c6d9c64604a45ba55616c1d547-removebg-preview.png"
import AnimeAd from '../components/AnimeAd';
import Footer from './../components/Footer';


const GenrePage = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch anime by genre and page
    const fetchAnimeByGenreAndPage = async () => {
      try {
        setLoading(true); // Set loading to true when fetching new data
        let allAnimeData = [];

        // Fetch up to 100 anime entries (maximum)
        for (let page = 1; page <= 10; page++) {
          // Construct the URL for fetching anime by genre and page
          const genreUrl = `https://api.jikan.moe/v4/anime?genre=${genre}&page=${page}`;

          // Make the fetch request
          const response = await fetch(genreUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          // Parse the response as JSON
          const data = await response.json();

          // Extract the list of anime from the response
          const animeData = data.data || [];

          // Append the anime data to the allAnimeData array
          allAnimeData = [...allAnimeData, ...animeData];

          // If we have fetched 100 anime or reached the last page, exit the loop
          if (allAnimeData.length >= 250 || animeData.length === 0) {
            break;
          }

          // Add a delay of 1 second between requests to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        // Filter the anime data to only include entries with the desired genre
        const filteredAnime = allAnimeData.filter((anime) =>
          anime.genres.some((genreItem) => genreItem.name.toLowerCase().includes(genre.toLowerCase()))
        );

        // Update the state with the filtered anime list and set loading to false
        setAnimeList(filteredAnime);
      } catch (error) {
        console.error('Error fetching anime by genre:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    // Call the fetchAnimeByGenreAndPage function
    fetchAnimeByGenreAndPage();
  }, [genre]);

   const handleWatchNowClick = (animeId) => {
    const encodedId = encodeURIComponent(animeId);
    navigate(`/animeDetails/${encodedId}`);
  };

  return (
    <div className='container mx-auto '>
       <AnimeAd  img={pic}/>
      <div>
        <h1 className='text-2xl px-3 font-bold mt-6 mb-3 text-blue-500'>{genre} Anime</h1>
        {loading ? (
          <p>Loading...</p>
        ) : animeList.length > 0 ? (
          <div className='flex flex-wrap justify-evenly items-center gap-2 md:gap-4'>
            {animeList.map((anime) => (
              <div key={anime.mal_id}  className='w-[150px] sm:w-[200px] h-auto bg-[#111]'>
                <div className='w-full h-[200px] cursor-pointer' onClick={() => handleWatchNowClick(anime.mal_id)} >
                  <img src={anime.images.webp.large_image_url} alt={anime.title} className='w-full h-full object-cover' />
                </div>
                <div className='bg-gray-0 p-2 text-sm'>
                  <h2 className='font-bold'>{anime.title}</h2>
                  <p>{anime.duration}</p>
                  <div className='flex gap-2 justify-between'>
                    <p>{anime.type}</p>
                    <p className='uppercase'>epi: {anime.episodes ? anime.episodes : ''}</p>
                  </div>
                  <div className='flex gap-2 w-full flex-wrap '>
                    <p></p>
                    {anime.genres.map((genre) => (
                      <Link to={`/genre/${genre.name}`} className='p-1 bg-[#222]' key={genre.name}>
                        {genre.name}
                      </Link>
                    )).reduce((prev, curr) => [prev, ' ', curr])}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No anime found for this genre or filter criteria.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GenrePage;


