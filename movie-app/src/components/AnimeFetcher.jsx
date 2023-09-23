

import React, { useEffect, useState } from 'react';

const AnimeFetcher = ({ endpoint, onAnimeDataChange }) => {
  useEffect(() => {
    // Fetch anime data from the Jikan API
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        // Extract the list of anime from the response
        const animeData = data.data || [];
        // Pass the animeData to the parent component
        onAnimeDataChange(animeData);
      })
      .catch((error) => {
        console.error('Error fetching anime data:', error);
      });
  }, [endpoint, onAnimeDataChange]);

  return null; 
};

export default AnimeFetcher;

