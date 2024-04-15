import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { logoimg } from "../assets/imgs";

interface GreetingsProps {
    desc?: string;
}

const Greetings: React.FC<GreetingsProps> = ({ desc  }) => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);

    return (
        <Box color='black' className='texts' >
            <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
                <Box display='flex' alignItems='center' gap='1'>
                    <Image boxSize='50px' src={logoimg} alt="Logo" />
                    <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
                </Box>
                <Text>Logout</Text>
            </Box>

            <Box mt={['3rem', '3.5rem', '4rem']}>
                <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
                <Text fontSize={['sm', 'md']}>{desc}</Text>
            </Box>
          
        </Box>
    );
};

export default Greetings;
