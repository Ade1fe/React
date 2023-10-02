import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJokes = async () => {
      if (searchTerm.trim() === '') {
        setJokes([]);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setJokes(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jokes:', error);
        setLoading(false);
      }
    };

    // Debounce the API call to avoid making requests for each keystroke.
    const debounceTimer = setTimeout(fetchJokes, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };


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


  return (
    <div >
      {/* <h1>Dad Joke Search</h1> */}
      <input
        type="text"
        placeholder="Search for dad jokes..."
        value={searchTerm}
        className='w-full px-3 py-1 border-b-2 border-[#0b2545] outline-none '
        onChange={handleChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='grid grid-cols-1 mt-5 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 flex-wrap'>
          {jokes.map((joke) => (
            <li onClick={() => shareOnWhatsApp(joke)} className='border-l-2 border-b-2 border-r-2 rounded-r-xl rounded-l-xl border-[#5a96e0] text-sm md:text-[15px] cursor-pointer hover:text-[#416086] p-4 shadow-lg relative' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}
             key={joke.id}>{joke.joke}   <button
             className="absolute top-0 right-0 bg-white text-[#5a96e0]"
             
           >
              <FaWhatsapp size={20} />
           </button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar
