// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { fetchAccessToken } from '../../AccessToken'; 

// interface Album {
//   id: string;
//   name: string;
//   artists: { name: string }[];
//   images: { url: string }[];
//   // Add other properties as needed
// }

// const GetSeveralAlbums = () => {
//   const [albums, setAlbums] = useState<Album[]>([]);
//   const albumIds = ['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc']; // Replace with actual album IDs
//   const clientId = import.meta.env.VITE_CLIENT_ID;
//   const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const accessToken = await fetchAccessToken(clientId, clientSecret);
//         const response = await axios.get(`https://api.spotify.com/v1/albums`, {
//           params: {
//             ids: albumIds.join(','), // Join album IDs with commas
//             market: 'ES', // Specify market if needed
//           },
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//           },
//         });
//         setAlbums(response.data.albums);
//       } catch (error) {
//         console.error('Error fetching albums:', error);
//       }
//     };

//     fetchData();
//   }, [clientId, clientSecret]); // Include clientId and clientSecret in the dependency array

//   return (
//     <div>
//       <h2>Several Albums</h2>
//       {albums.map(album => (
//         <div key={album.id}>
//           <h3>{album.name}</h3>
//           <p>Artist: {album.artists ? album.artists.map(artist => artist.name).join(', ') : 'Unknown'}</p>
//           <img src={album.images && album.images.length > 0 ? album.images[0].url : ''} alt={album.name} style={{ width: '200px', height: '200px' }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GetSeveralAlbums;





















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchAccessToken, fetchTracksByAlbumIds } from '../../AccessToken'; 
import { useNavigate } from 'react-router-dom';

interface Album {
  id: string;
  name: string;
  artists: { name: string }[];
  images: { url: string }[];
}

const GetSeveralAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const albumIds = ['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc']; // Replace with actual album IDs
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await fetchAccessToken(clientId, clientSecret);
        const response = await axios.get(`https://api.spotify.com/v1/albums`, {
          params: {
            ids: albumIds.join(','), // Join album IDs with commas
            market: 'ES', // Specify market if needed
          },
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        setAlbums(response.data.albums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchData();
  }, [clientId, clientSecret]); // Include clientId and clientSecret in the dependency array

  const handleSongClick = async (album: Album) => {
    try {
      if (!album || !album.id || !album.name || !album.images) {
        console.error('Invalid album object:', album);
        return;
      }
  
      // Fetch tracks related to the album
      const albumTracks = await fetchTracksByAlbumIds([album.id]);
  
      // Obtain name and imageUrl from the album object
      const { name, images } = album;
      const imageUrl = images.length > 0 ? images[0].url : '';
  
      // Navigate to the ShowTracksInAlbums component with the necessary data
      navigate(`/dashboard/show-tracks/${album.id}?name=${encodeURIComponent(name)}&imageUrl=${encodeURIComponent(imageUrl)}`, { state: { playlistSongs: albumTracks } });
    } catch (error) {
      console.error('Error fetching songs in album:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Several Albums</h2>
      {albums.map(album => (
        <div key={album.id} onClick={() => handleSongClick(album)}>
          <h3>{album.name}</h3>
          <p>Artist: {album.artists ? album.artists.map(artist => artist.name).join(', ') : 'Unknown'}</p>
          <img src={album.images && album.images.length > 0 ? album.images[0].url : ''} alt={album.name} style={{ width: '200px', height: '200px' }} />
        </div>
      ))}
    </div>
  );
};

export default GetSeveralAlbums;
