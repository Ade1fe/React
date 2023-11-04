import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DiaMain = () => {

    const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  function getCurrentGreeting() {
    const currentHour = new Date().getHours();

    let greeting = "Hello"; // Default greeting

    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = "Good afternoon";
    } else if (currentHour >= 17 || currentHour < 5) {
      greeting = "Good evening";
    }

    return greeting;
  }

  function getCurrentDateTime() {
    const currentDate = new Date();
    
    // Format the date to "Day, Month Day Year" e.g., "Thursday, November 2 2023"
    const dateFormat = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const date = dateFormat.format(currentDate);
    const year = currentDate.getFullYear();
    const greeting = getCurrentGreeting();

    return { date, greeting, year };
  }

  const dateTimeInfo = getCurrentDateTime();

  return (
    <Box mt={[5,8,"16"]}>
        <Text as='h3' fontWeight={'semibold'} textAlign={'center'} p={2}
        fontSize={['10px','12px','14px']}>{dateTimeInfo.date}</Text>

      <Text as='h1' fontWeight={'bold'} textAlign={'center'} p={2}
        fontSize={['14px','16px','18px']}>
        {dateTimeInfo.greeting}, Damilola
      </Text>

      <Link to='/journal'> 
      <Text bg={bgs}  mt={[3,4,5]} fontWeight={'bold'} mx={'auto'} borderRadius={'10px'} shadow={'md'}
       w={'fit-content'} fontSize={['13px','14px','15px']} px={3}  py={2}>Start Today's Journal</Text>
      </Link>
      
    </Box>
  );
}

export default DiaMain;
