// import { Mainlayout } from "../../assets"
// import MangaComponent from "../../components/Resueables/MangaComponent"

// const MangaPage = () => {
//   return (
//     <Mainlayout>
//      <MangaComponent mangaId={33} /> 
//     </Mainlayout>
//   )
// }

// export default MangaPage


import React from 'react';
import { useMangaData } from './../../components/Resueables/useMangaData';
import MangaDetails from './../../components/Resueables/MangaDetails';
import { Mainlayout } from '../../assets';

const MangaPage: React.FC = () => {
  const mangaId = 2; // Replace with the desired manga ID
  const { manga, loading } = useMangaData(mangaId);

  return (
    <Mainlayout>
      <MangaDetails manga={manga} loading={loading} />
    </Mainlayout>
  );
};

export default MangaPage;

