import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import { FaGithub, FaInternetExplorer } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink: string;
    appLink: string;
  }

  
  const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    githubLink,
    appLink,
  }) => {
  return (
    <Box
      w={['90%','80%', "70%", "15rem"]}
      h={["","", "", "15rem"]}
      shadow="base"
      borderRadius="10px"
      p="1rem"
      textAlign="center"
      mb="2rem"
      bgGradient="linear(to-br, #F7EBFD, #fff)"
    >
      <Text fontSize={['md', 'lg']} fontWeight="bold" mb="1rem">
        {title}
      </Text>
      <Text>{description}</Text>
      <Flex justifyContent="space-around" mt="1rem">
        <Link href={githubLink} isExternal>
          <FaGithub size={25} color="black" />
        </Link>
        <Link href={appLink} isExternal>
          <FaInternetExplorer size={25} color="black" />
        </Link>
      </Flex>
    </Box>
  );
};

const MyProjects = () => {
  return (
    <Box>
      <Marquee>
        <Text fontSize="14px">
          Explore my projects on{' '}
          <Text as="span" color="grey.300" fontWeight="700">
            GitHub
          </Text>
          . I'm actively working on these projects and would love to hear your
          feedback. Feel free to drop your comments there. For collaboration
          opportunities or discussing React, you can reach out to me on all
          social platforms using{' '}
          <Text as="span" color="grey.300" fontWeight="700">
            @deife_syntax
          </Text>
          .
        </Text>
      </Marquee>

      <Flex justifyContent="center" gap={8} flexWrap="wrap" mt={["20px","30px","40px"]}>
        <ProjectCard
          title="Food App"
          description="The Food App redefines cooking. Explore diverse recipes, from global cuisines to homemade favorites, with  guides for all skill levels."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />
        <ProjectCard
          title="Movie App"
          description="The Movie App brings the latest movies to your fingertips. Explore trailers, reviews, and showtimes effortlessly."
          githubLink="https://github.com/yourUsername/movie-app"
          appLink="https://yourmovieapp.com"
        />
        <ProjectCard
          title="Game App"
          description="Immerse yourself in the world of gaming with the Game App. Discover new games, walkthroughs, and player communities."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />
        <ProjectCard
          title="Music App"
          description="Elevate your music experience with the Music App. Discover new tracks, create playlists, and share your favorites."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />

<ProjectCard
          title="Food App"
          description="The Food App redefines cooking. Explore diverse recipes, from global cuisines to homemade favorites, with  guides for all skill levels."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />
        <ProjectCard
          title="Movie App"
          description="The Movie App brings the latest movies to your fingertips. Explore trailers, reviews, and showtimes effortlessly."
          githubLink="https://github.com/yourUsername/movie-app"
          appLink="https://yourmovieapp.com"
        />
        <ProjectCard
          title="Game App"
          description="Immerse yourself in the world of gaming with the Game App. Discover new games, walkthroughs, and player communities."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />
        <ProjectCard
          title="Music App"
          description="Elevate your music experience with the Music App. Discover new tracks, create playlists, and share your favorites."
          githubLink="https://github.com/yourUsername/food-app"
          appLink="https://yourfoodapp.com"
        />
        
      </Flex>
    </Box>
  );
};

export default MyProjects;
