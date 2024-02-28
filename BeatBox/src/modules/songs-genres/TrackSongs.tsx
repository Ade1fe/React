
import { useParams } from 'react-router-dom';

const TrackSongs = () => {
  // Access the parameters from the URL
  const { id, name, imageUrl, previewUrl, artistId } = useParams();

  // Now you can use these parameters in your component
  return (
    <div>
      <h1>Track Details</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Image URL: {imageUrl}</p>
      <p>Preview URL: {previewUrl}</p>
      <p>Artist ID: {artistId}</p>
      {/* You can use these parameters to display track details */}
    </div>
  );
};

export default TrackSongs;
