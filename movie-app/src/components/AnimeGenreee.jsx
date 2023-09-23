import React,{useState} from 'react';

const AnimeGenreee = () => {
    const initialVisibleGenres = 10;
  // Define an array of genres
  const allGenres = [
    'Iyashikei',
    'Josei',
    'Kids',
    'Magic',
    'Mahou Shoujo',
    'Martial Arts',
    'Mecha',
    'Military',
    'Music',
    'Mystery',
    "Action",
"Adventure",
" Avant Garde",
"Boys Love",
"Comedy",
"Demons",
"Drama",
"Ecchi",
"Fantasy",
"Girls Love",
"Gourmet",
"Harem",
"Horror",
"Isekai",
"Iyashikei",
"Josei",
"Kids",
"Magic",
"Mahou Shoujo",
"Martial Arts",
"Mecha",
"Military",
"Music",
"Mystery",
  ];

// Use state to manage whether all genres are displayed
const [showAllGenres, setShowAllGenres] = useState(false);

// Define a function to toggle the display of genres
const toggleGenres = () => {
  setShowAllGenres(!showAllGenres);
};

// Define a function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

return (
  <div className='mx-auto grid items-center'>
    <h2 className='px-6 text-2xl font-bold'>Genre</h2>
  <div className='flex justify-evenly flex-wrap lg:grid lg:grid-cols-3 gap-3'>
  {allGenres.map((genre, index) => (
      <button
        key={index}
        style={{ color: getRandomColor() }}
        className='p-2 m-1 hover:bg-[#222] capitalize'
        // Conditionally show genres based on the state
        hidden={!showAllGenres && index >= 15}
      >
         {genre.length > 10
            ? `${genre.substring(0, 10)}...`
            : genre}
      </button>
    ))}
  </div>
    <button
      onClick={toggleGenres}
      className='p-2 mt-1 mx-auto w-[95%] bg-[#222] text-white hover:bg-blue-600'
    >
      {showAllGenres ? 'Show Less' : 'Show More'}
    </button>
  </div>
);
};

export default AnimeGenreee;


