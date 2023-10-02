// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
// import AnimeTrendCard from '../components/AnimeTrendCard';

// function AnimeSearch() {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [searchType, setSearchType] = useState('anime'); // Default to anime

//   const apiUrl = `https://api.jikan.moe/v4/search/${searchType}`;

//   const handleSearch = () => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setResults(data.results);
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//       console.log(event)
//     }
//   };

//   useEffect(() => {
//     handleSearch();
//   }, [searchType]);

//   const handleAnimeCardClick = (animeItem) => {
//     // Implement your logic for handling clicks on anime items here
//     // You can use the `animeItem` data to navigate or display details.
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar />
//       <div className="container mx-auto p-6">
//         <div className="mb-4 flex">
//           <input
//             type="text"
//             placeholder={`Search for anime by title`}
//             className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-red-300"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />

//           <button onClick={handleSearch} className="text-white -ml-8">
//             <AiOutlineSearch size={25} />
//           </button>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
//         {results && results.map((anime) => (
//   <AnimeTrendCard
//     key={anime.mal_id}
//     img={anime.image_url}
//     title={anime.title}
//     id={anime.mal_id}
//     onClick={() => handleAnimeCardClick(anime)}
//   />
// ))}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnimeSearch;
