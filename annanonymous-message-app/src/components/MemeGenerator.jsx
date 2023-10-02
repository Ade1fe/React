import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function MemeGenerator() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const shareOnWhatsApp = (jokeText) => {
    const joke = encodeURIComponent(jokeText);
    const websiteLink = encodeURIComponent('https://deife-jokes.netlify.app');
    const moreJokesMessage = encodeURIComponent('Click here to get more jokes:');
  
    // Combine the joke, more jokes message, and website link
    const message = `${joke}%0A%0A${moreJokesMessage}%0A${websiteLink}`;
    
    const whatsappLink = `whatsapp://send?text=${message}`;
  
    // Try to open the WhatsApp link, but provide a fallback link for other cases
    if (navigator.share) {
      navigator.share({
        title: 'Share on WhatsApp',
        text: jokeText,
        url: 'https://deife-jokes.netlify.app', // You can include the website URL here
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed', error));
    } else {
      window.open(whatsappLink, '_blank');
    }
  };
  

  const fetchJokes = async () => {
    setIsLoading(true);

    try {
      const jokePromises = [];

      for (let i = 0; i < 15; i++) {
        jokePromises.push(
          fetch('https://icanhazdadjoke.com/slack')
            .then((response) => response.json())
            .then((data) => data.attachments[0].text)
        );
      }

      const newJokes = await Promise.all(jokePromises);
      setJokes([...jokes, ...newJokes]);
    } catch (error) {
      console.error('Error fetching dad jokes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const loadMoreJokes = () => {
    fetchJokes();
  };

  return (
    <div>
      <ul className='grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 flex-wrap'>
        {jokes.map((joke, index) => (
          <li onClick={() => shareOnWhatsApp(joke)} className='border-l-2 border-b-2 border-r-2 rounded-r-xl rounded-l-xl border-[#5a96e0] text-sm md:text-[15px] cursor-pointer hover:text-[#416086] p-4 shadow-lg relative' key={index} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
            {joke}
            <button
              className="absolute top-0 right-0 bg-white text-[#5a96e0]"
              
            >
               <FaWhatsapp size={20} />
            </button>
          </li>
        ))}
      </ul>
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <button onClick={loadMoreJokes} className='px-2 py-1 rounded-md mt-5 shadow-xl border-2 border-[#0b2545]'>Load More</button>
      )}
    </div>
  );
}

export default MemeGenerator;
