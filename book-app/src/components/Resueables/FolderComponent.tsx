import { useState } from 'react';
import { Box, Button, ListItem, OrderedList, Text } from '@chakra-ui/react';

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
        <Text display={'inline-block'} fontWeight={'bold'} textTransform={'capitalize'} fontSize={'md'}>{title}</Text> {isExpanded ? '[-]' : '[+]'}
      </Box>
      {isExpanded && (
        <OrderedList>
          {entries.map((entry, index) => (
            <ListItem key={index} shadow={'base'} p={2} my={3} wordBreak={'break-all'} >
              <Text fontWeight={'bold'}  noOfLines={1}>Title: {entry.title}</Text>
           
              <Text  noOfLines={1} >{entry.content}</Text>
             <Box display={'flex'} justifyContent={'space-between'} mt={2}>
             <Button size={'sm'} py={1} onClick={() => onEditEntry(index)}>Edit</Button>
              <Button size={'sm'} py={1} onClick={() => onDeleteEntry(index)}>Delete</Button>
             </Box>
            </ListItem>
          ))}
        </OrderedList>
      )}
    </Box>
  );
}

export default FolderComponent;














































// import { useState } from 'react';
// import { Box, Button, ListItem, OrderedList, Text } from '@chakra-ui/react';

// interface FolderComponentProps {
//   title: string;
//   entries: {
//     title: string;
//     category: string;
//     content: string;
//   }[];
//   onEditEntry: (index: number) => void;
//   onDeleteEntry: (index: number) => void; 
//   onDeleteFolder: (index: string) => void
// }

// function FolderComponent({
//   title,
//   entries,
//   onEditEntry,
//   onDeleteEntry,
//   onDeleteFolder,
// }: FolderComponentProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggleFolder = () => {
//     setIsExpanded(!isExpanded);
//   };
  

//   return (
//     <Box my={10} >
//       <Box style={{ cursor: 'pointer' }} mb={3}>
//         <Text display={'inline-block'} onClick={handleToggleFolder}  fontWeight={'bold'} textTransform={'capitalize'} fontSize={'md'}>{title}</Text> {isExpanded ? '[-]' : '[+]'}
//         <Button size={'sm'} py={1} onClick={() => onDeleteFolder(title)}>Delete Folder</Button>
//       </Box>
//       {isExpanded && (
//         <OrderedList>
//           {entries.map((entry, index) => (
//             <ListItem key={index} shadow={'base'} p={2} my={3} wordBreak={'break-all'} >
         
//               <Text fontWeight={'bold'}  noOfLines={1}>Title: {entry.title}</Text>
           
//               <Text  noOfLines={1} >{entry.content}</Text>
//              <Box display={'flex'} justifyContent={'space-between'} mt={2}>
//              <Button size={'sm'} py={1} onClick={() => onEditEntry(index)}>Edit</Button>
//               <Button size={'sm'} py={1} onClick={() => onDeleteEntry(index)}>Delete</Button>
//              </Box>
//             </ListItem>
//           ))}
//         </OrderedList>
//       )}
//     </Box>
//   );
// }

// export default FolderComponent;
