import React, { useState } from 'react';
import { Box, ListItem, OrderedList, Text } from '@chakra-ui/react';

interface FolderComponentProps {
  title: string;
  entries: {
    title: string;
    category: string;
    content: string;
  }[];
  onEditEntry: (index: number) => void;
  onDeleteEntry: (index: number) => void;
}

function FolderComponent({
  title,
  entries,
  onEditEntry,
  onDeleteEntry,
}: FolderComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleFolder = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box my={10} >
      <Box onClick={handleToggleFolder} style={{ cursor: 'pointer' }} mb={3}>
        <strong>{title}</strong> {isExpanded ? '[-]' : '[+]'}
      </Box>
      {isExpanded && (
        <OrderedList w={['200px', '180px', '200px']}>
          {entries.map((entry, index) => (
            <ListItem key={index} shadow={'base'} p={2} my={3} w={'full'} >
              <Text fontWeight={'bold'}  noOfLines={1}>Title: {entry.title}</Text>
           
              <Text  noOfLines={1}>{entry.content}</Text>
              <button onClick={() => onEditEntry(index)}>Edit</button>
              <button onClick={() => onDeleteEntry(index)}>Delete</button>
            </ListItem>
          ))}
        </OrderedList>
      )}
    </Box>
  );
}

export default FolderComponent;
