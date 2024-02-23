import axios from 'axios';



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

      // Assuming you retrieve songs from the playlist
      const songs = playlists.map((playlist: any) => ({
          id: playlist.id,
          name: playlist.name,
          // Add more properties as needed
      }));

      console.log("Songs for genre ID", genreId, ":", songs);
      return songs;
  } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
  }
};
