

// import React from 'react';
// import Mainlayout from '../layout/Mainlayout';
// import Overview from '../components/Overview';
// import OverviewCast from '../components/OverviewCast';
// import Recommendations from '../components/Recommendations';

// const OverViewPage = () => {
//   // Define contentType here, or get it from your data source
//   const contentType = 'movie'; // Example: Set the content type to 'movie'

//   return (
//     <Mainlayout>
//       <Overview />
//       <OverviewCast contentType={contentType} />

//       <Recommendations />
//     </Mainlayout>
//   );
// };

// export default OverViewPage;





import React, { useState, useEffect } from 'react';
import Mainlayout from '../layout/Mainlayout';
import Overview from '../components/Overview';
import Recommendations from '../components/Recommendations';
import OverviewCast from '../components/OverviewCast';
import TabLinks from '../components/TabLinks';
import Aside from '../components/Aside';

const OverViewPage = () => {
  const contentType = 'movie';
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchedCastData = ['actor1', 'actor2', 'actor3']; 

    setCast(fetchedCastData);
  }, []); 

  return (
    <Mainlayout>
      <Overview />
    
   <div className='mt-[40px] md:mt-[80px]'> 
   <OverviewCast contentType={contentType} />
   </div>

     <div className='grid lg:flex gap-4 px-5 mt-[30px] md:mt-[50px]'>
   <div className='w-full lg:w-[70%] '>
   <TabLinks />
   </div>
   <div className='w-full lg:w-[25%]'>
   <Aside />
   </div>
     </div>
  
     <Recommendations cast={cast} />
      
    </Mainlayout>
  );
};

export default OverViewPage;



