import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';



// Wrapper function to handle rate limiting
const rateLimitedRequest = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    const response = await axios(config);
    return response;
  } catch (error:any) {
    if (error.response && error.response.status === 429) {
      // If status code is 429, retry after the specified time
      const retryAfter = error.response.headers['retry-after'];
      if (retryAfter) {
        const delayTime = parseInt(retryAfter, 10) * 1000; // Convert to milliseconds
        await delay(delayTime);
        // Retry the request
        return rateLimitedRequest(config);
      }
    }
    // For other errors or if retry-after header is not present, re-throw the error
    throw error;
  }
};

// Define a function to delay requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAccessToken = async (clientId: string, clientSecret: string, fetchTopTracks?: Function) => {
  try {
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credentials); 
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      null,
      {
        params: {
          grant_type: 'client_credentials',
        },
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = response.data.access_token;
    if (fetchTopTracks) {
      await fetchTopTracks(accessToken);
    }
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; 
  }
};


const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};


const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};







interface Genre {
    id: string;
    name: string;
    imageUrl: string;
}

export const fetchGenres = async (): Promise<Genre[]> => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    try {
        const accessToken = await fetchAccessToken(clientId, clientSecret);
        const response = await axios.get(
            'https://api.spotify.com/v1/browse/categories',
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );

        const genres: Genre[] = response.data.categories.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            imageUrl: item.icons.length > 0 ? item.icons[0].url : '',
        }));
        console.log("", genres);

         saveToLocalStorage('genres', genres);
        return genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};







export const fetchSongsByGenre = async (genreId: string) => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const response = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.data || !response.data.playlists || !response.data.playlists.items) {
      console.error('Unexpected response format:', response.data);
      return [];
    }

    const playlists = response.data.playlists.items;

    // Fetch song images for each playlist and construct the songs array
    const songs = await Promise.all(playlists.map(async (playlist: any) => {
      // Fetch additional details for the playlist, including images
      const playlistDetailsResponse = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlist.id}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      // Extract relevant data from the playlist details response
      const playlistDetails = playlistDetailsResponse.data;

      // Assuming playlist images are available in the playlistDetails.images array
      const imageUrl = playlistDetails.images.length > 0 ? playlistDetails.images[0].url : null;

      return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: imageUrl,
        // Add more properties as needed
      };
    }));

    saveToLocalStorage('songs', { [genreId]: songs });
    console.log("Songs for genre ID", genreId, ":", songs);
    return songs;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};





// export const fetchSongsInPlaylist = async (playlistId: string) => {
//   try {
//     const clientId = import.meta.env.VITE_CLIENT_ID;
//     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
//     const accessToken = await fetchAccessToken(clientId, clientSecret);

//     const response = await axios.get(
//       `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
//       {
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//         },
//       }
//     );

//     if (!response.data || !response.data.items) {
//       console.error('Unexpected response format:', response.data);
//       return [];
//     }

//     const tracks = response.data.items;
//     console.log("tracks", tracks);

//     const updatedTracks = tracks.map((track: any) => {
//       const album = track.track.album; // Access the album object
//       const imageUrl = album.images && album.images.length > 0 ? album.images[0].url : null; // Check if album has images
//      console.log("alblum", album);
//       return {
//         id: track.track.id,
//         name: track.track.name,
//         imageUrl: imageUrl,
//         // Add more properties as needed
//       };
//     });
// // Save tracks to localStorage
//     saveToLocalStorage('playlistTracks', { [playlistId]: updatedTracks });
//     console.log("Songs in playlist", playlistId, ":", updatedTracks);
//     return updatedTracks;
//   } catch (error) {
//     console.error('Error fetching songs in playlist:', error);
//     throw error;
//   }
// };







export const fetchSongsInPlaylist = async (playlistId: string) => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.data || !response.data.items) {
      console.error('Unexpected response format:', response.data);
      return [];
    }

    const tracks = response.data.items;

    const updatedTracks = tracks.map((track: any) => {
      const album = track.track.album;
      const imageUrl = album.images && album.images.length > 0 ? album.images[0].url : null;
      const artists = track.track.artists.map((artist: any) => artist.name);
      const duration_ms = track.track.duration_ms;
      const name = track.track.name;
    
      return {
        id: track.track.id,
        name: name,
        imageUrl: imageUrl,
        duration: duration_ms,
        artists: artists,
        album: album.name // Assuming you want the album name
        // Add more properties as needed
      };
    });
    
    console.log("Tracks:", tracks);


    // Save tracks to localStorage
    saveToLocalStorage('playlistTracks', { [playlistId]: updatedTracks });
    console.log("Songs in playlist", playlistId, ":", updatedTracks);
    return updatedTracks;
  } catch (error) {
    console.error('Error fetching songs in playlist:', error);
    throw error;
  }
};
