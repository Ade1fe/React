import React, { useState } from 'react';
import AddFolderComponent from './index';

const FoldersPage: React.FC = () => {
  const [folders, setFolders] = useState<string[]>([]);

  const handleAddFolder = (folderName: string) => {
    const newFolders = [...folders, folderName];
    setFolders(newFolders);
    // You can perform additional logic here, like sending the new folder to an API, etc.
  };

  return (
    <div>
      <h1>My Folders</h1>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>{folder}</li>
        ))}
      </ul>
      <AddFolderComponent addFolder={handleAddFolder} />
    </div>
  );
};

export default FoldersPage;
