import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';

const OverViewPage = () => {
  const location = useLocation();
  const { id } = useParams();

  // Access the state data passed from the Trending component
  const { title, img } = location.state || {};

  return (
    <Mainlayout>
      <h1>Selected Image Title: {title}</h1>
      <img src={img} alt={title} />
    </Mainlayout>
  );
};

export default OverViewPage;
