// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs,

//   DocumentData,
 
//   getDoc,
//   deleteDoc,
//   QuerySnapshot,
// } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Text, VStack, HStack, Avatar } from '@chakra-ui/react';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
//   replies?: Message[];
// }

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

// const ChatComponents: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});



// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersQuery = collection(firestore, 'journal');
//         const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
//         const usersData: User[] = [];
  
//         usersSnapshot.forEach((userDoc) => {
//           const userData = { id: userDoc.id, ...userDoc.data() } as User;
//           usersData.push(userData);
//         });
  
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       }
//     };
  
//     const loadInitialMessages = async () => {
//       if (selectedUser) {
//         createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
//       }
//     };
  
//     fetchUsers();
//     loadInitialMessages();
//   }, [selectedUser]); // Trigger the effect when selectedUser changes
  
//   // Rest of the component remains unchanged
  


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
// console.log('Current User:', user);

//     });
  
//     return () => unsubscribe();
//   }, []);

//   const selectUser = (user: User) => {
//     setSelectedUser(user);
//     createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
//   };

//   const createOrLoadConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationId = createConversationId(senderId, receiverId);

//       // Check if the conversation exists
//       const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
//       const conversationDocSnapshot = await getDoc(conversationDocRef);

//       if (!conversationDocSnapshot.exists()) {
//         // If the conversation doesn't exist, create it
//         await createConversation(senderId, receiverId);
//       }

//       // Load messages for the conversation
//       loadMessages(conversationId);
//     } catch (error) {
//       console.error('Error creating or loading conversation: ', error);
//     }
//   };

//   const createConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationRef = await addDoc(collection(firestore, 'conversations'), {
//         participants: [senderId, receiverId],
//         // Add other metadata...
//       });

//       console.log('Conversation created with ID: ', conversationRef.id);
//     } catch (error) {
//       console.error('Error creating conversation: ', error);
//     }
//   };




// const loadMessages = async (conversationId: string) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
//     const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));
  
//     const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
//       const messagesData: Message[] = [];
//       const userIds: Set<string> = new Set();
  
//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//         messagesData.push(messageData);
  
//         // Collect unique user IDs for fetching usernames
//         userIds.add(messageData.senderId);
//         messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
//       });
  
//       // Fetch and update usernames
//       const usernamesData: Record<string, string> = {};
  
//       // Fetch usernames
//       await Promise.all(
//         Array.from(userIds).map(async (userId) => {
//           if (!usernamesData[userId]) {
//             const userDocRef = doc(firestore, 'journal', userId);
//             const userDocSnapshot = await getDoc(userDocRef);
  
//             if (userDocSnapshot.exists()) {
//               const userData = userDocSnapshot.data() as User;
//               usernamesData[userId] = userData.username;
//             }
//           }
//         })
//       );
  
//       // Fetch and update replies
//       messagesData.forEach(async (message) => {
//         if (message.replies) {
//           const repliesCollectionRef = collection(
//             firestore,
//             'conversations',
//             conversationId,
//             'messages',
//             message.id,
//             'replies'
//           );
//           const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));
//           const repliesSnapshot = await getDocs(repliesQuery);
  
//           const repliesData: Message[] = [];
//           repliesSnapshot.forEach((replyDoc) => {
//             const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
//             repliesData.push(replyData);
//           });
  
//           message.replies = repliesData;
//         }
//       });
  
//       setMessages(messagesData);
//       setUsernames(usernamesData);
//     });
  
//     return () => {
//       messagesUnsubscribe();
//     };
//   };

  
  

  

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);

//         await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const sendMessageToFirestore = async (
//     conversationId: string,
//     senderId: string,
//     receiverId: string,
//     text: string
//   ) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

//     await addDoc(messagesCollectionRef, {
//       text,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);
//         const messageId = replyingTo;

//         await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };

//   const sendReplyToFirestore = async (
//     conversationId: string,
//     messageId: string,
//     senderId: string,
//     receiverId: string,
//     replyMessage: string
//   ) => {
//     const repliesCollectionRef = collection(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId,
//       'replies'
//     );

//     const replyRef = await addDoc(repliesCollectionRef, {
//       text: replyMessage,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });

//     const parentMessageRef = doc(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId
//     );

//     await updateDoc(parentMessageRef, {
//       replies: arrayUnion({
//         id: replyRef.id,
//         text: replyMessage,
//         senderId,
//         receiverId,
//       }),
//     });

//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === messageId) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
//           };
//         } else {
//           return message;
//         }
//       });
//     });
//   };

//   const deleteMessage = async (messageId: string) => {
//     try {
//       const senderId = auth.currentUser?.uid || 'anonymous';
//       const receiverId = selectedUser?.id || 'userId2';

//       await deleteDoc(
//         doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
//       );
//     } catch (error) {
//       console.error('Error deleting message: ', error);
//     }
//   };





// return (
//     <VStack align="center" p={4}>
//       <Text fontSize="2xl">Chat Application</Text>
//       <HStack spacing={4}>
//         <VStack align="start">
//           {users.map((user) => (
//             <Box
//               key={user.id}
//               border="1px"
//               borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
//               borderRadius="md"
//               p={2}
//               onClick={() => selectUser(user)}
//               cursor="pointer"
//             >
//               <Text fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
//             </Box>
//           ))}
//         </VStack>
//         <VStack align="start" spacing={4} w="300px">
//           <Box
//             border="1px"
//             borderColor="gray.200"
//             borderRadius="md"
//             p={4}
//             h="400px"
//             overflowY="auto"
//             w="100%"
//           >
//             {messages.map((message) => (
//               <Box key={message.id} p={2} border="1px" borderColor="gray.100" borderRadius="md">
//                 <HStack>
//                   <Avatar size="sm" name={usernames[message.senderId] || 'Unknown'} />
//                   <Text fontSize="sm" color="gray.500" ml={2}>
//                     {usernames[message.senderId] || 'Unknown User'}
//                   </Text>
//                 </HStack>
//                 <Text>{message.text}</Text>
//                 <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
//                   Delete
//                 </Button>
//                 <Button
//                   size="sm"
//                   colorScheme="blue"
//                   onClick={() => handleReply(message.id)}
//                   disabled={replyingTo !== null}
//                 >
//                   Reply
//                 </Button>
              
    
// {message.replies && message.replies.length > 0 && (
//   <VStack align="start" pl={4}>
//     {message.replies.map((reply) => (
//       <Box key={reply.id} p={1} borderLeft="2px" borderColor="gray.100">
//         <Text fontSize="sm" color="gray.500">
//           {usernames[reply.senderId] || 'Unknown User'}
//         </Text>
//         <Text>{reply.text}</Text>
//         <Button size="sm" colorScheme="red" onClick={() => deleteMessage(reply.id)}>
//           Delete
//         </Button>
//       </Box>
//     ))}
//   </VStack>
// )}

//               </Box>
//             ))}
//           </Box>
//           <Textarea
//             value={replyMessage}
//             onChange={(e) => setReplyMessage(e.target.value)}
//             placeholder="Type your reply..."
//             isDisabled={replyingTo === null}
//           />
//           <Button
//             size="sm"
//             colorScheme="teal"
//             onClick={sendReply}
//             isDisabled={replyMessage.trim() === ''}
//           >
//             Send Reply
//           </Button>
//         </VStack>
//       </HStack>
//       <Box>
//         <Textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <Button size="md" colorScheme="teal" onClick={sendMessage} isDisabled={newMessage.trim() === ''}>
//           Send Message
//         </Button>
//       </Box>
//     </VStack>
//   );

// };

// const createConversationId = (user1: string, user2: string) => {
//   // Create a unique conversation ID by concatenating user IDs and sorting them
//   const users = [user1, user2].sort();
//   return `${users[0]}_${users[1]}`;
// };

// export default ChatComponents;










// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs,

//   DocumentData,
 
//   getDoc,
//   deleteDoc,
//   QuerySnapshot,
// } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Text, VStack, HStack, Avatar } from '@chakra-ui/react';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
//   replies?: Message[];
// }

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

// const ChatComponents: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});



// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersQuery = collection(firestore, 'journal');
//         const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
//         const usersData: User[] = [];
  
//         usersSnapshot.forEach((userDoc) => {
//           const userData = { id: userDoc.id, ...userDoc.data() } as User;
//           usersData.push(userData);
//         });
  
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       }
//     };
  
//     const loadInitialMessages = async () => {
//       if (selectedUser) {
//         createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
//       }
//     };
  
//     fetchUsers();
//     loadInitialMessages();
//   }, [selectedUser]); // Trigger the effect when selectedUser changes
  
//   // Rest of the component remains unchanged
  


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
// console.log('Current User:', user);

//     });
  
//     return () => unsubscribe();
//   }, []);

//   const selectUser = (user: User) => {
//     setSelectedUser(user);
//     createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
//   };

//   const createOrLoadConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationId = createConversationId(senderId, receiverId);

//       // Check if the conversation exists
//       const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
//       const conversationDocSnapshot = await getDoc(conversationDocRef);

//       if (!conversationDocSnapshot.exists()) {
//         // If the conversation doesn't exist, create it
//         await createConversation(senderId, receiverId);
//       }

//       // Load messages for the conversation
//       loadMessages(conversationId);
//     } catch (error) {
//       console.error('Error creating or loading conversation: ', error);
//     }
//   };

//   const createConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationRef = await addDoc(collection(firestore, 'conversations'), {
//         participants: [senderId, receiverId],
//         // Add other metadata...
//       });

//       console.log('Conversation created with ID: ', conversationRef.id);
//     } catch (error) {
//       console.error('Error creating conversation: ', error);
//     }
//   };




// const loadMessages = async (conversationId: string) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
//     const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));
  
//     const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
//       const messagesData: Message[] = [];
//       const userIds: Set<string> = new Set();
  
//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//         messagesData.push(messageData);
  
//         // Collect unique user IDs for fetching usernames
//         userIds.add(messageData.senderId);
//         messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
//       });
  
//       // Fetch and update usernames
//       const usernamesData: Record<string, string> = {};
  
//       // Fetch usernames
//       await Promise.all(
//         Array.from(userIds).map(async (userId) => {
//           if (!usernamesData[userId]) {
//             const userDocRef = doc(firestore, 'journal', userId);
//             const userDocSnapshot = await getDoc(userDocRef);
  
//             if (userDocSnapshot.exists()) {
//               const userData = userDocSnapshot.data() as User;
//               usernamesData[userId] = userData.username;
//             }
//           }
//         })
//       );
  
//       // Fetch and update replies
//       messagesData.forEach(async (message) => {
//         if (message.replies) {
//           const repliesCollectionRef = collection(
//             firestore,
//             'conversations',
//             conversationId,
//             'messages',
//             message.id,
//             'replies'
//           );
//           const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));
//           const repliesSnapshot = await getDocs(repliesQuery);
  
//           const repliesData: Message[] = [];
//           repliesSnapshot.forEach((replyDoc) => {
//             const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
//             repliesData.push(replyData);
//           });
  
//           message.replies = repliesData;
//         }
//       });
  
//       setMessages(messagesData);
//       setUsernames(usernamesData);
//     });
  
//     return () => {
//       messagesUnsubscribe();
//     };
//   };

  
  

  

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);

//         await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const sendMessageToFirestore = async (
//     conversationId: string,
//     senderId: string,
//     receiverId: string,
//     text: string
//   ) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

//     await addDoc(messagesCollectionRef, {
//       text,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);
//         const messageId = replyingTo;

//         await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };

//   const sendReplyToFirestore = async (
//     conversationId: string,
//     messageId: string,
//     senderId: string,
//     receiverId: string,
//     replyMessage: string
//   ) => {
//     const repliesCollectionRef = collection(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId,
//       'replies'
//     );

//     const replyRef = await addDoc(repliesCollectionRef, {
//       text: replyMessage,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });

//     const parentMessageRef = doc(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId
//     );

//     await updateDoc(parentMessageRef, {
//       replies: arrayUnion({
//         id: replyRef.id,
//         text: replyMessage,
//         senderId,
//         receiverId,
//       }),
//     });

//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === messageId) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
//           };
//         } else {
//           return message;
//         }
//       });
//     });
//   };

//   const deleteMessage = async (messageId: string) => {
//     try {
//       const senderId = auth.currentUser?.uid || 'anonymous';
//       const receiverId = selectedUser?.id || 'userId2';

//       await deleteDoc(
//         doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
//       );
//     } catch (error) {
//       console.error('Error deleting message: ', error);
//     }
//   };





// return (
//     <VStack align="center" p={4}>
//       <Text fontSize="2xl">Chat Application</Text>
//       <HStack spacing={4}>
//         <VStack align="start">
//           {users.map((user) => (
//             <Box
//               key={user.id}
//               border="1px"
//               borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
//               borderRadius="md"
//               p={2}
//               onClick={() => selectUser(user)}
//               cursor="pointer"
//             >
//               <Text fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
//             </Box>
//           ))}
//         </VStack>
//         <VStack align="start" spacing={4} w="300px">
//           <Box
//             border="1px"
//             borderColor="gray.200"
//             borderRadius="md"
//             p={4}
//             h="400px"
//             overflowY="auto"
//             w="100%"
//           >
//             {messages.map((message) => (
//               <Box key={message.id} p={2} border="1px" borderColor="gray.100" borderRadius="md">
//                 <HStack>
//                   <Avatar size="sm" name={usernames[message.senderId] || 'Unknown'} />
//                   <Text fontSize="sm" color="gray.500" ml={2}>
//                     {usernames[message.senderId] || 'Unknown User'}
//                   </Text>
//                 </HStack>
//                 <Text>{message.text}</Text>
//                 <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
//                   Delete
//                 </Button>
//                 <Button
//                   size="sm"
//                   colorScheme="blue"
//                   onClick={() => handleReply(message.id)}
//                   disabled={replyingTo !== null}
//                 >
//                   Reply
//                 </Button>
              
    
// {message.replies && message.replies.length > 0 && (
//   <VStack align="start" pl={4}>
//     {message.replies.map((reply) => (
//       <Box key={reply.id} p={1} borderLeft="2px" borderColor="gray.100">
//         <Text fontSize="sm" color="gray.500">
//           {usernames[reply.senderId] || 'Unknown User'}
//         </Text>
//         <Text>{reply.text}</Text>
//         <Button size="sm" colorScheme="red" onClick={() => deleteMessage(reply.id)}>
//           Delete
//         </Button>
//       </Box>
//     ))}
//   </VStack>
// )}

//               </Box>
//             ))}
//           </Box>
//           <Textarea
//             value={replyMessage}
//             onChange={(e) => setReplyMessage(e.target.value)}
//             placeholder="Type your reply..."
//             isDisabled={replyingTo === null}
//           />
//           <Button
//             size="sm"
//             colorScheme="teal"
//             onClick={sendReply}
//             isDisabled={replyMessage.trim() === ''}
//           >
//             Send Reply
//           </Button>
//         </VStack>
//       </HStack>
//       <Box>
//         <Textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <Button size="md" colorScheme="teal" onClick={sendMessage} isDisabled={newMessage.trim() === ''}>
//           Send Message
//         </Button>
//       </Box>
//     </VStack>
//   );

// };

// const createConversationId = (user1: string, user2: string) => {
//   // Create a unique conversation ID by concatenating user IDs and sorting them
//   const users = [user1, user2].sort();
//   return `${users[0]}_${users[1]}`;
// };

// export default ChatComponents;



























// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs,

//   DocumentData,
 
//   getDoc,
//   deleteDoc,
//   QuerySnapshot,
// } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Text, VStack, HStack, Avatar } from '@chakra-ui/react';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
//   replies?: Message[];
// }

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

// const ChatComponents: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});



// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersQuery = collection(firestore, 'journal');
//         const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
//         const usersData: User[] = [];
  
//         usersSnapshot.forEach((userDoc) => {
//           const userData = { id: userDoc.id, ...userDoc.data() } as User;
//           usersData.push(userData);
//         });
  
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       }
//     };
  
//     const loadInitialMessages = async () => {
//       if (selectedUser) {
//         createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
//       }
//     };
  
//     fetchUsers();
//     loadInitialMessages();
//   }, [selectedUser]); // Trigger the effect when selectedUser changes
  
//   // Rest of the component remains unchanged
  


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
// console.log('Current User:', user);

//     });
  
//     return () => unsubscribe();
//   }, []);

//   const selectUser = (user: User) => {
//     setSelectedUser(user);
//     createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
//   };

//   const createOrLoadConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationId = createConversationId(senderId, receiverId);

//       // Check if the conversation exists
//       const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
//       const conversationDocSnapshot = await getDoc(conversationDocRef);

//       if (!conversationDocSnapshot.exists()) {
//         // If the conversation doesn't exist, create it
//         await createConversation(senderId, receiverId);
//       }

//       // Load messages for the conversation
//       loadMessages(conversationId);
//     } catch (error) {
//       console.error('Error creating or loading conversation: ', error);
//     }
//   };

//   const createConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationRef = await addDoc(collection(firestore, 'conversations'), {
//         participants: [senderId, receiverId],
//         // Add other metadata...
//       });

//       console.log('Conversation created with ID: ', conversationRef.id);
//     } catch (error) {
//       console.error('Error creating conversation: ', error);
//     }
//   };



// const loadMessages = async (conversationId: string) => {
//   const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
//   const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));

//   const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
//     const messagesData: Message[] = [];
//     const userIds: Set<string> = new Set();

//     querySnapshot.forEach((doc) => {
//       const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//       messagesData.push(messageData);

//       // Collect unique user IDs for fetching usernames
//       userIds.add(messageData.senderId);
//       messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
//     });

//     // Fetch and update usernames
//     await Promise.all(
//       Array.from(userIds).map(async (userId) => {
//         if (!usernames[userId]) {
//           const userDocRef = doc(firestore, 'journal', userId);
//           const userDocSnapshot = await getDoc(userDocRef);

//           if (userDocSnapshot.exists()) {
//             const userData = userDocSnapshot.data() as User;
//             setUsernames((prevUsernames) => ({
//               ...prevUsernames,
//               [userId]: userData.username,
//             }));
//           }
//         }
//       })
//     );

//     // Fetch and update replies
//     messagesData.forEach(async (message) => {
//       if (message.replies) {
//         const repliesCollectionRef = collection(
//           firestore,
//           'conversations',
//           conversationId,
//           'messages',
//           message.id,
//           'replies'
//         );

//         const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));

//         onSnapshot(repliesQuery, (repliesSnapshot) => {
//           const repliesData: Message[] = [];
//           repliesSnapshot.forEach((replyDoc) => {
//             const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
//             repliesData.push(replyData);
//           });

//           message.replies = repliesData;
//           setMessages([...messagesData]); // Update state with real-time changes
//         });
//       }
//     });

//     setMessages(messagesData);
//   });

//   return () => {
//     messagesUnsubscribe();
//   };
// };




//   const sendMessage = async () => {
//     if (newMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);

//         await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const sendMessageToFirestore = async (
//     conversationId: string,
//     senderId: string,
//     receiverId: string,
//     text: string
//   ) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

//     await addDoc(messagesCollectionRef, {
//       text,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);
//         const messageId = replyingTo;

//         await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };

//   const sendReplyToFirestore = async (
//     conversationId: string,
//     messageId: string,
//     senderId: string,
//     receiverId: string,
//     replyMessage: string
//   ) => {
//     const repliesCollectionRef = collection(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId,
//       'replies'
//     );

//     const replyRef = await addDoc(repliesCollectionRef, {
//       text: replyMessage,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });

//     const parentMessageRef = doc(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId
//     );

//     await updateDoc(parentMessageRef, {
//       replies: arrayUnion({
//         id: replyRef.id,
//         text: replyMessage,
//         senderId,
//         receiverId,
//       }),
//     });

//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === messageId) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
//           };
//         } else {
//           return message;
//         }
//       });
//     });
//   };

//   const deleteMessage = async (messageId: string) => {
//     try {
//       const senderId = auth.currentUser?.uid || 'anonymous';
//       const receiverId = selectedUser?.id || 'userId2';

//       await deleteDoc(
//         doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
//       );
//     } catch (error) {
//       console.error('Error deleting message: ', error);
//     }
//   };



// return (
//   <VStack align="center" p={4}>
//     <Text fontSize="2xl">Chat Application</Text>
//     <HStack spacing={4}>
//       <VStack align="start">
//         {users.map((user) => (
//           <Box
//             key={`user-${user.id}`}
//             border="1px"
//             borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
//             borderRadius="md"
//             p={2}
//             onClick={() => selectUser(user)}
//             cursor="pointer"
//           >
//             <Text fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
//           </Box>
//         ))}
//       </VStack>
//       <VStack align="start" spacing={4} w="300px">
//         <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} h="400px" overflowY="auto" w="100%">
//           {messages.map((message) => (
//             <Box key={`message-${message.id}`} p={2} border="1px" borderColor="gray.100" borderRadius="md">
//               <HStack>
//                 <Avatar size="sm" name={usernames[message.senderId] || 'Unknown'} />
//                 <Text fontSize="sm" color="gray.500" ml={2}>
//                   {usernames[message.senderId] || 'Unknown User'}
//                 </Text>
//               </HStack>
//               <Text>{message.text}</Text>
//               <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
//                 Delete
//               </Button>
//               <Button
//                 size="sm"
//                 colorScheme="blue"
//                 onClick={() => handleReply(message.id)}
//                 disabled={replyingTo !== null}
//               >
//                 Reply
//               </Button>

//               {message.replies && message.replies.length > 0 && (
//                 <VStack align="start" pl={4}>
//                   {message.replies.map((reply, index) => (
//                     <Box key={`reply-${reply.id}-${index}`} p={1} borderLeft="2px" borderColor="gray.100">
//                       <Text fontSize="sm" color="gray.500">
//                         {usernames[reply.senderId] || 'Unknown User'}
//                       </Text>
//                       <Text>{reply.text}</Text>
//                       {/* <Button size="sm" colorScheme="red" onClick={() => deleteMessage(reply.id)}>
//                         Delete
//                       </Button> */}
//                     </Box>
//                   ))}
//                 </VStack>
//               )}

//               <Textarea
//                 key={`replyTextarea-${message.id}`}
//                 value={replyMessage}
//                 onChange={(e) => setReplyMessage(e.target.value)}
//                 placeholder="Type your reply..."
//                 isDisabled={replyingTo !== message.id}
//               />
//               <Button
//                 key={`sendReplyButton-${message.id}`}
//                 size="sm"
//                 colorScheme="teal"
//                 onClick={sendReply}
//                 isDisabled={replyMessage.trim() === ''}
//               >
//                 Send Reply
//               </Button>
//             </Box>
//           ))}
//         </Box>
//       </VStack>
//     </HStack>
//     <Box>
//       <Textarea
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <Button size="md" colorScheme="teal" onClick={sendMessage} isDisabled={newMessage.trim() === ''}>
//         Send Message
//       </Button>
//     </Box>
//   </VStack>
// );


// };

// const createConversationId = (user1: string, user2: string) => {
//   // Create a unique conversation ID by concatenating user IDs and sorting them
//   const users = [user1, user2].sort();
//   return `${users[0]}_${users[1]}`;
// };

// export default ChatComponents;





















// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs,

//   DocumentData,
 
//   getDoc,
//   deleteDoc,
//   QuerySnapshot,
// } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Text, VStack, HStack, Avatar, Flex } from '@chakra-ui/react';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
//   replies?: Message[];
// }

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

// const ChatComponents: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});
//   const [activeReplyMessageId, setActiveReplyMessageId] = useState<string | null>(null);




// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersQuery = collection(firestore, 'journal');
//         const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
//         const usersData: User[] = [];
  
//         usersSnapshot.forEach((userDoc) => {
//           const userData = { id: userDoc.id, ...userDoc.data() } as User;
//           usersData.push(userData);
//         });
  
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       }
//     };
  
//     const loadInitialMessages = async () => {
//       if (selectedUser) {
//         createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
//       }
//     };
  
//     fetchUsers();
//     loadInitialMessages();
//   }, [selectedUser]); // Trigger the effect when selectedUser changes
  
//   // Rest of the component remains unchanged
  


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
// console.log('Current User:', user);

//     });
  
//     return () => unsubscribe();
//   }, []);

//   const selectUser = (user: User) => {
//     setSelectedUser(user);
//     createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
//   };

//   const createOrLoadConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationId = createConversationId(senderId, receiverId);

//       // Check if the conversation exists
//       const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
//       const conversationDocSnapshot = await getDoc(conversationDocRef);

//       if (!conversationDocSnapshot.exists()) {
//         // If the conversation doesn't exist, create it
//         await createConversation(senderId, receiverId);
//       }

//       // Load messages for the conversation
//       loadMessages(conversationId);
//     } catch (error) {
//       console.error('Error creating or loading conversation: ', error);
//     }
//   };

//   const createConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationRef = await addDoc(collection(firestore, 'conversations'), {
//         participants: [senderId, receiverId],
//         // Add other metadata...
//       });

//       console.log('Conversation created with ID: ', conversationRef.id);
//     } catch (error) {
//       console.error('Error creating conversation: ', error);
//     }
//   };



// const loadMessages = async (conversationId: string) => {
//   const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
//   const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));

//   const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
//     const messagesData: Message[] = [];
//     const userIds: Set<string> = new Set();

//     querySnapshot.forEach((doc) => {
//       const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//       messagesData.push(messageData);

//       // Collect unique user IDs for fetching usernames
//       userIds.add(messageData.senderId);
//       messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
//     });

//     // Fetch and update usernames
//     await Promise.all(
//       Array.from(userIds).map(async (userId) => {
//         if (!usernames[userId]) {
//           const userDocRef = doc(firestore, 'journal', userId);
//           const userDocSnapshot = await getDoc(userDocRef);

//           if (userDocSnapshot.exists()) {
//             const userData = userDocSnapshot.data() as User;
//             setUsernames((prevUsernames) => ({
//               ...prevUsernames,
//               [userId]: userData.username,
//             }));
//           }
//         }
//       })
//     );

//     // Fetch and update replies
//     messagesData.forEach(async (message) => {
//       if (message.replies) {
//         const repliesCollectionRef = collection(
//           firestore,
//           'conversations',
//           conversationId,
//           'messages',
//           message.id,
//           'replies'
//         );

//         const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));

//         onSnapshot(repliesQuery, (repliesSnapshot) => {
//           const repliesData: Message[] = [];
//           repliesSnapshot.forEach((replyDoc) => {
//             const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
//             repliesData.push(replyData);
//           });

//           message.replies = repliesData;
//           setMessages([...messagesData]); // Update state with real-time changes
//         });
//       }
//     });

//     setMessages(messagesData);
//   });

//   return () => {
//     messagesUnsubscribe();
//   };
// };




//   const sendMessage = async () => {
//     if (newMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);

//         await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const sendMessageToFirestore = async (
//     conversationId: string,
//     senderId: string,
//     receiverId: string,
//     text: string
//   ) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

//     await addDoc(messagesCollectionRef, {
//       text,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//     setActiveReplyMessageId(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);
//         const messageId = replyingTo;

//         await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };

//   const sendReplyToFirestore = async (
//     conversationId: string,
//     messageId: string,
//     senderId: string,
//     receiverId: string,
//     replyMessage: string
//   ) => {
//     const repliesCollectionRef = collection(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId,
//       'replies'
//     );

//     const replyRef = await addDoc(repliesCollectionRef, {
//       text: replyMessage,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });

//     const parentMessageRef = doc(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId
//     );

//     await updateDoc(parentMessageRef, {
//       replies: arrayUnion({
//         id: replyRef.id,
//         text: replyMessage,
//         senderId,
//         receiverId,
//       }),
//     });

//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === messageId) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
//           };
//         } else {
//           return message;
//         }
//       });
//     });
//   };

//   const deleteMessage = async (messageId: string) => {
//     try {
//       const senderId = auth.currentUser?.uid || 'anonymous';
//       const receiverId = selectedUser?.id || 'userId2';

//       await deleteDoc(
//         doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
//       );
//     } catch (error) {
//       console.error('Error deleting message: ', error);
//     }
//   };


//   return (
//     <VStack align="center" p={4}>
//       <Text fontSize="2xl">Chat Application</Text>
//       <HStack spacing={4}>
//         <VStack align="start">
//           {users.map((user) => (
//             <Box
//               key={`user-${user.id}`}
//               border="1px"
//               borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
//               borderRadius="md"
//               p={2}
//               onClick={() => selectUser(user)}
//               cursor="pointer"
//             >
//               <Text fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
//             </Box>
//           ))}
//         </VStack>
//         <VStack align="start" spacing={4} w="300px">
//           <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} h="400px" overflowY="auto" w="100%">
//             {messages.map((message) => (
//               <Box key={`message-${message.id}`} p={2} border="1px" borderColor="gray.100" borderRadius="md">
//                 <HStack>
//                   <Avatar size="md" name={usernames[message.senderId] || 'Unknown'} />
//                   <Text fontSize="sm" color="gray.500" ml={2}>
//                     {usernames[message.senderId] || 'Unknown User'}
//                   </Text>
//                 </HStack>
//                 <Text>{message.text}</Text>
//                 <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
//                   Delete
//                 </Button>
//                 <Button
//                   size="sm"
//                   colorScheme="blue"
//                   onClick={() => handleReply(message.id)}
//                   disabled={replyingTo !== null}
//                 >
//                   Reply
//                 </Button>
  
//                 {/* Conditionally render the reply textarea based on the activeReplyMessageId */}
//                 {activeReplyMessageId === message.id && (
//                   <>
//                     <Textarea
//                       key={`replyTextarea-${message.id}`}
//                       value={replyMessage}
//                       onChange={(e) => setReplyMessage(e.target.value)}
//                       placeholder="Type your reply..."
//                     />
//                     <Button
//                       key={`sendReplyButton-${message.id}`}
//                       size="sm"
//                       colorScheme="teal"
//                       onClick={sendReply}
//                       isDisabled={replyMessage.trim() === ''}
//                     >
//                       Send Reply
//                     </Button>
//                   </>
//                 )}
  
//                 {message.replies && message.replies.length > 0 && (
//                   <VStack align="start" pl={4} mt='10px'>
//                     {message.replies.map((reply, index) => (
//                       <Box key={`reply-${reply.id}-${index}`} p={1} borderLeft="2px" borderColor="gray.100">
//                         <Flex className="" alignItems='center' gap='2'>
//                         <Avatar size="sm" name= {usernames[reply.senderId] || 'Unknown User'} />
//                         <Text fontSize="sm" color="gray.500">
//                           {usernames[reply.senderId] || 'Unknown User'}
//                         </Text>
                        
//                         </Flex>
//                         <Text>{reply.text}</Text>
//                       </Box>
//                     ))}
//                   </VStack>
//                 )}
//               </Box>
//             ))}
//           </Box>
//         </VStack>
//       </HStack>
//       <Box>
//         <Textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <Button size="md" colorScheme="teal" onClick={sendMessage} isDisabled={newMessage.trim() === ''}>
//           Send Message
//         </Button>
//       </Box>
//     </VStack>
//   );
  


// };

// const createConversationId = (user1: string, user2: string) => {
//   // Create a unique conversation ID by concatenating user IDs and sorting them
//   const users = [user1, user2].sort();
//   return `${users[0]}_${users[1]}`;
// };

// export default ChatComponents;













































// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   doc,
//   updateDoc,
//   arrayUnion,
//   getDocs,

//   DocumentData,
 
//   getDoc,
//   deleteDoc,
//   QuerySnapshot,
// } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Text, VStack, HStack, Avatar, Flex } from '@chakra-ui/react';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
//   replies?: Message[];
// }

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

// const ChatComponents: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});
//   const [activeReplyMessageId, setActiveReplyMessageId] = useState<string | null>(null);




// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersQuery = collection(firestore, 'journal');
//         const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
//         const usersData: User[] = [];
  
//         usersSnapshot.forEach((userDoc) => {
//           const userData = { id: userDoc.id, ...userDoc.data() } as User;
//           usersData.push(userData);
//         });
  
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       }
//     };
  
//     const loadInitialMessages = async () => {
//       if (selectedUser) {
//         createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
//       }
//     };
  
//     fetchUsers();
//     loadInitialMessages();
//   }, [selectedUser]); // Trigger the effect when selectedUser changes
  
//   // Rest of the component remains unchanged
  


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
// console.log('Current User:', user);

//     });
  
//     return () => unsubscribe();
//   }, []);

//   const selectUser = (user: User) => {
//     setSelectedUser(user);
//     createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
//   };

//   const createOrLoadConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationId = createConversationId(senderId, receiverId);

//       // Check if the conversation exists
//       const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
//       const conversationDocSnapshot = await getDoc(conversationDocRef);

//       if (!conversationDocSnapshot.exists()) {
//         // If the conversation doesn't exist, create it
//         await createConversation(senderId, receiverId);
//       }

//       // Load messages for the conversation
//       loadMessages(conversationId);
//     } catch (error) {
//       console.error('Error creating or loading conversation: ', error);
//     }
//   };

//   const createConversation = async (senderId: string, receiverId: string) => {
//     try {
//       const conversationRef = await addDoc(collection(firestore, 'conversations'), {
//         participants: [senderId, receiverId],
//         // Add other metadata...
//       });

//       console.log('Conversation created with ID: ', conversationRef.id);
//     } catch (error) {
//       console.error('Error creating conversation: ', error);
//     }
//   };



// const loadMessages = async (conversationId: string) => {
//   const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
//   const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));

//   const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
//     const messagesData: Message[] = [];
//     const userIds: Set<string> = new Set();

//     querySnapshot.forEach((doc) => {
//       const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//       messagesData.push(messageData);

//       // Collect unique user IDs for fetching usernames
//       userIds.add(messageData.senderId);
//       messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
//     });

//     // Fetch and update usernames
//     await Promise.all(
//       Array.from(userIds).map(async (userId) => {
//         if (!usernames[userId]) {
//           const userDocRef = doc(firestore, 'journal', userId);
//           const userDocSnapshot = await getDoc(userDocRef);

//           if (userDocSnapshot.exists()) {
//             const userData = userDocSnapshot.data() as User;
//             setUsernames((prevUsernames) => ({
//               ...prevUsernames,
//               [userId]: userData.username,
//             }));
//           }
//         }
//       })
//     );

//     // Fetch and update replies
//     messagesData.forEach(async (message) => {
//       if (message.replies) {
//         const repliesCollectionRef = collection(
//           firestore,
//           'conversations',
//           conversationId,
//           'messages',
//           message.id,
//           'replies'
//         );

//         const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));

//         onSnapshot(repliesQuery, (repliesSnapshot) => {
//           const repliesData: Message[] = [];
//           repliesSnapshot.forEach((replyDoc) => {
//             const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
//             repliesData.push(replyData);
//           });

//           message.replies = repliesData;
//           setMessages([...messagesData]); // Update state with real-time changes
//         });
//       }
//     });

//     setMessages(messagesData);
//   });

//   return () => {
//     messagesUnsubscribe();
//   };
// };




//   const sendMessage = async () => {
//     if (newMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);

//         await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const sendMessageToFirestore = async (
//     conversationId: string,
//     senderId: string,
//     receiverId: string,
//     text: string
//   ) => {
//     const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

//     await addDoc(messagesCollectionRef, {
//       text,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//     setActiveReplyMessageId(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
//       try {
//         const senderId = auth.currentUser?.uid || 'anonymous';
//         const receiverId = selectedUser.id;
//         const conversationId = createConversationId(senderId, receiverId);
//         const messageId = replyingTo;

//         await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };

//   const sendReplyToFirestore = async (
//     conversationId: string,
//     messageId: string,
//     senderId: string,
//     receiverId: string,
//     replyMessage: string
//   ) => {
//     const repliesCollectionRef = collection(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId,
//       'replies'
//     );

//     const replyRef = await addDoc(repliesCollectionRef, {
//       text: replyMessage,
//       timestamp: new Date(),
//       senderId,
//       receiverId,
//     });

//     const parentMessageRef = doc(
//       firestore,
//       'conversations',
//       conversationId,
//       'messages',
//       messageId
//     );

//     await updateDoc(parentMessageRef, {
//       replies: arrayUnion({
//         id: replyRef.id,
//         text: replyMessage,
//         senderId,
//         receiverId,
//       }),
//     });

//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === messageId) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
//           };
//         } else {
//           return message;
//         }
//       });
//     });
//   };

//   const deleteMessage = async (messageId: string) => {
//     try {
//       const senderId = auth.currentUser?.uid || 'anonymous';
//       const receiverId = selectedUser?.id || 'userId2';

//       await deleteDoc(
//         doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
//       );
//     } catch (error) {
//       console.error('Error deleting message: ', error);
//     }
//   };


//   return (
//     <Box p={4}>
//       <Text fontSize="2xl">Chat Application</Text>
//       <HStack align='start' spacing={4}>
//         <Box  mr={4}>
//           {users.map((user) => (
//             <Box
//               key={`user-${user.id}`}
//               border="1px"
//               borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
//               borderRadius="md"
//               p={2}
//               onClick={() => selectUser(user)}
//               cursor="pointer"
//               mb={['10px', '15px', '20px']}
//             >
//               <Text noOfLines={1} textTransform='capitalize' fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
//             </Box>
//           ))}
//         </Box>
//         <Box   w="full">
//           <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} h={['500px', '550px',"600px"]} overflowY="auto" w="100%">
//             {messages.map((message) => (
//               <Box key={`message-${message.id}`} p={4} shadow='base' mb={[5,6,7,8]} border="1px" borderColor="gray.100" borderRadius="md">
//                 <HStack textTransform='capitalize'>
//                   <Avatar size="md" name={usernames[message.senderId] || 'Unknown'} />
//                   <Text fontSize="sm" color="gray.500" ml={2}>
//                     {usernames[message.senderId] || 'Unknown User'}
//                   </Text>
//                 </HStack>
//                 <Text>{message.text}</Text>
//               <Flex className="" gap={4} mt={2}>
//               <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
//                   Delete
//                 </Button>
//                 <Button
//                   size="sm"
//                   colorScheme="blue"
//                   onClick={() => handleReply(message.id)}
//                   disabled={replyingTo !== null}
//                 >
//                   Reply
//                 </Button>
//               </Flex>
  
         
  
//                 {message.replies && message.replies.length > 0 && (
//                   <VStack align="start"  my='15px'>
//                     {message.replies.map((reply, index) => (
//                       <Box key={`reply-${reply.id}-${index}`} ml={2} w='full'  p={3} borderRadius='10px' border="2px" borderColor="#f1f1f1">
//                         <Flex className="" alignItems='center' mb={1} gap='2'>
//                         <Avatar size="sm" name= {usernames[reply.senderId] || 'Unknown User'} />
//                         <Text fontSize="sm" color="gray.500">
//                           {usernames[reply.senderId] || 'Unknown User'}
//                         </Text>
                        
//                         </Flex>
//                         <Text>{reply.text}</Text>
//                       </Box>
//                     ))}
//                   </VStack>
//                 )}



//                        {/* Conditionally render the reply textarea based on the activeReplyMessageId */}
//                        {activeReplyMessageId === message.id && (
//                   <Box ml={2} mt={2}>
//                     <Textarea
//                       key={`replyTextarea-${message.id}`}
//                       value={replyMessage}
//                       onChange={(e) => setReplyMessage(e.target.value)}
//                       placeholder="Type your reply..."
//                       focusBorderColor='purple.100'
//                     />
//                     <Button
//                       key={`sendReplyButton-${message.id}`}
//                       size="sm"
//                       colorScheme="purple"
//                       onClick={sendReply}
//                       isDisabled={replyMessage.trim() === ''}
//                       mt={4}
//                     >
//                       Send Reply
//                     </Button>
//                   </Box>
//                 )}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </HStack>
//       <Box mt={[4,6,8,10]}>
//         <Textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           focusBorderColor='purple.100'
//         />
//         <Button size="md" colorScheme="purple" mt={3} onClick={sendMessage} isDisabled={newMessage.trim() === ''}>
//           Send Message
//         </Button>
//       </Box>
//     </Box>
//   );
  


// };

// const createConversationId = (user1: string, user2: string) => {
//   // Create a unique conversation ID by concatenating user IDs and sorting them
//   const users = [user1, user2].sort();
//   return `${users[0]}_${users[1]}`;
// };

// export default ChatComponents;
























import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
  getDocs,

  DocumentData,
 
  getDoc,
  deleteDoc,
  QuerySnapshot,
} from 'firebase/firestore';
import { auth, firestore } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Box, Button, Textarea, Text, VStack, HStack, Avatar, Flex,  Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, DrawerCloseButton } from '@chakra-ui/react';
import { HiMenu } from "react-icons/hi";

interface Message {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  replies?: Message[];
}

interface User {
  id: string;
  email: string;
  username: string;
}

const ChatComponents: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [usernames, setUsernames] = useState<Record<string, string>>({});
  const [activeReplyMessageId, setActiveReplyMessageId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [replyLoading, setReplyLoading] = useState(false);
 

useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersQuery = collection(firestore, 'journal');
        const usersSnapshot: QuerySnapshot<DocumentData> = await getDocs(usersQuery);
  
        const usersData: User[] = [];
  
        usersSnapshot.forEach((userDoc) => {
          const userData = { id: userDoc.id, ...userDoc.data() } as User;
          usersData.push(userData);
        });
  
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
  
    const loadInitialMessages = async () => {
      if (selectedUser) {
        createOrLoadConversation(auth.currentUser?.uid || 'anonymous', selectedUser.id);
      }
    };
  
    fetchUsers();
    loadInitialMessages();
  }, [selectedUser]); // Trigger the effect when selectedUser changes
  

  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
console.log('Current User:', user);

    });
  
    return () => unsubscribe();
  }, []);

  const selectUser = (user: User) => {
    setSelectedUser(user);
    createOrLoadConversation(auth.currentUser?.uid || 'anonymous', user.id);
  };

  const createOrLoadConversation = async (senderId: string, receiverId: string) => {
    try {
      const conversationId = createConversationId(senderId, receiverId);

      // Check if the conversation exists
      const conversationDocRef = doc(collection(firestore, 'conversations'), conversationId);
      const conversationDocSnapshot = await getDoc(conversationDocRef);

      if (!conversationDocSnapshot.exists()) {
        // If the conversation doesn't exist, create it
        await createConversation(senderId, receiverId);
      }

      // Load messages for the conversation
      loadMessages(conversationId);
    } catch (error) {
      console.error('Error creating or loading conversation: ', error);
    }
  };

  const createConversation = async (senderId: string, receiverId: string) => {
    try {
      const conversationRef = await addDoc(collection(firestore, 'conversations'), {
        participants: [senderId, receiverId],
        // Add other metadata...
      });

      console.log('Conversation created with ID: ', conversationRef.id);
    } catch (error) {
      console.error('Error creating conversation: ', error);
    }
  };



const loadMessages = async (conversationId: string) => {
  const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');
  const messagesQuery = query(messagesCollectionRef, orderBy('timestamp'));

  const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
    const messagesData: Message[] = [];
    const userIds: Set<string> = new Set();

    querySnapshot.forEach((doc) => {
      const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
      messagesData.push(messageData);

      // Collect unique user IDs for fetching usernames
      userIds.add(messageData.senderId);
      messageData.replies?.forEach((reply) => userIds.add(reply.senderId));
    });

    // Fetch and update usernames
    await Promise.all(
      Array.from(userIds).map(async (userId) => {
        if (!usernames[userId]) {
          const userDocRef = doc(firestore, 'journal', userId);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data() as User;
            setUsernames((prevUsernames) => ({
              ...prevUsernames,
              [userId]: userData.username,
            }));
          }
        }
      })
    );

    // Fetch and update replies
    messagesData.forEach(async (message) => {
      if (message.replies) {
        const repliesCollectionRef = collection(
          firestore,
          'conversations',
          conversationId,
          'messages',
          message.id,
          'replies'
        );

        const repliesQuery = query(repliesCollectionRef, orderBy('timestamp'));

        onSnapshot(repliesQuery, (repliesSnapshot) => {
          const repliesData: Message[] = [];
          repliesSnapshot.forEach((replyDoc) => {
            const replyData = { id: replyDoc.id, ...replyDoc.data() } as Message;
            repliesData.push(replyData);
          });

          message.replies = repliesData;
          setMessages([...messagesData]); // Update state with real-time changes
        });
      }
    });

    setMessages(messagesData);
  });

  return () => {
    messagesUnsubscribe();
  };
};




  const sendMessage = async () => {
    if (newMessage.trim() !== '' && selectedUser) {
      try {
        setLoading(true); 
        const senderId = auth.currentUser?.uid || 'anonymous';
        const receiverId = selectedUser.id;
        const conversationId = createConversationId(senderId, receiverId);

        await sendMessageToFirestore(conversationId, senderId, receiverId, newMessage);

        setNewMessage('');
      } catch (error) {
        console.error('Error sending message: ', error);
      } finally {
        setLoading(false); 
      }
    }
  };

  const sendMessageToFirestore = async (
    conversationId: string,
    senderId: string,
    receiverId: string,
    text: string
  ) => {
    const messagesCollectionRef = collection(firestore, 'conversations', conversationId, 'messages');

    await addDoc(messagesCollectionRef, {
      text,
      timestamp: new Date(),
      senderId,
      receiverId,
    });
  };

  const handleReply = (messageId: string) => {
    setReplyingTo(messageId);
    setActiveReplyMessageId(messageId);
  };

  const sendReply = async () => {
    if (replyingTo && replyMessage.trim() !== '' && selectedUser) {
      try {
        setReplyLoading(true);
        const senderId = auth.currentUser?.uid || 'anonymous';
        const receiverId = selectedUser.id;
        const conversationId = createConversationId(senderId, receiverId);
        const messageId = replyingTo;

        await sendReplyToFirestore(conversationId, messageId, senderId, receiverId, replyMessage);

        setReplyMessage('');
        setReplyingTo(null);
      } catch (error) {
        console.error('Error sending reply: ', error);
      } finally {
        setReplyLoading(false); 
      }
    }
  };

  const sendReplyToFirestore = async (
    conversationId: string,
    messageId: string,
    senderId: string,
    receiverId: string,
    replyMessage: string
  ) => {
    const repliesCollectionRef = collection(
      firestore,
      'conversations',
      conversationId,
      'messages',
      messageId,
      'replies'
    );

    const replyRef = await addDoc(repliesCollectionRef, {
      text: replyMessage,
      timestamp: new Date(),
      senderId,
      receiverId,
    });

    const parentMessageRef = doc(
      firestore,
      'conversations',
      conversationId,
      'messages',
      messageId
    );

    await updateDoc(parentMessageRef, {
      replies: arrayUnion({
        id: replyRef.id,
        text: replyMessage,
        senderId,
        receiverId,
      }),
    });

    setMessages((prevMessages) => {
      return prevMessages.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            replies: [...(message.replies || []), { id: replyRef.id, text: replyMessage, senderId, receiverId }],
          };
        } else {
          return message;
        }
      });
    });
  };

  const deleteMessage = async (messageId: string) => {
    try {
      const senderId = auth.currentUser?.uid || 'anonymous';
      const receiverId = selectedUser?.id || 'userId2';

      await deleteDoc(
        doc(firestore, 'conversations', createConversationId(senderId, receiverId), 'messages', messageId)
      );
    } catch (error) {
      console.error('Error deleting message: ', error);
    }
  };




  return (
    <Box px={1} pb={8}>
   <Box display='flex'  justifyContent={['space-between', 'center']} className="">

   <Text fontSize="2xl" textAlign='center' mb={4}>Chat Application
   </Text>
      <Box display={['block', 'none']} className="">


      <Box p={2} shadow='base' color="purple.100"><HiMenu  size={30} onClick={onOpen} /></Box>

<Drawer   placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        
        <DrawerContent bg='white'>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>List of Friends</DrawerHeader>
          <DrawerBody>
          <Box  mr={4}>
          {users.map((user) => (
            <Box
              key={`user-${user.id}`}
              border="1px"
              borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
              borderRadius="md"
              p={2}
              onClick={() => selectUser(user)}
              cursor="pointer"
              mb={['10px', '15px', '20px']}
            >
              <Text noOfLines={1} textTransform='capitalize' fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
            </Box>
          ))}
        </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
</Box>
   </Box>



      <HStack align='start' spacing={4}>
        <Box display={['none', 'block']}   mr={4}>
          {users.map((user) => (
            <Box
              key={`user-${user.id}`}
              border="1px"
              borderColor={selectedUser === user ? 'blue.500' : 'gray.200'}
              borderRadius="md"
              p={2}
              onClick={() => selectUser(user)}
              cursor="pointer"
              mb={['10px', '15px', '20px']}
            >
              <Text noOfLines={1} textTransform='capitalize' fontWeight={selectedUser === user ? 'bold' : 'normal'}>{user.username}</Text>
            </Box>
          ))}
        </Box>


        <Box   w="full">

        {messages.length === 0 ? (
         <Box minH="50vh" mt={2} p={4} display='flex' justifyContent='center' alignItems='center' bg='#f1f1f1'
         > <Text   textAlign='center' fontWeight='700'>No messages available for this Friend, send a message or click the menu icon</Text> </Box>
        ) : (
          <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} h={['450px', '500px', '550px',"600px"]} overflowY="auto" w="100%">
            {messages.map((message) => (
              <Box key={`message-${message.id}`} p={4} shadow='base' mb={[5,6,7,8]} border="1px" borderColor="gray.100" borderRadius="md">
                <HStack textTransform='capitalize'>
                  <Avatar size="md" name={usernames[message.senderId] || 'Unknown'} />
                  <Text fontSize="sm" color="gray.500" ml={2}>
                    {usernames[message.senderId] || 'Unknown User'}
                  </Text>
                </HStack>
                <Text>{message.text}</Text>
              <Flex className="" gap={4} mt={2}>
              <Button size="sm" colorScheme="red" onClick={() => deleteMessage(message.id)}>
                  Delete
                </Button>
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() => handleReply(message.id)}
                  disabled={replyingTo !== null }
                  
                >
                  Reply
                </Button>
              </Flex>
  
         
  
                {message.replies && message.replies.length > 0 && (
                  <VStack align="start"  my='15px'>
                    {message.replies.map((reply, index) => (
                      <Box key={`reply-${reply.id}-${index}`} ml={2} w='full'  p={3} borderRadius='10px' border="2px" borderColor="#f1f1f1">
                        <Flex className="" alignItems='center' mb={1} gap='2'>
                        <Avatar size="sm" name= {usernames[reply.senderId] || 'Unknown User'} />
                        <Text fontSize="sm" color="gray.500">
                          {usernames[reply.senderId] || 'Unknown User'}
                        </Text>
                        
                        </Flex>
                        <Text>{reply.text}</Text>
                      </Box>
                    ))}
                  </VStack>
                )}



                       {/* Conditionally render the reply textarea based on the activeReplyMessageId */}
                       {activeReplyMessageId === message.id && (
                  <Box ml={2} mt={2}>
                    <Textarea
                      key={`replyTextarea-${message.id}`}
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Type your reply..."
                      focusBorderColor='purple.100'
                    />
                    <Button
                      key={`sendReplyButton-${message.id}`}
                      size="sm"
                      colorScheme="purple"
                      onClick={sendReply}
                      isDisabled={replyMessage.trim() === '' || replyLoading}
                      isLoading={replyLoading}
                      mt={4}
                    >
                      Send Reply
                    </Button>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          )}
        </Box>
      </HStack>
      <Box mt={[4,6,8,10]}>
        <Textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          focusBorderColor='purple.100'
        />
        <Button size="md" colorScheme="purple" mt={3} onClick={sendMessage} isDisabled={newMessage.trim() === '' || loading} isLoading={loading}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
  


};

const createConversationId = (user1: string, user2: string) => {
  // Create a unique conversation ID by concatenating user IDs and sorting them
  const users = [user1, user2].sort();
  return `${users[0]}_${users[1]}`;
};

export default ChatComponents;






















