import { useState } from 'react';

export interface Note {
  title: string;
  folder: string;
  content: string;
}

export const useNoteState = () => {
  const [note, setNote] = useState<Note>({
    title: '',
    folder: '',
    content: '',
  });

  return { note, setNote };
};

export const useFilesState = () => {
  const [filesInFolders, setFilesInFolders] = useState<Record<string, string[]>>({
    'Work': [],
    'Personal': [],
    'Important': [],
  });

  return { filesInFolders, setFilesInFolders };
};

export const useSelectedState = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return { selectedFolder, setSelectedFolder, selectedFile, setSelectedFile };
};

export const useAddingFolderState = () => {
  const [addingFolder, setAddingFolder] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>('');

  return { addingFolder, setAddingFolder, newFolderName, setNewFolderName };
};

export const useHandleFunctions = (
  note: Note,
  setNote: React.Dispatch<React.SetStateAction<Note>>,
  filesInFolders: Record<string, string[]>,
  setFilesInFolders: React.Dispatch<React.SetStateAction<Record<string, string[]>>>,
  selectedFolder: string | null,
  selectedFile: string | null,
  addingFolder: boolean,
  newFolderName: string,
  setSelectedFolder: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedFile: React.Dispatch<React.SetStateAction<string | null>>,
) => {
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

  // ... other functions here

  return {
    handleInputChange,
    handleTextareaChange,
    handleSaveNote,
    // ... other functions here
  };
};


export const useHandleFunctions = (
    // ... other parameters ...
  ) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // ... handleInputChange implementation ...
    };
  
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // ... handleTextareaChange implementation ...
    };
  
    const handleSaveNote = () => {
      // ... handleSaveNote implementation ...
    };
  
    // ... other functions ...
  
    return {
      handleInputChange,
      handleTextareaChange,
      handleSaveNote, // Include handleSaveNote in the returned object
      // ... other functions ...
    };
  };
  