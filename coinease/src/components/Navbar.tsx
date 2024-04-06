import React, { useState, useEffect } from 'react';
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { logoimg } from '../assets/imgs';
import { GoClock } from "react-icons/go";

const Navbar = () => {
  const [dateTime, setDateTime] = useState(getFormattedDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  function getFormattedDateTime() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const dayOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = dayOfWeekNames[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 

    const formattedDate = `${day} ${month}, ${dayOfWeek}`;
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return { date: formattedDate, time: formattedTime };
  }

  return (
    <Box display={['block', 'flex']} py='5' justifyContent='space-between'>
      <Box  display='flex' alignItems='center' gap='1' className="">
      <Image boxSize='50px' src={logoimg} alt="Logo" />
      <Text ml='-10px' className='logo' fontSize={['lg', 'x-large',]}>COINEASE Bank</Text>
      </Box>
      <Box display='flex' textAlign='right' justifyContent='flex-end' alignItems='center' gap='4' className='subtitles'>
        <Text fontSize={['md', 'lg', ]} display='flex' alignItems='center' gap='2'><Icon as={GoClock} />  {dateTime.time}</Text>
        <Text fontSize={['xs', 'sm']}>{dateTime.date}</Text>
      </Box>
    </Box>
  );
};

export default Navbar;
