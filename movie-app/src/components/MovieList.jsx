import React from 'react';
import ActionMovies from './ActionMovies'; // Import category components
import ComedyMovies from './ComedyMovies';
import DramaMovies from './DramaMovies';
import AllMovies from './AllMovies';
import AdventureMovies from './AdventureMovies';
import AnimationMovies from './AnimationMovies';
import CrimeMovies from './CrimeMovies';
// Import other category components as needed

const MovieList = ({ activeTab }) => {
  return (
    <div className="mt-4">
       {activeTab === 'all' && <AllMovies />}
      {activeTab === 'action' && <ActionMovies />}
      {activeTab === 'comedy' && <ComedyMovies />}
      {activeTab === 'drama' && <DramaMovies />}
      {activeTab === 'adventure' && <AdventureMovies />}
      {activeTab === 'animation' && <AnimationMovies />}
      {activeTab === 'crime' && <CrimeMovies />}

      {activeTab === 'documentary' && <CrimeMovies />}
     
      {/* Render other category components based on activeTab */}
    </div>
  );
}

export default MovieList;
