import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddFolderProps {
  addFolder: (folderName: string) => void;
}

const AddFolderComponent: React.FC<AddFolderProps> = ({ addFolder }) => {
  const [folderName, setFolderName] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName.trim() !== '') {
      addFolder(folderName);
      setFolderName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={handleChange}
      />
      <button type="submit">Add Folder</button>
    </form>
  );
};

export default AddFolderComponent;
