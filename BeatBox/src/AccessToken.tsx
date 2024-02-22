// import axios from 'axios';

import axios from "axios";

// export const fetchAccessToken = async (clientId: string, clientSecret: string, fetchTopTracks: Function) => {
//   try {
//     const credentials = `${clientId}:${clientSecret}`;
//     const encodedCredentials = btoa(credentials); 
//     const response = await axios.post(
//       'https://accounts.spotify.com/api/token',
//       null,
//       {
//         params: {
//           grant_type: 'client_credentials',
//         },
//         headers: {
//           'Authorization': `Basic ${encodedCredentials}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const accessToken = response.data.access_token;
//     await fetchTopTracks(accessToken);
//   } catch (error) {
//     console.error('Error fetching access token:', error);
//   }
// };













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
    throw error; // Re-throw the error to be handled by the caller
  }
};
