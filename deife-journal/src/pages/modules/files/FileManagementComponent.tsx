
import React, { useState } from "react";
import { Box, Button, Input, ListItem, OrderedList, Text, Textarea } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import { FileItem } from "../../../interface";


interface FileListProps {
  files: FileItem[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onDownload: (index: number) => void;  
}



 const FileList: React.FC<FileListProps> = ({
  files,
  onDelete,
  onEdit,
  onDownload,
}) => (
  <>
    <Text>List of Files</Text>
    <OrderedList>
      {files.map((file, index) => (
        <ListItem key={index} display='flex' gap={['10px']} alignItems="center">
          <Text noOfLines={1} flex="1">  {file.title} </Text>
          <Box className=''>
            <FaTrash
              size={20}
              onClick={() => onDelete(index)}
              style={{ cursor: 'pointer', marginRight: '5px' }}
            />
          </Box>
          <Box className=''>
            <FaEdit
              size={20}
              onClick={() => onEdit(index)}
              style={{ cursor: 'pointer', marginRight: '5px' }}
            />
          </Box>
          <Box className=''>
            <FaDownload
              size={20}
              onClick={() => onDownload(index)}
              style={{ cursor: 'pointer', marginRight: '5px' }}
            />
          </Box>
        </ListItem>
      ))}
    </OrderedList>
  </>
);



interface FileManagementProps {
  onSave: (title: string, content: string, editingIndex: number | null) => void;
  files: FileItem[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  inputTitle: string;
  setInputTitle: React.Dispatch<React.SetStateAction<string>>;
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
}

const FileManagementComponent: React.FC<FileManagementProps> = ({
  onSave,
  files,
  onDelete,
  inputTitle,
  setInputTitle,
  inputContent,
  setInputContent,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);


  const handleSave = () => {
    onSave(inputTitle, inputContent, editingIndex);
    setEditingIndex(null);
    setInputTitle(""); 
    setInputContent(""); 
  };

  const handleDelete = (index: number) => {
    onDelete(index);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    const editedFile = files[index];
    setInputTitle(editedFile.title);
    setInputContent(editedFile.content);
  };


  const handleDownload = (index: number) => {
    // Handle the download action here, e.g., by creating a download link
    const file = files[index];
    const blob = new Blob([file.content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${file.title}.txt`;
    link.click();
  };
 

  return (
    <Box display={['grid', 'grid', 'flex']} gap={['60px']}>
      <Box className="" flex='2'>
        <Input
          variant='flushed'
          placeholder='File Title'
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          
        />
        <Textarea
          placeholder='File Content'
          minHeight='350px'
          mt={['15px', '20px', '25px']}
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        
        />
        <Button
          mt={['1rem', '1.5rem']}
          colorScheme='purple'
          variant='ghost'
          onClick={handleSave}
         
        >
          Save file
        </Button>
     
      </Box>

      <Box flex='1'>
       <FileList
          files={files}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onDownload={handleDownload} 
         
        />
       </Box>
    </Box>
  );
};

export default FileManagementComponent;
