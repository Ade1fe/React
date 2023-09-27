


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Overview = () => {
  const location = useLocation();
  const { title, id } = location.state || {};

  const [contentData, setContentData] = useState(null);
  const [contentType, setContentType] = useState(location.state ? location.state.contentType : null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '68bd4f569df65f9feb2dac611c38f06e';

  // Function to fetch content data by ID
  const fetchDataById = async (contentId) => {
    const tvApiUrl = `https://api.themoviedb.org/3/tv/${contentId}?api_key=${apiKey}`;
    const movieApiUrl = `https://api.themoviedb.org/3/movie/${contentId}?api_key=${apiKey}`;

    try {
      // First, try fetching TV series data
      const tvResponse = await fetch(tvApiUrl);
      if (tvResponse.ok) {
        const tvData = await tvResponse.json();
        setContentData(tvData);
        setContentType('TV Series');
        setLoading(false);
        return;
      }

      // If TV series data is not found, try fetching movie data
      const movieResponse = await fetch(movieApiUrl);
      if (movieResponse.ok) {
        const movieData = await movieResponse.json();
        setContentData(movieData);
        setContentType('Movie');
        setLoading(false);
        return;
      }

      // If both TV series and movie data are not found, set an error
      throw new Error('Content not found');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataById(id);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!contentData) {
    return <div>No data available for this content.</div>;
  }

  return (
    <div className='relative'>
      <div className="w-full h-[400px] md:h-[550px] relative hidden md:block">
        <img
          src={`https://image.tmdb.org/t/p/original${contentData.backdrop_path}`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="bg-black opacity-90 backdrop-blur-sm absolute top-0 left-0 h-full w-full"></div>
      </div>
      <div className="px-5  md:px-8 static md:absolute md:top-4 lg:top-0  right-0 grid sm:flex items-center justify-between gap-4 ">
        <div className="w-[80%] mx-auto md:mx-0 md:w-[350px] lg:w-[365px] h-auto rounded-[10px] overflow-hidden ">
          <img
            src={`https://image.tmdb.org/t/p/original${contentData.poster_path}`}
            alt=""
            className='w-full h-auto object-contain'
          />
        </div>
        <div className="w-full md:w-[70%]">
          <h1 className='text-2xl font-bold mb-2'> Title: {title}</h1>
          <div className="grid sm:flex text-xl gap-2 my-1 font-semibold items-center">
            <h1 className='border-2 p-2 w-fit'>  {contentType}</h1>
            <p>
              {contentData.genres.map((genre) => genre.name).join(', ')}
            </p>
          </div>
          <div className='block mt-3'>
            <p className='text-2xl font-bold'>Overview</p>
            <p className='text-xl'>{contentData.overview}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-1 ">
            <p> Average Vote: <span>{contentData.vote_average}%</span></p>
            <p>Vote count: <span>{contentData.vote_count}</span></p>
            <p>Language: <span>{contentData.original_language}</span></p>
            <p>
              Date: <span>{contentData.release_date || contentData.first_air_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

