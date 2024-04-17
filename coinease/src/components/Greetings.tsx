
import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { logoimg } from "../assets/imgs";
import { auth, firestore } from '../firebase'; // Import Firebase auth and firestore
import { signOut } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

interface GreetingsProps {
    desc?: string;
}

const Greetings: React.FC<GreetingsProps> = ({ desc }) => {
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }

        // Listen for changes in authentication state
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDocRef = doc(collection(firestore, 'coinbaseusers'), user.uid);
                const docSnap = await getDoc(userDocRef);
                if (docSnap.exists()) {
                    setUserName(docSnap.data().name || '');
                } else {
                    console.log('No such document!');
                }
            } else {
                setUserName('');
            }
        });

        return unsubscribe;
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/")
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <Box color='black' className='texts' >
            <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
                <Box display='flex' alignItems='center' gap='1'>
                    <Image boxSize='50px' src={logoimg} alt="Logo" />
                    <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
                </Box>
                {userName && <Text onClick={handleLogout} cursor="pointer">Logout</Text>}
            </Box>

            <Box mt={['3rem', '3.5rem', '4rem']}>
                <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, {userName}</Text>
                <Text fontSize={['sm', 'md']}>{desc}</Text>
            </Box>
        </Box>
    );
};

export default Greetings;
