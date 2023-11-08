
  



import React, { useState, ChangeEvent } from 'react';
import FolderComponent from './FolderComponent';
import EntryForm from './EntryForm';
import { Box, Button, Input } from '@chakra-ui/react';

interface Entry {
  title: string;
  category: string;
  content: string;
}

interface Folder {
  name: string;
  entries: Entry[];
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
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [folders, setFolders] = useState<Folder[]>([]);

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
      const updatedEntries: Entry[] = [...getEntriesByCategory(currentEntry.category)];
      updatedEntries[editIndex] = currentEntry;
      setEntriesByCategory(currentEntry.category, updatedEntries);
      setEditIndex(null);
      setEditMode(false);
    } else {
      const category = currentEntry.category.toLowerCase();
      if (category === 'personal' || category === 'work' || category === 'business' || category === 'important') {
        setEntriesByCategory(category, [...getEntriesByCategory(category), currentEntry]);
      } else {
        const folder = findFolder(category);
        if (folder) {
          folder.entries.push(currentEntry);
          setFolders([...folders]);
        }
      }
    }
    setCurrentEntry({ title: '', category: 'personal', content: '' });
  };

  const setEntriesByCategory = (category: string, entries: Entry[]) => {
    switch (category) {
      case 'personal':
        setPersonalEntries(entries);
        break;
      case 'work':
        setWorkEntries(entries);
        break;
      case 'business':
        setBusinessEntries(entries);
        break;
      case 'important':
        setImportantEntries(entries);
        break;
      default:
        break;
    }
  };

  const getEntriesByCategory = (category: string): Entry[] => {
    switch (category) {
      case 'personal':
        return personalEntries;
      case 'work':
        return workEntries;
      case 'business':
        return businessEntries;
      case 'important':
        return importantEntries;
      default:
        return [];
    }
  };

  const findFolder = (name: string) => {
    return folders.find((folder) => folder.name === name);
  };

  const handleCreateFolder = () => {
    const folderName = newFolderName.trim();
    if (folderName) {
      const newFolder: Folder = {
        name: folderName,
        entries: [],
      };
      setFolders((prevFolders) => [...prevFolders, newFolder]);
      setNewFolderName('');
    }
  };


const handleEditEntry = (category: string, index: number) => {
  if (category === 'personal' || category === 'work' || category === 'business' || category === 'important') {
    const entryToEdit = getEntriesByCategory(category)[index];
    setCurrentEntry({ ...entryToEdit });
  } else {
    const folder = findFolder(category);
    if (folder) {
      const entryToEdit = folder.entries[index];
      setCurrentEntry({ ...entryToEdit });
    }
    setEditIndex(index);
  }
  setEditMode(true);
}

const handleDeleteEntry = (category: string, index: number) => {
  if (category === 'personal' || category === 'work' || category === 'business' || category === 'important') {
    const updatedEntries = getEntriesByCategory(category).filter((_, i) => i !== index);
    setEntriesByCategory(category, updatedEntries);
  } else {
    const folder = findFolder(category);
    if (folder) {
      folder.entries.splice(index, 1);
      setFolders([...folders]);
    }
  }
}


const handleDeleteFolder = (folderName: string) => {
  const updatedFolders = folders.filter((folder) => folder.name !== folderName);
  setFolders(updatedFolders);
};



  return (
    <Box px={5}>
      <h2>Welcome Damilola</h2>
     <Box display={'grid'} w={['full',"80%"]} mx={['0px','auto']}  gridTemplateColumns={['1fr 1fr',]} mb={7} gap={4}>
     <Input
        placeholder="Folder Name"
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
      />
      <Button size={'sm'} onClick={handleCreateFolder}>Create New Folder</Button>
     </Box>
      <EntryForm
        currentEntry={currentEntry}
        folders={folders.map((folder) => folder.name)}
        editMode={editMode}
        editIndex={editIndex}
        handleTitleChange={handleTitleChange}
        handleCategoryChange={handleCategoryChange}
        handleEntryChange={handleEntryChange}
        handleSaveEntry={handleSaveEntry}
      />

     <Box display={'grid'}  gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gap={4}>
     <FolderComponent
        title="Personal"
        entries={personalEntries}
        onEditEntry={(index) => handleEditEntry('personal', index)}
        onDeleteEntry={(index) => handleDeleteEntry('personal', index)}
        // onDeleteFolder={() => handleDeleteFolder ('personal')}
        
      />

      <FolderComponent
        title="Work"
        entries={workEntries}
        onEditEntry={(index) => handleEditEntry('work', index)}
        onDeleteEntry={(index) => handleDeleteEntry('work', index)}
        // onDeleteFolder={() => handleDeleteFolder ('work')}
      />

      <FolderComponent
        title="Business"
        entries={businessEntries}
        onEditEntry={(index) => handleEditEntry('business', index)}
        onDeleteEntry={(index) => handleDeleteEntry('business', index)}
        // onDeleteFolder={() => handleDeleteFolder ('business')}
      />

      <FolderComponent
        title="Important"
        entries={importantEntries}
        onEditEntry={(index) => handleEditEntry('important', index)}
        onDeleteEntry={(index) => handleDeleteEntry('important', index)}
        // onDeleteFolder={() => handleDeleteFolder ('important')}
      />

      {folders.map((folder) => (
        <FolderComponent
          key={folder.name}
          title={folder.name}
          entries={folder.entries}
          onEditEntry={(index) => handleEditEntry(folder.name, index)}
          onDeleteEntry={(index) => handleDeleteEntry(folder.name, index)}
          // onDeleteFolder={() => handleDeleteFolder (folder.name)}
        />
      ))}
     </Box>
    </Box>
  );
}

export default WriteComp;

  