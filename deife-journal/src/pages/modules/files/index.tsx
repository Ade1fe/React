// import { Box, Input, Textarea, Button, VStack } from '@chakra-ui/react';
// import { useState } from 'react';

// interface Note {
//   title: string;
//   folder: string;
//   content: string;
// }

// const FolderManagement = () => {
//   const [note, setNote] = useState<Note>({
//     title: '',
//     folder: '',
//     content: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       content: value,
//     }));
//   };

//   const handleSaveNote = () => {
//     // Here you can implement the logic to save the note, e.g., sending it to a backend or storing in local state/Redux.
//     console.log('Note to be saved:', note);
//     // Reset the form after saving if needed
//     setNote({
//       title: '',
//       folder: '',
//       content: '',
//     });
//   };

//   return (
//     <Box>
//       <VStack spacing={4}>
//         <Input
//           placeholder="Title"
//           name="title"
//           value={note.title}
//           onChange={handleInputChange}
//         />
//         <Input
//           placeholder="Folder Name"
//           name="folder"
//           value={note.folder}
//           onChange={handleInputChange}
//         />
//         <Textarea
//           placeholder="Write your note here"
//           value={note.content}
//           onChange={handleTextareaChange}
//           resize="vertical"
//           h="200px"
//         />
//         <Button colorScheme="blue" onClick={handleSaveNote}>
//           Save
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default FolderManagement;




// import { Box, Input, Textarea, Button, VStack, Select, Divider, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// interface Note {
//   title: string;
//   folder: string;
//   content: string;
// }

// const FolderManagement = () => {
//   const [note, setNote] = useState<Note>({
//     title: '',
//     folder: '',
//     content: '',
//   });

//   const [folders, setFolders] = useState<string[]>(['Folder 1', 'Folder 2', 'Folder 3']); // Example folders
//   const [selectedFolder, setSelectedFolder] = useState<string>(''); // Selected folder for saving notes

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       content: value,
//     }));
//   };

//   const handleSaveNote = () => {
//     // Here you can implement the logic to save the note to the selected folder.
//     console.log('Note to be saved:', note, 'to folder:', selectedFolder);
//     // Reset the form after saving if needed
//     setNote({
//       title: '',
//       folder: '',
//       content: '',
//     });
//   };

//   return (
//     <Box>
//       <VStack spacing={4}>
//         <Input
//           placeholder="Title"
//           name="title"
//           value={note.title}
//           onChange={handleInputChange}
//         />
//         <Input
//           placeholder="Folder Name"
//           name="folder"
//           value={note.folder}
//           onChange={handleInputChange}
//         />
//         <Textarea
//           placeholder="Write your note here"
//           value={note.content}
//           onChange={handleTextareaChange}
//           resize="vertical"
//           h="200px"
//         />
//         <Select
//           placeholder="Select a folder or add a new one"
//           value={selectedFolder}
//           onChange={(e) => setSelectedFolder(e.target.value)}
//         >
//           {folders.map((folder) => (
//             <option key={folder} value={folder}>
//               {folder}
//             </option>
//           ))}
//         </Select>
//         <Divider />
//         <VStack spacing={2} alignItems="flex-start">
//           <Text fontWeight="bold">Your Folders:</Text>
//           {folders.map((folder) => (
//             <Box key={folder}>{folder}</Box>
//           ))}
//         </VStack>
//         <Divider />
//         <Button colorScheme="blue" onClick={handleSaveNote}>
//           Save
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default FolderManagement;




// import { Box, Input, Textarea, Button, VStack, Select, Divider, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// interface Note {
//   title: string;
//   folder: string;
//   content: string;
// }

// const FolderManagement = () => {
//   const [note, setNote] = useState<Note>({
//     title: '',
//     folder: '',
//     content: '',
//   });

//   const [folders, setFolders] = useState<string[]>(['Folder 1', 'Folder 2', 'Folder 3']); // Example folders
//   const [selectedFolder, setSelectedFolder] = useState<string>(''); // Selected folder for saving notes

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { value } = e.target;
//     setNote(prevNote => ({
//       ...prevNote,
//       content: value,
//     }));
//   };

//   const handleSaveNote = () => {
//     // Here you can implement the logic to save the note to the selected folder.
//     console.log('Note to be saved:', note, 'to folder:', selectedFolder);
//     // Reset the form after saving if needed
//     setNote({
//       title: '',
//       folder: '',
//       content: '',
//     });
//   };

//   const handleAddFolder = () => {
//     if (note.folder.trim() !== '' && !folders.includes(note.folder)) {
//       setFolders(prevFolders => [...prevFolders, note.folder]);
//     }
//     setNote(prevNote => ({
//       ...prevNote,
//       folder: '',
//     }));
//   };

//   return (
//     <Box>
//       <VStack spacing={4}>
//         <Input
//           placeholder="Title"
//           name="title"
//           value={note.title}
//           onChange={handleInputChange}
//         />
//         <Input
//           placeholder="Folder Name"
//           name="folder"
//           value={note.folder}
//           onChange={handleInputChange}
//         />
//         <Button colorScheme="blue" onClick={handleAddFolder}>
//           Add Folder
//         </Button>
//         <Textarea
//           placeholder="Write your note here"
//           value={note.content}
//           onChange={handleTextareaChange}
//           resize="vertical"
//           h="200px"
//         />
//         <Select
//           placeholder="Select a folder or add a new one"
//           value={selectedFolder}
//           onChange={(e) => setSelectedFolder(e.target.value)}
//         >
//           {folders.map((folder) => (
//             <option key={folder} value={folder}>
//               {folder}
//             </option>
//           ))}
//         </Select>
//         <Divider />
//         <VStack spacing={2} alignItems="flex-start">
//           <Text fontWeight="bold">Your Folders:</Text>
//           {folders.map((folder) => (
//             <Box key={folder}>{folder}</Box>
//           ))}
//         </VStack>
//         <Divider />
//         <Button colorScheme="blue" onClick={handleSaveNote}>
//           Save
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default FolderManagement;






// import { Box, Input, Textarea, Button, VStack, Select, Divider, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// interface Note {
//   title: string;
//   folder: string;
//   content: string;
// }
// // ... (other imports and interfaces)

// const FolderManagement = () => {
//     const [note, setNote] = useState<Note>({
//       title: '',
//       folder: '',
//       content: '',
//     });
  
//     const [folders, setFolders] = useState<string[]>(['Folder 1', 'Folder 2', 'Folder 3']);
//     const [selectedFolder, setSelectedFolder] = useState<string>('');
//     const [addingFolder, setAddingFolder] = useState<boolean>(false);
//     const [newFolderName, setNewFolderName] = useState<string>('');
  
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = e.target;
//       setNote(prevNote => ({
//         ...prevNote,
//         [name]: value,
//       }));
//     };
  
//     const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//       const { value } = e.target;
//       setNote(prevNote => ({
//         ...prevNote,
//         content: value,
//       }));
//     };
  
//     const handleSaveNote = () => {
//       console.log('Note to be saved:', note, 'to folder:', selectedFolder);
//       setNote({
//         title: '',
//         folder: '',
//         content: '',
//       });
//     };
  
//     const handleAddFolder = () => {
//       setAddingFolder(true);
//     };
  
//     const handleNewFolderSubmit = () => {
//         console.log("clicked", selectedFolder);
//         if (newFolderName.trim() !== '' && !folders.includes(newFolderName)) {
//           setFolders(prevFolders => [...prevFolders, newFolderName]);
//           setNewFolderName('');
//           setSelectedFolder(newFolderName);
//           setNote(prevNote => ({
//             ...prevNote,
//             folder: newFolderName,
//           }));
//         }
//       };
      
      
  
//     return (
//       <Box>
      
//           <Button colorScheme="blue" onClick={handleAddFolder}>
//             Add New Folder
//           </Button>
       
//           <VStack spacing={4}>
//             <Input
//               placeholder="Enter Folder Name"
//               value={newFolderName}
//               onChange={e => setNewFolderName(e.target.value)}
//               onBlur={() => setAddingFolder(false)}
//               autoFocus
//             />
//             <Button colorScheme="blue" onClick={handleNewFolderSubmit}>
//               Save Folder
//             </Button>
//           </VStack>
       
//         <Divider />
//         <VStack spacing={4} opacity={addingFolder ? 0.5 : 1} pointerEvents={addingFolder ? 'none' : 'auto'}>
//           <Input
//             placeholder="Title"
//             name="title"
//             value={note.title}
//             onChange={handleInputChange}
//             disabled={addingFolder}
//           />
//           <Textarea
//             placeholder="Write your note here"
//             value={note.content}
//             onChange={handleTextareaChange}
//             resize="vertical"
//             h="200px"
//             disabled={addingFolder}
//           />
//           <Select
//             placeholder="Select a folder"
//             value={selectedFolder}
//             onChange={(e) => setSelectedFolder(e.target.value)}
//             disabled={addingFolder}
//           >
//             {folders.map((folder) => (
//               <option key={folder} value={folder}>
//                 {folder}
//               </option>
//             ))}
//           </Select>
//           <Divider />
//           <VStack spacing={2} alignItems="flex-start">
//             <Text fontWeight="bold">Your Folders:</Text>
//             {folders.map((folder) => (
//               <Box key={folder}>{folder}</Box>
//             ))}
//           </VStack>
//           <Divider />
//           <Button colorScheme="blue" onClick={handleSaveNote} disabled={addingFolder}>
//             Save
//           </Button>
//         </VStack>
//       </Box>
//     );
//   };
  
//   export default FolderManagement;
  




import { Box, Input, Textarea, Button, VStack, Select, Divider, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Note {
  title: string;
  folder: string;
  content: string;
}
// ... (imports and interfaces)

const FolderManagement = () => {
    const [note, setNote] = useState<Note>({
      title: '',
      folder: '',
      content: '',
    });
  
    const [folders, setFolders] = useState<string[]>(['Folder 1', 'Folder 2', 'Folder 3']);
    const [selectedFolder, setSelectedFolder] = useState<string>('');
    const [addingFolder, setAddingFolder] = useState<boolean>(false);
    const [newFolderName, setNewFolderName] = useState<string>('');
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNote(prevNote => ({
        ...prevNote,
        [name]: value,
      }));
    };
  
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setNote(prevNote => ({
        ...prevNote,
        content: value,
      }));
    };
  
    const handleSaveNote = () => {
      console.log('Note to be saved:', note, 'to folder:', selectedFolder);
      setNote({
        title: '',
        folder: '',
        content: '',
      });
      setAddingFolder(false); // Re-enable input fields after saving note.
    };
  
    const handleAddFolder = () => {
      setAddingFolder(true);
    };
  
    const handleNewFolderSubmit = () => {
      if (newFolderName.trim() !== '' && !folders.includes(newFolderName)) {
        setFolders(prevFolders => [...prevFolders, newFolderName]);
        setNewFolderName('');
        setSelectedFolder(newFolderName);
        setNote(prevNote => ({
          ...prevNote,
          folder: newFolderName,
        }));
        setAddingFolder(false); // Disable folder creation after successful addition.
        // Provide visual feedback that the folder has been added.
      }
    };
  
    return (
      <Box>
        {!addingFolder && (
          <Button colorScheme="blue" onClick={handleAddFolder}>
            Add New Folder
          </Button>
        )}
  
        {addingFolder && (
          <VStack spacing={4}>
            <Input
              placeholder="Enter Folder Name"
              value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
              autoFocus
            />
            <Button colorScheme="blue" onClick={handleNewFolderSubmit}>
              Save Folder
            </Button>
          </VStack>
        )}
  
        <Divider />
        <VStack spacing={4} opacity={addingFolder ? 0.5 : 1} pointerEvents={addingFolder ? 'none' : 'auto'}>
          <Input
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={handleInputChange}
            disabled={addingFolder}
          />
          <Textarea
            placeholder="Write your note here"
            value={note.content}
            onChange={handleTextareaChange}
            resize="vertical"
            h="200px"
            disabled={addingFolder}
          />
          <Select
            placeholder="Select a folder"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            disabled={addingFolder}
          >
            {folders.map((folder) => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </Select>
          <Divider />
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight="bold">Your Folders:</Text>
            {folders.map((folder) => (
              <Box key={folder}>{folder}</Box>
            ))}
          </VStack>
          <Divider />
          <Button colorScheme="blue" onClick={handleSaveNote} disabled={!note.title || !note.content}>
            Save
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default FolderManagement;
  