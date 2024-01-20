// // ChatComponent.tsx

// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
// import { auth, firestore } from '../../../firebase';

// interface Message {
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
  

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData: Message[] = [];
//       querySnapshot.forEach((doc) => {
//         messagesData.push(doc.data() as Message);
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>
//             {message.text} - {message.userId}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;












// ChatComponent.tsx

// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
// import { app, auth, firestore, getAuth } from '../../../firebase';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [username, setUsername] = useState<string | null>(null); 

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//  // ... (previous imports and code)

// useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const messagesUnsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData: Message[] = [];
//       querySnapshot.forEach((doc) => {
//         messagesData.push(doc.data() as Message);
//       });
//       setMessages(messagesData);
//     });
  
//     const auth = getAuth(app);
  
//     const authUnsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUsername(user.displayName || null);
//       } else {
//         setUsername(null);
//       }
//     });
  
//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);
  

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>
//            {message.text} - {message.userId} - {username}

//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;












// // ChatComponent.tsx

// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth, } from '../../../firebase';
// import {  doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [usernames, setUsernames] = useState<Record<string, string>>({}); // Map of userId to username

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

// // ...

// useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();
  
//     const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//         console.log('Fetching username for userId:', userId);
      
//         const userDoc = await getDoc(doc(firestore, 'journal', userId));
      
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           console.log('User document data:', userData);
      
//           return (userData as { username?: string }).username || '';
//         } else {
//           console.log('User document not found for userId:', userId);
//           return undefined;
//         }
//       };
      
      
      
  
//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];
  
//       querySnapshot.forEach((doc) => {
//         const messageData = doc.data() as Message;
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });
  
//       const userIdsArray = Array.from(userIdsSet);
  
//       // Fetch usernames for all unique userIds
//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//       // Wait for all promises to resolve before updating usernames
//       const resolvedUsernames = await Promise.all(usernamePromises);
//       console.log('Received messages:', messagesData);
  
//     // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       // Check if promise is not undefined before accessing the username property
//       newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       console.log('Usernames after fetching:', usernames);
//       setMessages(messagesData);
//     });
  
//     const auth = getAuth(app);
  
//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Include the current user's ID in the array
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
  
//         // Fetch usernames for all users, including the current user
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//         // Wait for all promises to resolve before updating usernames
//         const resolvedUsernames = await Promise.all(usernamePromises);
  
//       // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       if (promise && typeof promise === 'object') {
//         newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//       }
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       } else {
//         setUsernames({});
//       }
//     });
  
//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);
  

  

//   return (
//     <div>
//       <div>
//       {messages.map((message, index) => (
//   <div key={index}>
//     {message.text} - {usernames[message.userId]}
//   </div>
// ))}

//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;























// // ChatComponent.tsx

// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth, } from '../../../firebase';
// import {  doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//     id: string; 
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [usernames, setUsernames] = useState<Record<string, string>>({}); // Map of userId to username

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

// // ...

// useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();
  
//     const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//         console.log('Fetching username for userId:', userId);
      
//         const userDoc = await getDoc(doc(firestore, 'journal', userId));
      
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           console.log('User document data:', userData);
      
//           return (userData as { username?: string }).username || '';
//         } else {
//           console.log('User document not found for userId:', userId);
//           return undefined;
//         }
//       };
      
      
      
  
//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];
  
//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data() } as unknown as Message; 
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });
  
//       const userIdsArray = Array.from(userIdsSet);
  
//       // Fetch usernames for all unique userIds
//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//       // Wait for all promises to resolve before updating usernames
//       const resolvedUsernames = await Promise.all(usernamePromises);
//       console.log('Received messages:', messagesData);
  
//     // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       // Check if promise is not undefined before accessing the username property
//       newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       console.log('Usernames after fetching:', usernames);
//       setMessages(messagesData);
//     });
  
//     const auth = getAuth(app);
  
//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Include the current user's ID in the array
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
  
//         // Fetch usernames for all users, including the current user
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//         // Wait for all promises to resolve before updating usernames
//         const resolvedUsernames = await Promise.all(usernamePromises);
  
//       // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       if (promise && typeof promise === 'object') {
//         newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//       }
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       } else {
//         setUsernames({});
//       }
//     });
  
//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);
  
//   const handleReply = (messageId: string) => {
//     // Placeholder logic for handling reply
//     console.log(`Replying to message with ID: ${messageId}`);
//   };
  
  

//   return (
//     <div>
//       <div>
//         {messages.map((message) => (
//           <div key={message.id}>
//             {message.text} - {usernames[message.userId]}
//             <button onClick={() => handleReply(message.id)}>Reply</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );

// };

// export default ChatComponent;















// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth } from '../../../firebase';
// import { doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//   id: string;
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [usernames, setUsernames] = useState<Record<string, string>>({});

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const handleReply = (messageId: string) => {
//     // Placeholder logic for handling reply
//     console.log(`Replying to message with ID: ${messageId}, Reply message: ${replyMessage}`);
//     setReplyMessage(''); // Clear the reply message after handling the reply
//   };

//   useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();
  
//     const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//         console.log('Fetching username for userId:', userId);
      
//         const userDoc = await getDoc(doc(firestore, 'journal', userId));
      
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           console.log('User document data:', userData);
      
//           return (userData as { username?: string }).username || '';
//         } else {
//           console.log('User document not found for userId:', userId);
//           return undefined;
//         }
//       };
      
      
      
  
//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];
  
//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data() } as unknown as Message; 
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });
  
//       const userIdsArray = Array.from(userIdsSet);
  
//       // Fetch usernames for all unique userIds
//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//       // Wait for all promises to resolve before updating usernames
//       const resolvedUsernames = await Promise.all(usernamePromises);
//       console.log('Received messages:', messagesData);
  
//     // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       // Check if promise is not undefined before accessing the username property
//       newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       console.log('Usernames after fetching:', usernames);
//       setMessages(messagesData);
//     });
  
//     const auth = getAuth(app);
  
//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Include the current user's ID in the array
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
  
//         // Fetch usernames for all users, including the current user
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
  
//         // Wait for all promises to resolve before updating usernames
//         const resolvedUsernames = await Promise.all(usernamePromises);
  
//       // Now, you can update the state with the fetched usernames
// setUsernames((prevUsernames) => {
//     const newUsernames: Record<string, string> = {};
//     resolvedUsernames.forEach((promise, index) => {
//       if (promise && typeof promise === 'object') {
//         newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//       }
//     });
//     return {
//       ...prevUsernames,
//       ...newUsernames,
//     };
//   });
  
//       } else {
//         setUsernames({});
//       }
//     });
  
//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         {messages.map((message) => (
//           <div key={message.id}>
//             {message.text} - {usernames[message.userId]}
//             <button onClick={() => handleReply(message.id)}>Reply</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       {replyMessage && (
//         <div>
//           <textarea
//             placeholder="Write your reply..."
//             value={replyMessage}
//             onChange={(e) => setReplyMessage(e.target.value)}
//           />
//           <button onClick={() => handleReply('someMessageId')}>Send Reply</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatComponent;
















// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth } from '../../../firebase';
// import { doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//   id: string;
//   text: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null); // Track the message being replied to
//   const [usernames, setUsernames] = useState<Record<string, string>>({});

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const handleReply = (messageId: string) => {
//     // Set the message being replied to and show the reply input
//     setReplyingTo(messageId);
//   };

//   const sendReply = () => {
//     // Placeholder logic for handling reply
//     console.log(`Replying to message with ID: ${replyingTo}, Reply message: ${replyMessage}`);
    
//     // Clear the reply input and reset replyingTo
//     setReplyMessage('');
//     setReplyingTo(null);
//   };

//   useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();

//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];

//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data() } as Message;
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });

//       const userIdsArray = Array.from(userIdsSet);

//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));

//       const resolvedUsernames = await Promise.all(usernamePromises);

//       setUsernames((prevUsernames) => {
//         const newUsernames: Record<string, string> = {};
//         resolvedUsernames.forEach((promise, index) => {
//           newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//         });
//         return {
//           ...prevUsernames,
//           ...newUsernames,
//         };
//       });

//       setMessages(messagesData);
//     });

//     const auth = getAuth(app);

//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
//         const resolvedUsernames = await Promise.all(usernamePromises);

//         setUsernames((prevUsernames) => {
//           const newUsernames: Record<string, string> = {};
//           resolvedUsernames.forEach((promise, index) => {
//             if (promise && typeof promise === 'object') {
//               newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//             }
//           });
//           return {
//             ...prevUsernames,
//             ...newUsernames,
//           };
//         });
//       } else {
//         setUsernames({});
//       }
//     });

//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);

//   const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//     const userDoc = await getDoc(doc(firestore, 'journal', userId));

//     if (userDoc.exists()) {
//       const userData = userDoc.data();
//       return (userData as { username?: string }).username || '';
//     } else {
//       return undefined;
//     }
//   };
//   return (
//     <div>
//       <div>
//         {messages.map((message) => (
//           <div key={message.id}>
//             {message.text} - {usernames[message.userId]}
//             <button onClick={() => handleReply(message.id)}>Reply</button>
            
//             {/* Display reply input under the clicked message */}
//             {replyingTo === message.id && (
//               <div>
//                 <textarea
//                   placeholder="Write your reply..."
//                   value={replyMessage}
//                   onChange={(e) => setReplyMessage(e.target.value)}
//                 />
//                 <button onClick={sendReply}>Send Reply</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;











// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth } from '../../../firebase';
// import { doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// interface Message {
//   id: string;
//   text: string;
//   userId: string;
//   replies?: Message[];
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//   };

//   const sendReply = () => {
//     console.log(`Replying to message with ID: ${replyingTo}, Reply message: ${replyMessage}`);
    
//     setMessages((prevMessages) => {
//       return prevMessages.map((message) => {
//         if (message.id === replyingTo) {
//           return {
//             ...message,
//             replies: [...(message.replies || []), { text: replyMessage, userId: auth.currentUser?.uid }]
//           };
//         } else {
//           return message;
//         }
//       }) as Message[]; 
//     });

//     setReplyMessage('');
//     setReplyingTo(null);
//   };

//   useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();

//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];

//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });

//       const userIdsArray = Array.from(userIdsSet);

//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));

//       const resolvedUsernames = await Promise.all(usernamePromises);

//       setUsernames((prevUsernames) => {
//         const newUsernames: Record<string, string> = {};
//         resolvedUsernames.forEach((promise, index) => {
//           newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//         });
//         return {
//           ...prevUsernames,
//           ...newUsernames,
//         };
//       });

//       setMessages(messagesData);
//     });

//     const auth = getAuth(app);

//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
//         const resolvedUsernames = await Promise.all(usernamePromises);

//         setUsernames((prevUsernames) => {
//           const newUsernames: Record<string, string> = {};
//           resolvedUsernames.forEach((promise, index) => {
//             if (promise && typeof promise === 'object') {
//               newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//             }
//           });
//           return {
//             ...prevUsernames,
//             ...newUsernames,
//           };
//         });
//       } else {
//         setUsernames({});
//       }
//     });

//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);

//   const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//     const userDoc = await getDoc(doc(firestore, 'journal', userId));

//     if (userDoc.exists()) {
//       const userData = userDoc.data();
//       return (userData as { username?: string }).username || '';
//     } else {
//       return undefined;
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message) => (
//           <div key={message.id}>
//             {message.text} - {usernames[message.userId]}
//             <button onClick={() => handleReply(message.id)}>Reply</button>
            
//             {replyingTo === message.id && (
//               <div>
//                 <textarea
//                   placeholder="Write your reply..."
//                   value={replyMessage}
//                   onChange={(e) => setReplyMessage(e.target.value)}
//                 />
//                 <button onClick={sendReply}>Send Reply</button>
//               </div>
//             )}

//             {message.replies && message.replies.map((reply, index) => (
//               <div key={index}>
//                 {reply.text} - {usernames[reply.userId]}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;

















// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, onSnapshot, query, orderBy, getDoc } from 'firebase/firestore';
// import { app, auth, firestore, getAuth } from '../../../firebase';
// import { doc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import { Box, Button, Textarea, Input , Text} from '@chakra-ui/react';


// interface Message {
//   id: string;
//   text: string;
//   userId: string;
//   replies?: Message[];
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyMessage, setReplyMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [usernames, setUsernames] = useState<Record<string, string>>({});

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages'), {
//           text: newMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
//         console.log('Message sent with ID: ', docRef.id);
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message: ', error);
//       }
//     }
//   };

//   const handleReply = (messageId: string) => {
//     setReplyingTo(messageId);
//   };

//   const sendReply = async () => {
//     if (replyingTo && replyMessage.trim() !== '') {
//       try {
//         const docRef = await addDoc(collection(firestore, 'messages', replyingTo, 'replies'), {
//           text: replyMessage,
//           timestamp: new Date(),
//           userId: auth.currentUser?.uid,
//         });
  
//         console.log('Reply sent with ID: ', docRef.id);
  
//         setMessages((prevMessages) => {
//           return prevMessages.map((message) => {
//             if (message.id === replyingTo) {
//               return {
//                 ...message,
//                 replies: [...(message.replies || []), { id: docRef.id, text: replyMessage, userId: auth.currentUser?.uid }]
//               };
//             } else {
//               return message;
//             }
//           }) as Message[]; 
//         });
  
//         setReplyMessage('');
//         setReplyingTo(null);
//       } catch (error) {
//         console.error('Error sending reply: ', error);
//       }
//     }
//   };
  

//   useEffect(() => {
//     const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//     const userIdsSet: Set<string> = new Set();

//     const messagesUnsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const messagesData: Message[] = [];

//       querySnapshot.forEach((doc) => {
//         const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
//         messagesData.push(messageData);
//         userIdsSet.add(messageData.userId);
//       });

//       const userIdsArray = Array.from(userIdsSet);

//       const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));

//       const resolvedUsernames = await Promise.all(usernamePromises);

//       setUsernames((prevUsernames) => {
//         const newUsernames: Record<string, string> = {};
//         resolvedUsernames.forEach((promise, index) => {
//           newUsernames[userIdsArray[index]] = promise !== undefined ? promise : '';
//         });
//         return {
//           ...prevUsernames,
//           ...newUsernames,
//         };
//       });

//       setMessages(messagesData);
//     });

//     const auth = getAuth(app);

//     const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userIdsArray = Array.from(userIdsSet).concat(user.uid);
//         const usernamePromises = userIdsArray.map((userId) => fetchUsernames(userId));
//         const resolvedUsernames = await Promise.all(usernamePromises);

//         setUsernames((prevUsernames) => {
//           const newUsernames: Record<string, string> = {};
//           resolvedUsernames.forEach((promise, index) => {
//             if (promise && typeof promise === 'object') {
//               newUsernames[userIdsArray[index]] = (promise as { username?: string }).username || '';
//             }
//           });
//           return {
//             ...prevUsernames,
//             ...newUsernames,
//           };
//         });
//       } else {
//         setUsernames({});
//       }
//     });

//     return () => {
//       messagesUnsubscribe();
//       authUnsubscribe();
//     };
//   }, []);

//   const fetchUsernames = async (userId: string): Promise<string | undefined> => {
//     const userDoc = await getDoc(doc(firestore, 'journal', userId));

//     if (userDoc.exists()) {
//       const userData = userDoc.data();
//       return (userData as { username?: string }).username || '';
//     } else {
//       return undefined;
//     }
//   };

//   return (
//     <Box>
//       <Box>
//         {messages.map((message) => (
//           <Box key={message.id} borderWidth="1px" p="4" my="2" borderRadius="md">
//             <Text>{message.text} - {usernames[message.userId]}</Text>
//             <Button colorScheme="purple" onClick={() => handleReply(message.id)}>Reply</Button>

//             {replyingTo === message.id && (
//               <Box mt="2">
//                 <Textarea
//                   placeholder="Write your reply..."
//                   value={replyMessage}
//                   onChange={(e) => setReplyMessage(e.target.value)}
//                 />
//                 <Button colorScheme="purple" onClick={sendReply}>Send Reply</Button>
//               </Box>
//             )}

//             {message.replies && message.replies.map((reply, index) => (
//               <Box key={index} ml="4" mt="2" borderWidth="1px" p="2" borderRadius="md">
//                 <Text>{reply.text} - {usernames[reply.userId]}</Text>
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </Box>
//       <Box mt="4">
//         <Input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <Button colorScheme="purple" ml="2" onClick={sendMessage}>Send</Button>
//       </Box>
//     </Box>
//   );
// };

// export default ChatComponent;














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
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';
import { auth, firestore,  } from '../../../firebase';
import { Box, Button, Textarea, Input, Text } from '@chakra-ui/react';

interface Message {
  id: string;
  text: string;
  userId: string;
  replies?: Message[];
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [usernames, setUsernames] = useState<Record<string, string>>({});

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        const userId = auth.currentUser?.uid || 'anonymous'; // Default to 'anonymous' if not logged in
  
        const docRef = await addDoc(collection(firestore, 'messages'), {
          text: newMessage,
          timestamp: new Date(),
          userId: userId,
        });
  
        console.log('Message sent with ID: ', docRef.id);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message: ', error);
      }
    }
  };
  
  const sendReply = async () => {
    if (replyingTo && replyMessage.trim() !== '') {
      try {
        const userId = auth.currentUser?.uid || 'anonymous';
  
        const docRef = await addDoc(collection(firestore, 'messages', replyingTo, 'replies'), {
          text: replyMessage,
          timestamp: new Date(),
          userId: userId,
        });
  
        const parentMessageRef = doc(firestore, 'messages', replyingTo);
        await updateDoc(parentMessageRef, {
          replies: arrayUnion({ id: docRef.id, text: replyMessage, userId: userId }),
        });
  
        // Instead of adding a new reply to the local state, we only update the replies in the existing message
        setMessages((prevMessages) => {
          return prevMessages.map((message) => {
            if (message.id === replyingTo) {
              return {
                ...message,
                replies: [...(message.replies || []), { id: docRef.id, text: replyMessage, userId: userId }],
              };
            } else {
              return message;
            }
          });
        });
  
        setReplyMessage('');
        setReplyingTo(null);
      } catch (error) {
        console.error('Error sending reply: ', error);
      }
    }
  };
  
  

  const handleReply = (messageId: string) => {
    setReplyingTo(messageId);
  };

 // ...

useEffect(() => {
    const messagesQuery = query(collection(firestore, 'messages'), orderBy('timestamp'));
  
    const messagesUnsubscribe = onSnapshot(messagesQuery, async (querySnapshot) => {
      const messagesData: Message[] = [];
  
      querySnapshot.forEach((doc) => {
        const messageData = { id: doc.id, ...doc.data(), replies: [] } as unknown as Message;
        messagesData.push(messageData);
      });
  
      const fetchRepliesPromises = messagesData.map(async (message) => {
        const repliesQuery = query(collection(firestore, 'messages', message.id, 'replies'));
        const repliesSnapshot = await getDocs(repliesQuery);
        const repliesData = repliesSnapshot.docs.map((replyDoc) => {
          const replyData = replyDoc.data() as Message;
          return {
            ...replyData,
          };
        });
  
        return { ...message, replies: repliesData };
      });
  
      const resolvedMessages = await Promise.all(fetchRepliesPromises);
      setMessages(resolvedMessages);
  
      // Fetch usernames for each user ID
      const allUserIds = Array.from(new Set(resolvedMessages.flatMap(message => [message.userId, ...(message.replies || []).map(reply => reply.userId)])));
      const fetchUsernamesPromises = allUserIds.map(async (userId) => {
        const username = await fetchUsernames(userId, firestore);
        return { [userId]: username || 'Unknown User' };
      });
  
      const resolvedUsernames = await Promise.all(fetchUsernamesPromises);
      setUsernames((prevUsernames) => {
        return resolvedUsernames.reduce((acc, usernameObject) => {
          return { ...acc, ...usernameObject };
        }, prevUsernames);
      });
    });
  
    return () => {
      messagesUnsubscribe();
    };
  }, []);
  
  // ...
  
  


  const fetchUsernames = async (userId: string, firestore: Firestore): Promise<string | undefined> => {
    const userDocRef: DocumentReference<DocumentData> = doc(collection(firestore, 'journal'), userId);
  
    try {
      const userDocSnap: DocumentSnapshot<DocumentData> = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        return (userData as { username?: string }).username || '';
      } else {
        return undefined;
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
      return undefined;
    }
  };


  const deleteMessage = async (messageId: string) => {
    try {
      await deleteDoc(doc(firestore, 'messages', messageId));
      // Handle any additional logic or UI updates as needed
    } catch (error) {
      console.error('Error deleting message: ', error);
    }
  };


  
  
  

  return (
    <Box>
      <Box>
        {messages.map((message) => (
          <Box key={message.id} borderWidth="1px" p="4" my="2" borderRadius="md">
            <Text>{message.text} - {usernames[message.userId]}</Text>
            <Button colorScheme="purple" onClick={() => handleReply(message.id)}>Reply</Button>
            <Button colorScheme="red" onClick={() => deleteMessage(message.id)}>Delete</Button>

            {replyingTo === message.id && (
              <Box mt="2">
                <Textarea
                  placeholder="Write your reply..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                />
                <Button colorScheme="purple" onClick={sendReply}>Send Reply</Button>
              </Box>
            )}

            {message.replies && message.replies.map((reply, index) => (
              <Box key={index} ml="4" mt="2" borderWidth="1px" p="2" borderRadius="md">
                <Text>{reply.text} - {usernames[reply.userId]}</Text>
                {/* <Button colorScheme="red" onClick={() => deleteReply(message.id, reply.id)}>Delete</Button> */}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box mt="4">
        <Input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button colorScheme="purple" ml="2" onClick={sendMessage}>Send</Button>
      </Box>
    </Box>
  );
};

export default ChatComponent;
