import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AnimeDetail = () => {
  const { title, episode, description, img, contentType, year, id,rating,status } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center  gap-3 mb-4">
        <Link to="/anime" className="text-blue-500 hover:underline">Home</Link>
        <span className="text-gray-400">||</span>
        <span className="text-gray-400">{decodeURIComponent(contentType)}</span>
        <span className="text-gray-400">||</span>
        <span className="font-bold capitalize text-lg text-gray-600">{decodeURIComponent(title)}</span>
        <span className="text-gray-600 ml-2">{id}</span>
      </div>

      <div className="flex">
        <div className="w-1/3">
          <span className="text-gray-600 text-lg">Episode {episode}</span>
        </div>
        <div className="w-2/3 flex justify-center gap-3 items-center">
        <div className="grid gap-3">
        <img
            src={decodeURIComponent(img)}
            className="max-w-full max-h-[190px] object-contain"
            alt="Anime"
          />
          <img
            src={decodeURIComponent(img)}
            className="max-w-full max-h-[190px] object-contain"
            alt="Anime"
          />
        </div>
          <img
            src={decodeURIComponent(img)}
            className="max-w-full max-h-[400px] object-contain"
            alt="Anime"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-400 mb-2">Description</h2>
        <p className="text-gray-500">{decodeURIComponent(description)}</p>
        <h2>Year: {decodeURIComponent(year)}</h2>
        <h2>Rating: {decodeURIComponent(rating)}</h2>
        <h2>Status: {decodeURIComponent(status)}</h2>
      </div>
    </div>
  );
};

export default AnimeDetail;

      {/* <h2>id: {id}</h2>
      <h2>Title: {decodeURIComponent(title)}</h2>
      <h2>Episode: {episode}</h2>
      <h2>Description: {decodeURIComponent(description)}</h2>
      <h2>Content Type: {decodeURIComponent(contentType)}</h2>
      <h2>Year: {decodeURIComponent(year)}</h2>
      <img src={decodeURIComponent(img)} alt="Anime" /> */}