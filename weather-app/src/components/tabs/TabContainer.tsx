// import { MouseEventHandler, useState } from 'react';
// import { Box, Image, Text } from "@chakra-ui/react";
// import { cloudwithRain } from '../../assets';


// interface TabContainerProps {
//   isOpen: boolean;
//   onClick: MouseEventHandler<HTMLDivElement>; // Explicitly defining the type
// }

// type Data = {
//   address?: string;
//   // Other properties in your 'data' object
// };

// const TabContainer = ({ isOpen, onClick, weatherData }: TabContainerProps & { weatherData: any }) => {
//   // ... your existing code
//   const [expanded, setExpanded] = useState(false);

//   const handleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     onClick(event); // Pass the event object to the onClick handler
//     handleExpand();
//   };

//   return (
//     <Box
//       w='fit-content'
//       cursor='pointer'
//       borderRadius='10px'
//       overflow='hidden'
//       onClick={handleClick}
//     >
//       <Text p={2} bg='#222' display='flex' justifyContent='space-between' fontSize={['sm', 'md', 'lg']}>
//         Monday <Text as="span" mx={'10px'}>12:20pm</Text>
//       </Text>
//       {expanded && (
//         <Box bg='#495057' display={'flex'} gap={5} justifyContent='space-between' px={2} py='5px'>
//           {/* Accessing data from currentConditions */}
//           <Text>{weatherData.currentConditions.address}</Text>
//           <Box fontSize='sm'>
//             {/* <Text fontSize="3xl">{weatherData.currentConditions.temp}°</Text> */}
//             {/* Display other currentConditions properties as needed */}
//             {/* <Text>wind {weatherData.currentConditions.windspeed} km</Text>
//             <Text>Pressure: {weatherData.currentConditions.pressure} msh</Text>
//             <Text>Humidity: {weatherData.currentConditions.humidity}%</Text> */}
//             <Text>{weatherData.currentConditions.address}</Text>
// <Text>{weatherData.currentConditions.temp}°</Text>
// <Text>wind {weatherData.currentConditions.windspeed} km</Text>
// <Text>Pressure: {weatherData.currentConditions.pressure} msh</Text>
// <Text>Humidity: {weatherData.currentConditions.humidity}%</Text>
// <Text>{weatherData.currentConditions.sunrise}</Text>
// <Text>{weatherData.currentConditions.sunset}</Text>

//           </Box>
//           <Box fontSize='sm'>
//             <Image src={cloudwithRain} boxSize="100px" />
           
//             <Text>{weatherData.currentConditions && weatherData.currentConditions.address}</Text>
//             <Text>{weatherData.currentConditions && weatherData.currentConditions.address}</Text>


//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default TabContainer;





{/* <Box bg='#495057' display={'flex'} gap={5} justifyContent='space-between' px={2} py='5px'>
  <Text>Lagos, Nigeria</Text>
  <Box fontSize='sm'>
    <Text>{weatherData.currentConditions?.temp}°</Text>
    <Text>wind {weatherData.currentConditions?.windspeed} km</Text>
    <Text>Pressure: {weatherData.currentConditions?.pressure} msh</Text>
    <Text>Humidity: {weatherData.currentConditions?.humidity}%</Text>
    <Text>{weatherData.currentConditions?.sunrise}</Text>
    <Text>{weatherData.currentConditions?.sunset}</Text>
  </Box>
  <Box fontSize='sm'>
    <Image src={cloudwithRain} boxSize="100px" />
    <Text>Lagos, Nigeria</Text>
  </Box>
</Box> */}



import React, { MouseEventHandler, useState } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { cloudwithRain } from '../../assets';

interface TabContainerProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

type Data = {
  address?: string;
  // Other properties in your 'data' object
};

const TabContainer = ({ isOpen, onClick, weatherData }: TabContainerProps & { weatherData: any }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event);
    handleExpand();
    console.log("tabcontainer expanded", weatherData);
  };



  console.log("tabcontainer", weatherData);
  console.log("tabcontainer", weatherData.conditions);

  return (
    <Box
      w='fit-content'
      cursor='pointer'
      borderRadius='10px'
      overflow='hidden'
      onClick={handleClick}
    >
      <Text p={2} bg='#222' display='flex' justifyContent='space-between' fontSize={['sm', 'md', 'lg']}>
        Monday <Text as="span" mx={'10px'}>12:20pm</Text>
      </Text>
      {expanded && (
        // <Box bg='#495057' display={'flex'} gap={5} justifyContent='space-between' px={2} py='5px'>
        //   <Text>{weatherData.currentConditions?.address || 'Address Not Available'}</Text>
        //   <Box fontSize='sm'>
        //     <Text>{weatherData.currentConditions?.temp}°</Text>
        //     <Text>wind {weatherData.currentConditions?.windspeed} km</Text>
        //     <Text>Pressure: {weatherData.currentConditions?.pressure} msh</Text>
        //     <Text>Humidity: {weatherData.currentConditions?.humidity}%</Text>
        //     <Text>{weatherData.currentConditions?.sunrise}</Text>
        //     <Text>{weatherData.currentConditions?.sunset}</Text>
        //   </Box>
        //   <Box fontSize='sm'>
        //     <Image src={cloudwithRain} boxSize="100px" />
        //     <Text>{weatherData.currentConditions?.address}</Text>
        //   </Box>
        // </Box>


        // ... previous code





<Box bg='#495057' display={'flex'} gap={5} justifyContent='space-between' px={2} py='5px'>
  <Text>{ weatherData.conditions}</Text>
  <Box fontSize='sm'>
    {/* <Text>{weatherData.currentConditions}°</Text>
    <Text>wind {weatherData.currentConditions?.windspeed} km</Text>
    <Text>Pressure: {weatherData.currentConditions?.pressure} msh</Text>
    <Text>Humidity: {weatherData.currentConditions?.humidity}%</Text>
    <Text>{weatherData.currentConditions?.sunrise}</Text>
    <Text>{weatherData.currentConditions?.sunset}</Text> */}
  </Box>
  {/* <Box fontSize='sm'>
    <Image src={cloudwithRain} boxSize="100px" />
    <Text>{weatherData.currentConditions?.conditions}</Text>
  </Box> */}
</Box>



      )}
    </Box>
  );
};

export default TabContainer;

