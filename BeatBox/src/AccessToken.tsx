

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
      const  uri = track.track.uri;
      const songId = track.track.id;
      const external_urls = track.track.external_urls;
      const preview_url = track.track.preview_url;
      const hrefs = track.track.href;
    
      return {
        id: track.track.id,
        name: name,
        imageUrl: imageUrl,
        duration: duration_ms,
        artists: artists,
        album: album.name,
        uri: uri,
        songId: songId,
        external_urls: external_urls,
        preview_url: preview_url,
        hrefs: hrefs,
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









//accesstoken.tsx

// Fetch related artists
export const fetchRelatedArtists = async (artistId: any) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const accessToken = await fetchAccessToken(clientId, clientSecret);
  try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      });
    
      const relatedArtists = response.data.artists;
      return relatedArtists;
  } catch (error) {
      console.error('Error fetching related artists:', error);
      return [];
  }
};


// Fetch recommendations
export const fetchRecommendations = async (seedArtists: string[], seedTracks: string[], seedGenres: string[]) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const accessToken = await fetchAccessToken(clientId, clientSecret);
  try {
      const response = await axios.get('https://api.spotify.com/v1/recommendations', {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          },
          params: {
              seed_artists: seedArtists.join(','), // Comma-separated list of artist IDs
              seed_tracks: seedTracks.join(','), // Comma-separated list of track IDs
              seed_genres: seedGenres.join(','), // Comma-separated list of genre IDs
          }
      });
      const recommendations = response.data.tracks;
      return recommendations;
  } catch (error) {
      console.error('Error fetching recommendations:', error);
      return [];
  }
};






export const fetchSongsByArtist = async (artistId: string) => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.data || !response.data.tracks) {
      console.error('Unexpected response format:', response.data);
      return [];
    }

    const tracks = response.data.tracks;

    // Extract relevant data from each track
    const songs = tracks.map((track: any) => {
      const imageUrl = track.album.images.length > 0 ? track.album.images[0].url : null;

      return {
        id: track.id,
        name: track.name,
        imageUrl: imageUrl,
        // Add more properties as needed
      };
    });

    console.log("Songs for artist ID", artistId, ":", songs);
    return songs;
  } catch (error) {
    console.error('Error fetching songs by artist:', error);
    throw error;
  }
};







export const fetchTracksByIds = async (trackIds: string[]) => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const trackDetailsPromises = trackIds.map(async (trackId: string) => {
      const response = await axios.get(
        `https://api.spotify.com/v1/tracks/${trackId}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.data) {
        console.error('Unexpected response format for track ID:', trackId);
        return null;
      }

      const track = response.data;
      console.log("track", track)
      const imageUrl = track.album.images.length > 0 ? track.album.images[0].url : null;

      return {
        id: track.id,
        name: track.name,
        imageUrl: imageUrl,
        // Add more properties as needed
      };
    });

    const trackDetails = await Promise.all(trackDetailsPromises);
    console.log("Track details:", trackDetails);
    return trackDetails.filter(Boolean); // Filter out any null values
  } catch (error) {
    console.error('Error fetching tracks by IDs:', error);
    throw error;
  }
};








// export const fetchTracksByAlbumIds = async (albumIds: string[]) => {
//   try {
//     const clientId = import.meta.env.VITE_CLIENT_ID;
//     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
//     const accessToken = await fetchAccessToken(clientId, clientSecret);

//     const trackDetailsPromises = albumIds.map(async (albumId: string) => {
//       const response = await axios.get(
//         `https://api.spotify.com/v1/albums/${albumId}/tracks`,
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.data || !response.data.items) {
//         console.error('Unexpected response format for album ID:', albumId);
//         return [];
//       }

//       const tracks = response.data.items;
//       const trackDetails = tracks.map((track: any) => {
//         // Ensure the album object exists and has images
//         const album = track.album;
//         const imageUrl = album && album.images && album.images.length > 0 ? album.images[0].url : null;
//         console.log("imageUrl", imageUrl,)
//         return {
//           id: track.id,
//           name: track.name,
//           imageUrl: imageUrl,
//           // Add more properties as needed
//         };
//       });

//       return trackDetails;
//     });

//     const albumTracks = await Promise.all(trackDetailsPromises);
//     const allTracks = albumTracks.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
//     console.log("Tracks for albums:", allTracks);
//     return allTracks;
//   } catch (error) {
//     console.error('Error fetching tracks by album IDs:', error);
//     throw error;
//   }
// };











export const fetchTracksByAlbumIds = async (albumIds: string[]) => {
  try {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const trackDetailsPromises = albumIds.map(async (albumId: string) => {
      const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.data || !response.data.items) {
        console.error('Unexpected response format for album ID:', albumId);
        return [];
      }

      const tracks = response.data.items;
      const trackDetails = tracks.map((track: any) => {
        // Ensure the album object exists and has images
        const album = track.album;
        console.log("album", track.album);
        const imageUrl = album && album.images && album.images.length > 0 ? album.images[0].url : null;
        return {
          id: track.id,
          name: track.name,
          imageUrl: imageUrl,
          // Add more properties as needed
        };
      });

      return trackDetails;
    });

    const albumTracks = await Promise.all(trackDetailsPromises);
    const allTracks = albumTracks.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
    return allTracks;
  } catch (error) {
    console.error('Error fetching tracks by album IDs:', error);
    throw error;
  }
};






export const fetchTracksByAlbumId = async (albumId: any) => {
  try {
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
      const accessToken = await fetchAccessToken(clientId, clientSecret);

      const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });

      if (!response.data || !response.data.items) {
          console.error('Unexpected response format for album ID:', albumId);
          return [];
      }

      const tracks = response.data.items;
      console.log(tracks);
      const trackDetails = tracks.map((track: { album: any; id: any; name: any; }) => {
          // Ensure the album object exists and has images
          const album = track.album;
          const imageUrl = album && album.images && album.images.length > 0 ? album.images[0].url : null;
          console.log("images", imageUrl)
          return {
              id: track.id,
              name: track.name,
              imageUrl: imageUrl,
              // Add more properties as needed
          };
      });

      return trackDetails;
  } catch (error) {
      console.error('Error fetching tracks by album ID:', error);
      throw error;
  }
};