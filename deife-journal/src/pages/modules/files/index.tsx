
import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Select, Textarea, Spinner, Text, ListItem, OrderedList } from '@chakra-ui/react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../../firebase';
import { ErrorModal } from '../../../commom/components';
import { FaEyeSlash } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";


interface Folder {
  id: string;
  name: string;
}

interface FileItem {
  id: string;
  title: string;
  content: string;
  folderId: string;
  userId: string;
}

const getCurrentUserId = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user ? user.uid : null;
};



const FolderComponent: React.FC<{
  folder: Folder;
  fetchFiles: (folderId: string) => void;
  onDeleteFolder: (folderId: string) => void;
  onDownloadFolder: (folderId: string, folderName: string) => void; // Pass folderName to the function
}> = ({ folder, fetchFiles, onDeleteFolder, onDownloadFolder }) => {
  const [showFiles, setShowFiles] = useState(false);

  const handleToggleFiles = () => {
    setShowFiles((prev) => !prev);
    if (!showFiles) {
      fetchFiles(folder.id);
    }
  };

 
return (
  <Box key={folder.id} display='flex' alignItems='center' gap={'10px'}>
    <Text noOfLines={1} display='flex' alignItems='center' gap={'3px'} onClick={handleToggleFiles}>
      {folder.name} {showFiles ? '' : <FaEyeSlash />}
    </Text>
    <Button bg='#FEFFFE' shadow='base' size="sm" onClick={() => onDeleteFolder(folder.id)}><AiOutlineDelete /></Button>
    <Button bg='#FEFFFE' shadow='base' size="sm" onClick={() => onDownloadFolder(folder.id, folder.name)}> <BsDownload /> </Button>
    {showFiles}
  </Box>
);
};


const FileComponent: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [files, setFiles] = useState<FileItem[]>([]);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');
  const [editingFile, setEditingFile] = useState<FileItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

    // State for error modal
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorModalContent, setErrorModalContent] = useState('');
  
   
  

  useEffect(() => {
    // Fetch folders on component mount
    fetchFolders();
  }, []);

  useEffect(() => {
    // Fetch files for the selected folder
    if (selectedFolder) {
      fetchFiles(selectedFolder);
    }
  }, [selectedFolder]);

  const fetchFolders = async () => {
    setLoading(true);
    const userId = getCurrentUserId();

    if (userId) {
      const foldersCollection = collection(firestore, 'Folders');
      const foldersSnapshot = await getDocs(query(foldersCollection, where('userId', '==', userId)));
      const foldersData: Folder[] = foldersSnapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }));
      setFolders(foldersData);

      // Fetch files for the selected folder
      if (selectedFolder) {
        fetchFiles(selectedFolder);
      }

      setLoading(false);
    }
  };

  const fetchFiles = async (folderId: string) => {
    setLoading(true);
    const userId = getCurrentUserId();

    if (userId) {
      const filesCollection = collection(firestore, 'Files');
      const filesSnapshot = await getDocs(
        query(filesCollection, where('userId', '==', userId), where('folderId', '==', folderId))
      );
      const filesData: FileItem[] = filesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as FileItem));
      setFiles(filesData);
      setLoading(false);
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    try {
      setLoading(true);
  
      // First, delete all files in the folder
      const filesToDelete = files.filter((file) => file.folderId === folderId);
      await Promise.all(filesToDelete.map(async (file) => await handleDeleteFile(file.id)));
  
      // Then, delete the folder itself
      await deleteDoc(doc(firestore, 'Folders', folderId));
  
      // Update the state to remove the deleted folder
      setFolders((prevFolders) => prevFolders.filter((folder) => folder.id !== folderId));
      setLoading(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
      openErrorModal('Error deleting folder: ' + error.message);
      setLoading(false);
    }
  };
  

  
  const handleSaveFolder = async () => {
    try {
      setLoading(true);
      const userId = getCurrentUserId();

      if (userId && newFolderName.trim() !== '') {
        const foldersCollection = collection(firestore, 'Folders');
        const newFolderRef = await addDoc(foldersCollection, { name: newFolderName, userId });

        setFolders((prevFolders) => {
          return [...prevFolders, { id: newFolderRef.id, name: newFolderName }];
        });

        setNewFolderName('');
        setLoading(false);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      openErrorModal('Error saving folder: ' + error.message);
      setLoading(false);
    }
  };

  const handleSaveFile = async () => {
    try {
      setLoading(true);
      const userId = getCurrentUserId();
  
      if (userId && selectedFolder && inputTitle.trim() !== '' && inputContent.trim() !== '') {
        const filesCollection = collection(firestore, 'Files');
        const fileData = {
          title: inputTitle,
          content: inputContent,
          folderId: selectedFolder,
          userId,
        };
  
        if (editingFile) {
          // Update existing file
          const fileDocRef = doc(firestore, 'Files', editingFile.id);
          await updateDoc(fileDocRef, fileData);
  
          // Update the state with the edited file
          setFiles((prevFiles) =>
            prevFiles.map((file) => (file.id === editingFile.id ? { ...file, ...fileData } : file))
          );
  
          setEditingFile(null);
        } else {
          // Add new file
          const newFileRef = await addDoc(filesCollection, fileData);
          setFiles((prevFiles) => [...prevFiles, { id: newFileRef.id, ...fileData } as FileItem]);
        }
  
        setInputTitle('');
        setInputContent('');
        setLoading(false);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
      openErrorModal('Error saving file: ' + error.message);
      setLoading(false);
    }
  };
  
  

  const handleDeleteFile = async (fileId: string) => {
    try {
      setLoading(true);
      await deleteDoc(doc(firestore, 'Files', fileId));
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
      setLoading(false);
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      openErrorModal('Error deleting file: ' + error.message);
      setLoading(false);
    }
  };
  

  const handleEditFile = (file: FileItem) => {
    try {
      setInputTitle(file.title);
      setInputContent(file.content);
      setSelectedFolder(file.folderId);
      setEditingFile(file);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      openErrorModal('Error editing file: ' + error.message);
    }
  };
  

   // Function to open the error modal
   const openErrorModal = (errorMessage: string) => {
    setErrorModalContent(errorMessage);
    setErrorModalOpen(true);
  };

  // Function to close the error modal
  const closeErrorModal = () => {
    setErrorModalOpen(false);
    setErrorModalContent('');
  };


  const handleDownloadFolder = (folderId: string, folderName: string) => {
    const folderFiles = files.filter((file) => file.folderId === folderId);
  
    // Create a text file with each file's content separated by a newline
    const folderContent = folderFiles.map((file) => `${file.title}\n${file.content}`).join('\n\n');
  
    // Create a Blob with the folder content
    const blob = new Blob([folderContent], { type: 'text/plain' });
  
    // Create a download link and trigger the download
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = `${folderName}.txt`; // Use folderName instead of folder.name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  

  const handleDownloadFile = (fileId: string) => {
    // Find the file in the array based on the fileId
    const file = files.find((file) => file.id === fileId);
  
    if (file) {
      // Handle the download action here, e.g., by creating a download link
      const blob = new Blob([file.content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${file.title}.txt`;
      link.click();
    } else {
      // Handle the case where the file with the given fileId is not found
      console.error(`File with id ${fileId} not found.`);
    }
  };
  
  

  return (
    <Box display='flex'  gap={['10px']} px={['5px']} justifyContent={['space-between']} flexDir={['column','row']}>
      {/* Loading Spinner */}
      {loading && <Spinner mx='auto' size="md" color="purple.500" />}



    




<Box flex='1'>

   {/* All Folders Section */}
   <Box mb={4}>
        <Text fontWeight='700' mb={['15px']}>List of folders</Text>
        {folders.map((folder) => (
  <Box key={folder.id} my="10px">
    <FolderComponent
      folder={folder}
      fetchFiles={fetchFiles}
      onDeleteFolder={handleDeleteFolder}
      onDownloadFolder={handleDownloadFolder}
    />
  </Box>
))}

      </Box>

    {/* List of Files */}
    <Box mt={[5,7,9]}>
        <Text fontWeight='700' mb={['10px']}>Files</Text>
        <OrderedList>
          {files.map((file) => (
            <ListItem key={file.id} display='flex' gap='10px' mb='15px'>
              <Text noOfLines={1} as='span' fontWeight='bold'>{file.title}</Text>
              <Button bg='#FEFFFE' shadow='base' size="sm" onClick={() => handleEditFile(file)}><CiEdit /></Button>
              <Button bg='#FEFFFE' shadow='base' size="sm" onClick={() => handleDeleteFile(file.id)}><AiOutlineDelete /></Button>
              <Button bg='#FEFFFE' shadow='base' size="sm" onClick={() => handleDownloadFile(file.id)}><BsDownload /></Button>
            </ListItem>
          ))}
        </OrderedList>
      </Box>


       

</Box>

{/* part two */}

<Box flex='2'>

<Box mb={4}>
        <Input
          variant="flushed"
          placeholder="Create a new Folder"
          value={newFolderName}
          shadow='sm'
          px={2}
          mb={1}
          focusBorderColor="purple.500" 
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <Button shadow='base' size="sm" mt={2} colorScheme="purple" variant="ghost" onClick={handleSaveFolder}>
          Save Folder
        </Button>
      </Box>


          {/* File Section */}
          <Box mt={[5,8,12]}>
        <Select
          shadow='sm'
          focusBorderColor="purple.500" 
          placeholder="Select Folder"
          value={selectedFolder}
          onChange={(e) => {
            setSelectedFolder(e.target.value);
            fetchFiles(e.target.value);
          }}
        >
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
        </Select>
      </Box>

      {/* File Input Section */}
      <Box mt={[5,6,7]}>
        <Input
          variant="flushed"
          placeholder="Title Name"
          value={inputTitle}
          focusBorderColor="purple.500" 
          shadow='sm'
          px={2}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <Textarea
          placeholder="File Content"
          shadow='base'
          mt={4}
          value={inputContent}
          focusBorderColor="purple.500" 
          onChange={(e) => setInputContent(e.target.value)}
          minH={['350px']}
        />
        <Button shadow='base' mt={2} colorScheme="purple" variant="ghost" onClick={handleSaveFile}>
          {editingFile ? 'Update File' : 'Save File'}
        </Button>
      </Box>

</Box>

    
    

    

  

      <ErrorModal isOpen={errorModalOpen} onClose={closeErrorModal} errorMessage={errorModalContent} />
    </Box>
  );
};

export default FileComponent;
