import { useState } from 'react';
import {
  Box,
  Button,
  // Divider,
  FormControl,
  FormLabel,
//   Heading,
  HStack,
  Input,
  Select,

  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
// import ShowFiles from './showFiles';

interface Note {
  title: string;
  folder: string;
  content: string;
}



const CreateFilesMangement = () => {
  const [note, setNote] = useState<Note>({
    title: '',
    folder: '',
    content: '',
  });

  const [filesInFolders, setFilesInFolders] = useState<Record<string, string[]>>({
    'Work': [],
    'Personal': [],
    'Important': [],
  });

  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [addingFolder, setAddingFolder] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [selectedFileContent, setSelectedFileContent] = useState<string>(''); // Add this line

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      content: value,
    }));
  };

  const handleSaveNote = () => {
    if (selectedFolder && note.title && note.content) {
      const updatedFiles = { ...filesInFolders };
      updatedFiles[selectedFolder] = [...updatedFiles[selectedFolder], note.title];
      setFilesInFolders(updatedFiles);
      setNote({
        title: '',
        folder: selectedFolder || '',
        content: '',
      });
      setAddingFolder(false);
    }
  };

  
 

  const handleFileClick = (file: any) => {
    setSelectedFile(file);
    if (selectedFolder && filesInFolders[selectedFolder]) {
      const content = filesInFolders[selectedFolder][file]; // Access content using selectedFolder and file
      if (content !== undefined) {
        setSelectedFileContent(content); // Update selectedFileContent state with the file content
        setNote({
          ...note,
          title: file,
          folder: selectedFolder,
          content: content, // Also update note.content if needed
        });
      }
    }
  };
  
  
  
  
  
  
  

  const handleEditContent = () => {
    setSelectedFile(null); 
  };

  const handleCloseFile = () => {
    setSelectedFile(null);
    setNote({
      title: '',
      folder: selectedFolder || '',
      content: '',
    });
  };

  const handleDeleteFolder = (folderName: string) => {
    const updatedFiles = { ...filesInFolders };
    delete updatedFiles[folderName];
    setFilesInFolders(updatedFiles);

    // Deselect the folder if it's the one being deleted
    if (selectedFolder === folderName) {
      setSelectedFolder(null);
      setSelectedFile(null);
      setNote({
        title: '',
        folder: '',
        content: '',
      });
    }
  };

  const handleDeleteFile = (fileName: string) => {
    if (selectedFolder) {
      const updatedFiles = { ...filesInFolders };
      updatedFiles[selectedFolder] = updatedFiles[selectedFolder].filter((file) => file !== fileName);
      setFilesInFolders(updatedFiles);
    }
  };

//   return (
//     <Box p={4} >
//       <Box >
//         {!addingFolder ? (
//           <Button colorScheme="blue" onClick={() => setAddingFolder(true)}>
//             Add New Folder
//           </Button>
//         ) : (
//           <Box >
//             <Input
//               placeholder="Enter Folder Name"
//               value={newFolderName}
//               onChange={(e) => setNewFolderName(e.target.value)}
//               autoFocus
//             />
//             <Button
//               colorScheme="blue"
//               onClick={() => {
//                 if (newFolderName.trim() !== '') {
//                   const updatedFiles = { ...filesInFolders, [newFolderName]: [] };
//                   setFilesInFolders(updatedFiles);
//                   setAddingFolder(false);
//                 }
//               }}
//             >
//               Save Folder
//             </Button>
//           </Box>
//         )}

//        <Box display='flex'> 
//        {/* <Box> </Box> */}

//         <Box flex='1'  opacity={addingFolder ? 0.5 : 1} pointerEvents={addingFolder ? 'none' : 'auto'}>
//           <FormControl>
//             <FormLabel>Title</FormLabel>
//             <Input
//               placeholder="Title"
//               name="title"
//               value={note.title}
//               onChange={handleInputChange}
//               disabled={addingFolder}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Note</FormLabel>
//             <Textarea
//               placeholder="Write your note here"
//               value={note.content}
//               onChange={handleTextareaChange}
//               resize="vertical"
//               h="200px"
//               disabled={addingFolder}
//             />
//           </FormControl>

        

       

       

         

//           <Button colorScheme="blue" onClick={handleSaveNote} disabled={!note.title || !note.content}>
//             Save
//           </Button>
//         </Box>

//         <FormControl flex='1'>
//             <FormLabel>Select a folder</FormLabel>
//             <Select
//               placeholder="Select a folder"
//               value={selectedFolder || ''}
//               onChange={(e) => setSelectedFolder(e.target.value || null)}
//               disabled={addingFolder}
//               textTransform='capitalize'
//             >
//               {Object.keys(filesInFolders).map((folderName) => (
//                 <option key={folderName} value={folderName}>
//                   {folderName}
//                 </option>
//               ))}
//             </Select>
//           </FormControl>

//           <Box  alignItems="flex-start" flex='1'>
//             <Text fontWeight="bold">Your Folders:</Text>
//             {Object.keys(filesInFolders).map((folderName) => (
//               <Box key={folderName}>
//                 <Box  textTransform='capitalize' onClick={() => setSelectedFolder(folderName)} cursor="pointer">
//                   {folderName}
//                 </Box>
//                 <Button colorScheme="red" onClick={() => handleDeleteFolder(folderName)}>
//                   Delete Folder
//                 </Button>
//               </Box>
//             ))}
//           </Box>

//         {/* Files and Content Display */}
//         {selectedFolder && (
//           <VStack spacing={2} alignItems="flex-start">
//             <Text fontWeight="bold">Files in {selectedFolder}:</Text>
//             {filesInFolders[selectedFolder].map((file, index) => (
//               <HStack key={index}>
//                 <Box onClick={() => handleFileClick(file)} cursor="pointer">
//                   {file}
//                 </Box>
//                 <Button colorScheme="red" onClick={() => handleDeleteFile(file)}>
//                   Delete
//                 </Button>
//               </HStack>
//             ))}
//           </VStack>
//         )}


// {selectedFile && (
//   <VStack spacing={4} alignItems="flex-start">
//     <Text fontWeight="bold">Content of {selectedFile}:</Text>
//     <Textarea
//       value={selectedFileContent} // Use selectedFileContent instead of note.content here
//       onChange={(e) => setSelectedFileContent(e.target.value)} // Implement setSelectedFileContent function
//       resize="vertical"
//       h="200px"
//     />
//     <HStack spacing={4}>
//       <Button colorScheme="blue" onClick={handleEditContent}>
//         Edit Content
//       </Button>
//       <Button colorScheme="red" onClick={handleCloseFile}>
//         Close
//       </Button>
//     </HStack>
//   </VStack>
// )}

//       </Box>
//       </Box>
//       {/* <ShowFiles files={filesInFolders} /> */}
//     </Box>
//   );
// };


// ... (previous code remains unchanged)

return (
  <Box p={4}>
    <VStack spacing={4} alignItems="flex-start">
          {!addingFolder ? (
          <Button colorScheme="blue" onClick={() => setAddingFolder(true)}>
            Add New Folder
          </Button>
        ) : (
          <Box >
            <Input
              placeholder="Enter Folder Name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              autoFocus
            />
            <Button
              colorScheme="blue"
              onClick={() => {
                if (newFolderName.trim() !== '') {
                  const updatedFiles = { ...filesInFolders, [newFolderName]: [] };
                  setFilesInFolders(updatedFiles);
                  setAddingFolder(false);
                }
              }}
            >
              Save Folder
            </Button>
          </Box>
        )}

      {/* Input fields for title and note */}
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleInputChange}
          disabled={addingFolder}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Note</FormLabel>
        <Textarea
          placeholder="Write your note here"
          value={note.content}
          onChange={handleTextareaChange}
          resize="vertical"
          h="200px"
          disabled={addingFolder}
        />
      </FormControl>

      {/* Save button */}
      <Button
        colorScheme="blue"
        onClick={handleSaveNote}
        disabled={!note.title || !note.content || addingFolder}
      >
        Save
      </Button>

      {/* Display folders */}
      <VStack align="flex-start" spacing={4}>
        <Text fontWeight="bold">Your Folders:</Text>
        {/* Map through folders and display them */}
        {Object.keys(filesInFolders).map((folderName) => (
          <HStack key={folderName}>
            <Text>{folderName}</Text>
            <Button
              colorScheme="red"
              onClick={() => handleDeleteFolder(folderName)}
            >
              Delete Folder
            </Button>
          </HStack>
        ))}
      </VStack>

      {Object.keys(filesInFolders).map((folderName) => (
  <Box key={folderName} width="100%" marginTop={4}>
    <Text fontWeight="bold">Files in {folderName}:</Text>
    {/* Display files in the folder */}
    <VStack align="flex-start" spacing={2}>
      {filesInFolders[folderName].map((file, index) => (
        <HStack key={index} width="100%">
          <Text>{file}</Text>
          <Button
            colorScheme="red"
            onClick={() => handleDeleteFile(file)}
          >
            Delete
          </Button>
          {/* Add more actions for files if needed */}
        </HStack>
      ))}
    </VStack>

    <FormControl flex='1'>
           <FormLabel>Select a folder</FormLabel>
           <Select
              placeholder="Select a folder"
              value={selectedFolder || ''}
              onChange={(e) => setSelectedFolder(e.target.value || null)}
              disabled={addingFolder}
              textTransform='capitalize'
            >
              {Object.keys(filesInFolders).map((folderName) => (
                <option key={folderName} value={folderName}>
                  {folderName}
                </option>
              ))}
            </Select>
          </FormControl>
          
  </Box>
))}


     




     {/* Files and Content Display */}
       {selectedFolder && (
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight="bold">Files in {selectedFolder}:</Text>
            {filesInFolders[selectedFolder].map((file, index) => (
              <HStack key={index}>
                <Box onClick={() => handleFileClick(file)} cursor="pointer">
                  {file}
                </Box>
                <Button colorScheme="red" onClick={() => handleDeleteFile(file)}>
                  Delete
                </Button>
              </HStack>
            ))}
          </VStack>
        )}



{selectedFile && (
  <VStack spacing={4} alignItems="flex-start">
    <Text fontWeight="bold">Content of {selectedFile}:</Text>
    <Textarea
      value={selectedFileContent} // Use selectedFileContent instead of note.content here
      onChange={(e) => setSelectedFileContent(e.target.value)} // Implement setSelectedFileContent function
      resize="vertical"
      h="200px"
    />
    <HStack spacing={4}>
      <Button colorScheme="blue" onClick={handleEditContent}>
        Edit Content
      </Button>
      <Button colorScheme="red" onClick={handleCloseFile}>
        Close
      </Button>
    </HStack>
  </VStack>
)}


    </VStack>
  </Box>
);

        }

export default CreateFilesMangement;
