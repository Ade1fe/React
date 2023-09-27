import React from 'react';
import ActionMovies from './ActionMovies'; 
import ComedyMovies from './ComedyMovies';
import DramaMovies from './DramaMovies';
import AllMovies from './AllMovies';
import AdventureMovies from './AdventureMovies';
import AnimationMovies from './AnimationMovies';
import CrimeMovies from './CrimeMovies';
import FamilyMovies from './FamilyMovies';
import DocumentaryMovies from './DocumentaryMovies';
import FantasyMovies from './FantasyMovies';
import HistoryMovies from './HistoryMovies';
import MusicMovies from './MusicMovies';
import HorrorMovies from './HorrorMovies';
import MysteryMovies from './MysteryMovies';
import RomanceMovies from './RomanceMovies';
import ScienceFictionMovies from './ScienceFictionMovies';
import TvMovie from './TvMovie';
import ThrillerMovies from './ThrillerMovies';
import WarMovies from './WarMovies';
import WesternMovies from './WesternMovies';
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
      {activeTab === 'documentary' && <DocumentaryMovies />}
      {activeTab === 'family' && <FamilyMovies />}

      {activeTab === 'fantasy' && <FantasyMovies />}
      {activeTab === 'history' && <HistoryMovies />}
      {activeTab === 'horror' && <HorrorMovies />}
      {activeTab === 'music' && <MusicMovies />}

      {activeTab === 'mystery' && <MysteryMovies />}
      {activeTab === 'romance' && <RomanceMovies />}
      {activeTab === 'scienceFiction' && <ScienceFictionMovies />}
      {activeTab === 'tvMovie' && <TvMovie />}

      {activeTab === 'thriller' && <ThrillerMovies />}
      {activeTab === 'war' && <WarMovies />}
      {activeTab === 'western' && <WesternMovies />}
     
      {/* Render other category components based on activeTab */}
    </div>
  );
}

export default MovieList;
