import React, { useState, ChangeEvent } from 'react';
import FolderComponent from './FolderComponent';
import EntryForm from './EntryForm';
import { Box } from '@chakra-ui/react';

// Define the Entry type
interface Entry {
  title: string;
  category: string;
  content: string;
}

function WriteComp() {
  const [personalEntries, setPersonalEntries] = useState<Entry[]>([]);
  const [workEntries, setWorkEntries] = useState<Entry[]>([]);
  const [businessEntries, setBusinessEntries] = useState<Entry[]>([]);
  const [importantEntries, setImportantEntries] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Entry>({
    title: '',
    category: 'personal',
    content: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentEntry({ ...currentEntry, title: e.target.value });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentEntry({ ...currentEntry, category: e.target.value });
  };

  const handleEntryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentEntry({ ...currentEntry, content: e.target.value });
  };

  const handleSaveEntry = () => {
    if (editMode && editIndex !== null) {
      if (currentEntry.category === 'personal') {
        const updatedEntries: Entry[] = [...personalEntries];
        updatedEntries[editIndex] = currentEntry;
        setPersonalEntries(updatedEntries);
      } else if (currentEntry.category === 'work') {
        const updatedEntries: Entry[] = [...workEntries];
        updatedEntries[editIndex] = currentEntry;
        setWorkEntries(updatedEntries);
      } else if (currentEntry.category === 'business') {
        const updatedEntries: Entry[] = [...businessEntries];
        updatedEntries[editIndex] = currentEntry;
        setBusinessEntries(updatedEntries);
      } else if (currentEntry.category === 'important') {
        const updatedEntries: Entry[] = [...importantEntries];
        updatedEntries[editIndex] = currentEntry;
        setImportantEntries(updatedEntries);
      }
      setEditIndex(null);
      setEditMode(false);
    } else {
      if (currentEntry.category === 'personal') {
        setPersonalEntries([...personalEntries, currentEntry]);
      } else if (currentEntry.category === 'work') {
        setWorkEntries([...workEntries, currentEntry]);
      } else if (currentEntry.category === 'business') {
        setBusinessEntries([...businessEntries, currentEntry]);
      } else if (currentEntry.category === 'important') {
        setImportantEntries([...importantEntries, currentEntry]);
      }
    }
    setCurrentEntry({ title: '', category: 'personal', content: '' });
  }

  const handleEditEntry = (category: string, index: number) => {
    if (category === 'personal') {
      setCurrentEntry(personalEntries[index]);
    } else if (category === 'work') {
      setCurrentEntry(workEntries[index]);
    } else if (category === 'business') {
      setCurrentEntry(businessEntries[index]);
    } else if (category === 'important') {
      setCurrentEntry(importantEntries[index]);
    }
    setEditIndex(index);
    setEditMode(true);
  }

  const handleDeleteEntry = (category: string, index: number) => {
    if (category === 'personal') {
      const updatedEntries: Entry[] = [...personalEntries];
      updatedEntries.splice(index, 1);
      setPersonalEntries(updatedEntries);
    } else if (category === 'work') {
      const updatedEntries: Entry[] = [...workEntries];
      updatedEntries.splice(index, 1);
      setWorkEntries(updatedEntries);
    } else if (category === 'business') {
      const updatedEntries: Entry[] = [...businessEntries];
      updatedEntries.splice(index, 1);
      setBusinessEntries(updatedEntries);
    } else if (category === 'important') {
      const updatedEntries: Entry[] = [...importantEntries];
      updatedEntries.splice(index, 1);
      setImportantEntries(updatedEntries);
    }
  }

  return (
    <Box px={5}>
      <h2>Welcome Damilola</h2>
      <EntryForm
        currentEntry={currentEntry}
        editMode={editMode}
        editIndex={editIndex}
        handleTitleChange={handleTitleChange}
        handleCategoryChange={handleCategoryChange}
        handleEntryChange={handleEntryChange}
        handleSaveEntry={handleSaveEntry}
      />

      <Box display={'grid'} gridTemplateColumns={['1fr','1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gap={[4,6,8]}>
      <FolderComponent
        title="Personal"
        entries={personalEntries}
        onEditEntry={(index) => handleEditEntry('personal', index)}
        onDeleteEntry={(index) => handleDeleteEntry('personal', index)}
      />

      <FolderComponent
        title="Work"
        entries={workEntries}
        onEditEntry={(index) => handleEditEntry('work', index)}
        onDeleteEntry={(index) => handleDeleteEntry('work', index)}
      />

      <FolderComponent
        title="Business"
        entries={businessEntries}
        onEditEntry={(index) => handleEditEntry('business', index)}
        onDeleteEntry={(index) => handleDeleteEntry('business', index)}
      />

      <FolderComponent
        title="Important"
        entries={importantEntries}
        onEditEntry={(index) => handleEditEntry('important', index)}
        onDeleteEntry={(index) => handleDeleteEntry('important', index)}
      />
      </Box>
    </Box>
  );
}

export default WriteComp;
