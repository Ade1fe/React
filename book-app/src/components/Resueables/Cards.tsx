import { Box, Image, Text ,useColorModeValue} from "@chakra-ui/react";

interface CardsProps {
    id: string; // Include the 'id' property
    pic: string;
    title: string;
    author: string;
    genres: string;
    bibKey: string;
  }

const Cards = (props: CardsProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, pic, title, author, genres,bibKey } = props;
  const bg = useColorModeValue('#ddd', 'gray.900');
  const bgs = useColorModeValue('#386641', 'gray.400');
  

  return (
    <Box w='200px' cursor='pointer' _hover={{shadow: 'xl'}} pb='3' mb='3'>
      <Image w='100%' bg={bg} h={'250px'}  src={pic} objectFit='cover' />
      <Box px='1'>
        <Text as='h1'noOfLines={1} fontWeight='bold' fontSize={['md']}>{title}</Text>
        <Text as='h3' noOfLines={1} color={bgs} fontWeight='semibold' fontSize={['md']}>{author}</Text>
        <Text as='p' noOfLines={[2, 2, 2]} fontSize={['sm']}>{genres}</Text>
        {/* <Text as='p' fontSize={['lg']}>{id}</Text> */}
        {/* <Text as='p' fontSize={['lg']}>{bibKey}</Text> */}
      </Box>
    </Box>
  );
};

export default Cards;
