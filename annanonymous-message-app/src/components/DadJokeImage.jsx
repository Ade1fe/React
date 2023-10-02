import React, { useState, useEffect } from 'react';

function DadJokeImage({ jokeId }) {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Fetch the dad joke image URL from the "icanhazdadjoke" API using the joke ID
    fetch(`https://icanhazdadjoke.com/j/${jokeId}.png`)
      .then((response) => {
        if (response.ok) {
          setImageURL(response.url); // Set the image URL if the response is successful
        } else {
          throw new Error('Failed to fetch dad joke image');
        }
      })
      .catch((error) => {
        console.error('Error fetching dad joke image:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [jokeId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageURL} alt="Dad Joke" />
      )}
    </div>
  );
}

export default DadJokeImage;
