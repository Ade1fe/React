// MoviesTab.js
import React, { useState } from 'react';
import MovieTabs from './MovieTabs';
import MovieList from './MovieList';

const MoviesTab = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      <MovieTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MovieList activeTab={activeTab} />
    </div>
  );
}

export default MoviesTab;
