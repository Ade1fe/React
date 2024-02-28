import React from 'react';
import { useLocation } from 'react-router-dom';

interface Track {
    id: string;
    name: string;
    imageUrl: string;
    // Add more properties if needed
}

const ShowTracksInAlbums = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const { state } = location;
    const { playlistSongs } = state || {}; 

    // Get the value of the 'name' parameter from the query string, defaulting to 'Unknown Genre'
    const name = queryParams.get('name') || 'Unknown Genre';

    // Get the value of the 'imageUrl' parameter from the query string
    const imageUrl = queryParams.get('imageUrl');

    return (
        <div>
            <h2>Tracks in Album</h2>
            <p>Name: {name}</p>
            {imageUrl && <img src={imageUrl} alt="Album Cover" />}
            {/* Render tracks or handle the data as needed */}

            <div>
                <h2>Tracks in Album</h2>
                {playlistSongs && playlistSongs.length > 0 ? (
                    <div>
                        {playlistSongs.map((track: Track, index: number) => (
                            <div key={index}>
                                <p>Name: {track.name}</p>
                                {/* Display image for each track */}
                                <img src={track.imageUrl} alt={`Track ${index + 1}`} />
                                {/* Add more details if needed */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No tracks available</p>
                )}
            </div>
        </div>
    );
}

export default ShowTracksInAlbums;
