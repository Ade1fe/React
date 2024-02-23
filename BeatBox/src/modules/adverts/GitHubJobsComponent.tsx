import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  imageUrl: string;
}

const JobAdverts: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    
    const dummyJobs: Job[] = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'ABC Inc.',
        location: 'New York, NY',
        description: 'We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality software solutions.',
        imageUrl: 'https://source.unsplash.com/200x100/?software',
      },
      {
        id: 2,
        title: 'Web Developer',
        company: 'XYZ Corp.',
        location: 'San Francisco, CA',
        description: 'Join our dynamic team as a Web Developer and contribute to the development of innovative web applications.',
        imageUrl: 'https://source.unsplash.com/200x100/?developer',
      },
      {
        id: 3,
        title: 'Data Analyst',
        company: '123 Co.',
        location: 'Chicago, IL',
        description: 'We are seeking a talented Data Analyst to analyze large datasets and provide valuable insights to our organization.',
        imageUrl: 'https://source.unsplash.com/200x100/?data',
      },
      {
        id: 4,
        title: 'UX Designer',
        company: '456 Ltd.',
        location: 'Seattle, WA',
        description: 'Are you passionate about creating intuitive user experiences? Join our team as a UX Designer and help shape the future of our products.',
        imageUrl: 'https://source.unsplash.com/200x100/?designer',
      },
      {
        id: 5,
        title: 'Product Manager',
        company: '789 LLC.',
        location: 'Austin, TX',
        description: 'As a Product Manager, you will drive the development of our products from conception to launch. Join us and make a difference!',
        imageUrl: 'https://source.unsplash.com/200x100/?manager',
      },
    ];

 
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 2) % dummyJobs.length);
    }, 15000);

    setJobs(dummyJobs);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box mt={[8,10,12]}>
      {jobs.length > 0 && (
        <Box p={8} display={[ 'grid', 'grid', 'grid', 'flex']} gap='2'>
          {[jobs[currentIndex], jobs[(currentIndex + 1) % jobs.length]].map(job => (
            <Box key={job.id}  bg='' borderRadius="lg" p={4} w="100%">
              <VStack spacing={1} align="stretch">
                <Image src={job.imageUrl} alt={job.title}  />
                <Heading as="h2" size="md">{job.title}</Heading>
                <Text fontSize="sm" fontWeight="bold">{job.company}</Text>
                <Text fontSize="sm">{job.location}</Text>
                <Text>{job.description}</Text>
              </VStack>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JobAdverts;
