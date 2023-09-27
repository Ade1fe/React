import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

const AnimeDetail = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null); 
  // const airedDate = animeData.aired.from.split('T')[0];

  
  useEffect(() => {
    // Fetch anime data from the Jikan API
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Log the entire API response to understand its structure
        console.log('API Response:', data);

        // Extract the anime data from the response
        const animeData = data || {};
        console.log('Anime Data:', animeData);

        // Update the state with the extracted anime data
        setAnimeData(animeData);
      })
      .catch((error) => {
        console.error('Error fetching anime data:', error);
      });
  }, [id]); // Include 'id' as a dependency for the useEffect

  // Render conditionally based on whether animeData is available
  return (
    <div className="">
       {/* <span>{id}</span> */}
      {animeData ? (
        <div>
         
           <div className="flex gap-2 items-center flex-wrap px-2 pb-5 pt-2">
     <Link to="/anime" className='text-lg text-gray-300'>Home</Link> 
      <span>||</span>
      <h2 className='text-sm text-gray-500'>{animeData.data.type}</h2>
      <span>||</span>
      <h1 className="font-bold text-xs text-gray-700">{animeData.data.title_japanese}</h1>
     </div>

          <div className='hidden md:block w-full h-[550px] relative'>
            <img src={animeData.data.images.webp.large_image_url} className='w-full h-full object-cover' alt="" />
            <div className="absolute top-0 left-0 bg-black opacity-90 backdrop-blur-md h-full w-full"></div>
          </div>

          <div className="grid static md:absolute top-[100px] left-3 md:flex gap-5 items-center">
            <div className=" w-[270px] sm:w-[200px] h-auto mx-auto md:mx-0 ">
              <img src={animeData.data.images.webp.large_image_url} className='w-full h-full object-cover' alt="" />
            </div>

            <div className="w-full md:w-[80%] px-3 md:px-5">
              <h1 className="font-bold text-2xl text-center md:text-left">{animeData.data.title}</h1>
              <div className="flex gap-5 text-xs items-center mt-2 justify-center md:justify-start">
              <p>{animeData.data.duration}</p>
              <p>epi:{animeData.data.episodes}</p>
              <p className='border-2 px-2 py-1'>{animeData.data.type}</p>
              </div>
              <p className='text-sm my-1 text-gray-400 md:text-white'>{animeData.data.synopsis}</p>
              
             <div className="flex gap-5 my-2">
             <a href={animeData.data.trailer.url} className='bg-white px-2 rounded-md'><FaYoutube size={30} className='text-red-600' /></a>
              <p className='text-sm my-1 text-gray-400 md:text-white'>{animeData.data.status}</p>
             </div>
              

              <ul className='list-disc flex gap-3 flex-wrap'>
                {animeData.data.genres.map((genre) => (
                  <li className='ml-4' key={genre.id}>{genre.name}</li>
                ))}
              </ul>

              <h2 className='mt-2 mb-2'>Producers:</h2>
              <ul className='flex flex-wrap gap-5'>
                {animeData.data.producers.map((producer) => (
                  <li key={producer.id} className='px-2 rounded-sm py-1 bg-[#222]'>{producer.name}</li>
                ))}
              </ul>
            </div>
  
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimeDetail;
