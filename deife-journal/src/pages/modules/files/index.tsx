


import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  ListItem,
  OrderedList,
  Select,
  Text,
  Textarea,
  UnorderedList,
} from '@chakra-ui/react';
import { FaTrash, FaEdit, FaDownload } from 'react-icons/fa';
import MarqueeComponent from '../../../MarqueeComponent';

interface FileItem {
  title: string;
  content: string;
  folder?: string;
  index?: number;
}

const FileComponent: React.FC = () => {
  const [folders, setFolders] = useState<string[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [files, setFiles] = useState<{ [key: string]: FileItem[] }>({});
  const [showFiles, setShowFiles] = useState<{ [key: string]: boolean }>({});

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSaveFolder = () => {
    if (newFolderName.trim() !== '') {
      const newFolders = [...folders, newFolderName];
      setFolders(newFolders);
      setSelectedFolder(newFolderName);
      setNewFolderName('');
      setFiles({
        ...files,
        [newFolderName]: [],
      });
      setShowFiles({
        ...showFiles,
        [newFolderName]: false,
      });
    }
  };

  const handleToggleShowFiles = (folder: string) => {
    setShowFiles((prevShowFiles) => ({
      ...prevShowFiles,
      [folder]: !prevShowFiles[folder],
    }));
  };
  
    const handleSaveFile = () => {
      if (selectedFolder.trim() !== '') {
        const titleInput = document.getElementById('titleInput') as HTMLInputElement;
        const fileName = titleInput?.value || 'Untitled';
  
        if (editingIndex !== null) {
          // If in edit mode, update the existing file
          setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles[selectedFolder]];
            updatedFiles[editingIndex] = { title: inputTitle, content: inputContent };
            return { ...prevFiles, [selectedFolder]: updatedFiles };
          });
          setEditingIndex(null); // Exit edit mode
        } else {
          // If not in edit mode, add a new file
          setFiles((prevFiles) => ({
            ...prevFiles,
            [selectedFolder]: [...(prevFiles[selectedFolder] || []), { title: fileName, content: inputContent }],
          }));
        }
  
        console.log(`File "${fileName}" saved in folder: ${selectedFolder}`);
        setInputTitle(''); // Clear input fields after saving
        setInputContent('');
      }
    };
  
    const handleDownload = (index: number) => {
        const file = files[selectedFolder][index];
        const blob = new Blob([file.content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${file.title}.txt`;
        link.click();
      };
    
      const handleDelete = (index: number) => {
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles[selectedFolder]];
          updatedFiles.splice(index, 1);
          return { ...prevFiles, [selectedFolder]: updatedFiles };
        });
      };
    
      const handleEdit = (index: number) => {
        setInputTitle(files[selectedFolder][index].title);
        setInputContent(files[selectedFolder][index].content);
        setEditingIndex(index);
      };
  
    const renderFilesList = (folder: string) => (
      <UnorderedList>
        {files[folder]?.map((file, index) => (
          <ListItem key={index} noOfLines={1} display="flex" gap={['10px']} alignItems="center">
            {file.title}
            <Box className="">
              <FaTrash size={20} style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => handleDelete(index)} />
            </Box>
            <Box className="">
              <FaEdit size={20} style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => handleEdit(index)} />
            </Box>
            <Box className="">
              <FaDownload size={20} style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => handleDownload(index)} />
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    );
  
    return (
     <Box position='relative'>
        <MarqueeComponent />
      <Box display={['grid', 'grid', 'grid', 'flex']} gap={['20px']} mt={['20px']}>
        {/* Left Section */}
        <Box shadow="md" flex="1" order={['']} p={'10px'}>
          <Box mb={['50px']} className="">
            <Input
              variant="flushed"
              placeholder="Folder Name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              _focus={{
                outline: 'none',
                borderColor: 'purple', // Set the focus border color to purple
              }}
            />
            <Button mt={['1rem', '1.5rem']} colorScheme="purple" variant="ghost"  onClick={handleSaveFolder}>
              Save Folder
            </Button>
          </Box>
  
          <div className="">
            <Box mb={['40px']}>
              <Text fontWeight='bold'> List of folders:</Text>
              <OrderedList>
                {folders.map((folder) => (
                  <ListItem key={folder}>
                    <Button colorScheme="teal" variant="outline" onClick={() => handleToggleShowFiles(folder)}>
                      {showFiles[folder] ? 'Hide' : 'Show'} Files in {folder}
                    </Button>
                    {showFiles[folder] && renderFilesList(folder)}
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </div>
        </Box>
  
      
        <Box flex="2" order={['2', '2', '1']} className="">
           
          <Select
            variant="flushed"
            placeholder="Folders"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            {folders.map((folder) => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </Select>
          <Input
            id="titleInput"
            variant="flushed"
            placeholder="Title Name"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            _focus={{
              outline: 'none',
              borderColor: 'purple', // Set the focus border color to purple
            }}
          />
          <Textarea
            placeholder="File Content"
            minHeight={["350px",'50vh', '70vh', '80vh']}
            mt={['15px', '20px', '25px']}
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            _focus={{
              outline: 'none',
              borderColor: 'purple', // Set the focus border color to purple
            }}
          />
          <Button mt={['1rem', '1.5rem']} colorScheme="purple" variant="ghost" onClick={handleSaveFile}>
            Save file
          </Button>
        </Box>
        
      </Box>

      
     </Box>
    );
  };
  
  export default FileComponent;










