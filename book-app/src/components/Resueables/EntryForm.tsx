
import  { ChangeEvent } from 'react';
import { Box, Button, Input, Select, Textarea, useColorModeValue } from '@chakra-ui/react';

interface EntryFormProps {
  currentEntry: {
    title: string;
    category: string;
    content: string;
  };
  folders: string[];
  editMode: boolean;
  editIndex: number | null;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleEntryChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSaveEntry: () => void;
}

function EntryForm({
  currentEntry,
  folders, 
  editMode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editIndex,
  handleTitleChange,
  handleCategoryChange,
  handleEntryChange,
  handleSaveEntry,
}: EntryFormProps) {
  const isFieldEmpty = !currentEntry.title || !currentEntry.category || !currentEntry.content;
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  const handleSave = () => {
    if (!isFieldEmpty) {
      handleSaveEntry();
    } else {
      alert('Please fill in all fields before saving.');
    }
  };

  return (
    <Box display={'grid'} gridTemplateColumns={['1fr', '1fr 1fr']} gap={4}>
      <Select textTransform={'capitalize'} value={currentEntry.category} onChange={handleCategoryChange} focusBorderColor={bgs} shadow={'base'}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="business">Business</option>
        <option value="important">Important</option>
        {folders.map((folder) => (
          <option key={folder} value={folder}>
            {folder}
          </option>
        ))}
      </Select>

      <Input
        variant="filled"
        placeholder="Title"
        value={currentEntry.title}
        onChange={handleTitleChange}
        focusBorderColor={bgs}
        shadow={'base'}
      />

      <Textarea
        value={currentEntry.content}
        gridColumn={['span 1', 'span 2']}
        onChange={handleEntryChange}
        placeholder="Express your thoughts, whether they be related to literature, book, manga, or any creative ideas.."
        focusBorderColor={bgs}
        rows={15}
        shadow={'base'}
      />
      <Button w={'50%'} onClick={handleSave} shadow={'md'} disabled={isFieldEmpty} colorScheme='gray'>
        {editMode ? 'Save' : 'Save'}
      </Button>
    </Box>
  );
}

export default EntryForm;
