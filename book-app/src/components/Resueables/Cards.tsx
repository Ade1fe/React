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
    const { id, pic, title, author, genres,bibKey } = props;
  const bg = useColorModeValue('#ddd', 'gray.900');

  return (
    <Box w='200px'>
      <Image w='100%' bg={bg} h={'250px'}  src={pic} objectFit='cover' />
      <Box px='1'>
        <Text as='h1' fontWeight='bold' fontSize={['md']}>{title}</Text>
        <Text as='h3' fontWeight='semibold' fontSize={['md']}>{author}</Text>
        <Text as='p' noOfLines={[2, 2, 2]} fontSize={['sm']}>{genres}</Text>
        <Text as='p' fontSize={['lg']}>{id}</Text>
        <Text as='p' fontSize={['lg']}>{bibKey}</Text>
      </Box>
    </Box>
  );
};

export default Cards;
