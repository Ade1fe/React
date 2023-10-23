import { Box, Image } from "@chakra-ui/react";

interface HeroImgProps {
  pic: string;
}

const HeroImg = ({ pic }: HeroImgProps) => {
  return (
    <Box>
      <Image
        boxSize={['250px', '280px', '300px']}
        objectFit='contain'
        src={pic}
        alt='Dan Abramov'
        mx="auto"
      />
    </Box>
  );
}

export default HeroImg;
