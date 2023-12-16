




// import { Box, Input, Textarea, Button, VStack, Select, Divider, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// interface Note {
//   title: string;
//   folder: string;
//   content: string;
// }
// // ... (imports and interfaces)

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
//       setAddingFolder(false); // Re-enable input fields after saving note.
//     };
  
//     const handleAddFolder = () => {
//       setAddingFolder(true);
//     };
  
//     const handleNewFolderSubmit = () => {
//       if (newFolderName.trim() !== '' && !folders.includes(newFolderName)) {
//         setFolders(prevFolders => [...prevFolders, newFolderName]);
//         setNewFolderName('');
//         setSelectedFolder(newFolderName);
//         setNote(prevNote => ({
//           ...prevNote,
//           folder: newFolderName,
//         }));
//         setAddingFolder(false); // Disable folder creation after successful addition.
//         // Provide visual feedback that the folder has been added.
//       }
//     };
  
//     return (
//       <Box>
//         {!addingFolder && (
//           <Button colorScheme="blue" onClick={handleAddFolder}>
//             Add New Folder
//           </Button>
//         )}
  
//         {addingFolder && (
//           <VStack spacing={4}>
//             <Input
//               placeholder="Enter Folder Name"
//               value={newFolderName}
//               onChange={e => setNewFolderName(e.target.value)}
//               autoFocus
//             />
//             <Button colorScheme="blue" onClick={handleNewFolderSubmit}>
//               Save Folder
//             </Button>
//           </VStack>
//         )}
  
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
//           <Button colorScheme="blue" onClick={handleSaveNote} disabled={!note.title || !note.content}>
//             Save
//           </Button>
//         </VStack>
//       </Box>
//     );
//   };
  
//   export default FolderManagement;
  









import { useState } from 'react';
import { Box, Button, Divider, Input, Select, Text, Textarea, VStack } from '@chakra-ui/react';

interface Note {
  title: string;
  folder: string;
  content: string;
}

const FolderManagement = () => {
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

  const handleFileClick = (file: string) => {
    setSelectedFile(file);
    if (selectedFolder) {
      const content = filesInFolders[selectedFolder].find((f) => f === file);
      if (content) {
        setNote({
          title: file,
          folder: selectedFolder,
          content: content,
        });
      }
    }
  };

  const handleEditContent = () => {
    // Handle editing content if needed
    // For example, you can enable text area for editing content
  };

  return (
    <Box>
      {!addingFolder && (
        <Button colorScheme="blue" onClick={() => setAddingFolder(true)}>
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
          <Button colorScheme="blue" onClick={() => {
            if (newFolderName.trim() !== '') {
              const updatedFiles = { ...filesInFolders, [newFolderName]: [] };
              setFilesInFolders(updatedFiles);
              setAddingFolder(false);
            }
          }}>
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
          readOnly={!selectedFile}
        />
        <Select
          placeholder="Select a folder"
          value={selectedFolder || ''}
          onChange={(e) => setSelectedFolder(e.target.value || null)}
          disabled={addingFolder}
        >
          {Object.keys(filesInFolders).map((folderName) => (
            <option key={folderName} value={folderName}>
              {folderName}
            </option>
          ))}
        </Select>
        <Divider />
        <VStack spacing={2} alignItems="flex-start">
          <Text fontWeight="bold">Your Folders:</Text>
          {Object.keys(filesInFolders).map((folderName) => (
            <Box key={folderName} onClick={() => setSelectedFolder(folderName)}>
              {folderName}
            </Box>
          ))}
        </VStack>
        <Divider />
        <Button colorScheme="blue" onClick={handleSaveNote} disabled={!note.title || !note.content}>
          Save
        </Button>
      </VStack>

      {selectedFolder && (
        <VStack spacing={2} alignItems="flex-start">
          <Text fontWeight="bold">Files in {selectedFolder}:</Text>
          {filesInFolders[selectedFolder].map((file, index) => (
            <Box key={index} onClick={() => handleFileClick(file)}>
              {file}
            </Box>
          ))}
        </VStack>
      )}

      {selectedFile && (
        <VStack spacing={4} alignItems="flex-start">
          <Text fontWeight="bold">Content of {selectedFile}:</Text>
          <Textarea
            value={note.content}
            onChange={handleTextareaChange}
            resize="vertical"
            h="200px"
            readOnly={!selectedFile}
          />
          <Button colorScheme="blue" onClick={handleEditContent} disabled={!selectedFile}>
            Edit Content
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default FolderManagement;
