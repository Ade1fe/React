import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Image,Text, useToast } from "@chakra-ui/react";
import { Footer, Navbar } from "../../components";
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from "../../firebase";

const SettingsPage = () => {
    const auth = getAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [allergies, setAllergies] = useState('');
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
            if (user) {
                setDisplayName(user.displayName || '');
                setEmail(user.email || '');
                fetchUserData(user.uid);
            }
        });

        async function fetchUserData(userId: string) {
            try {
                const userDocRef = doc(firestore, 'foodappusers', userId);
                const docSnapshot = await getDoc(userDocRef);
    
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setUserName(userData.username);
                    setPhoneNumber(userData.phonenumber || ''); 
                    setAddress(userData.address || ''); 
                    setAllergies(userData.allergies || '');
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.log('Error getting document:', error);
            } finally {
                setLoading(false);
            }
        }

        return () => unsubscribe();
    }, [auth]);

    const handleSave = () => {
        const user = auth.currentUser;
        if (user) {
            updateProfile(user, { displayName })
                .then(() => {
                    toast({
                        title: 'Profile updated successfully',
                        status: "success",
                        position: 'top-left',
                        duration: 3000,
                        isClosable: true,
                      });
                    console.log('Profile updated successfully');
                })
                .catch(error => {
                    toast({
                        title: 'Error updating profile:',
                        status: "error",
                        position: 'top-left',
                        duration: 3000,
                        isClosable: true,
                      });
                    console.error('Error updating profile:', error);
                });
            
            const userDocRef = doc(firestore, 'foodappusers', user.uid);
            updateDoc(userDocRef, { address, allergies }); 
        }
    };

    return (
     <Box maxW="1340px" mx="auto" className='text-fonts' >
           <Box display={['grid', 'flex']} >
             <Box px="20px" display={['block', 'none']}>
                    <Navbar isAuthenticated={isAuthenticated} />
                </Box>
                <Box w={['100%', '40%']} height={['30vh', "100%"]} display={['block', 'none']}>
                <Image src='https://img.freepik.com/free-photo/high-angle-japanese-dumplings-arrangement_23-2148809865.jpg?t=st=1711636003~exp=1711639603~hmac=689d18ccb0a0eb33bc59a23ed23427f18e54a38549c9e26e440f789b493ee16c&w=900' w='full' height="full" objectFit="cover" />
            </Box>

            <Box w={['100%', '60%']}>
            <Box px="20px" display={['none','block']}>
                    <Navbar isAuthenticated={isAuthenticated} />
                </Box>

                <Box px="20px" mt="20px">
                    <Text fontSize={['2xl']} my={'2.5rem'} className="">Profile Page</Text>
                    <FormControl id="userName" mt="4">
                        <FormLabel>Full Name</FormLabel>
                        <Input type="text" value={userName} readOnly />
                    </FormControl>

                    <FormControl id="email" mt="4">
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" value={email} readOnly onChange={e => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl id="phoneNumber" mt="4">
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" value={phoneNumber} readOnly onChange={e => setPhoneNumber(e.target.value)} />
                    </FormControl>

                    <FormControl id="address" mt="4">
                        <FormLabel>Address</FormLabel>
                        <Input value={address} onChange={e => setAddress(e.target.value)} />
                    </FormControl>

                    <FormControl id="allergies" mt="4">
                        <FormLabel>Allergies or Dietary Restrictions</FormLabel>
                        <Input value={allergies} onChange={e => setAllergies(e.target.value)} />
                    </FormControl>

                    <Button mt="4" _hover={{bg: "orange.600"}} bg="orange.500" w='150px' color='white' onClick={handleSave} isLoading={loading}>Save</Button>
                </Box>
            </Box>

            <Box w={['100%', '40%']} height={['30vh', "700px"]} display={['none', 'block']}>
                <Image src='https://img.freepik.com/free-photo/high-angle-japanese-dumplings-arrangement_23-2148809865.jpg?t=st=1711636003~exp=1711639603~hmac=689d18ccb0a0eb33bc59a23ed23427f18e54a38549c9e26e440f789b493ee16c&w=900' w='full' height="full" objectFit="cover" />
            </Box>
        </Box>

        <Footer/>
     </Box>
    );
};

export default SettingsPage;
