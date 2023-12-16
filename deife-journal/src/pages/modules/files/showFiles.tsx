import React from 'react';
import { Box } from '@chakra-ui/react';

interface ShowFilesProps {
  files: Record<string, string[]>; // Define the type of files prop as per your requirement
}

const ShowFiles: React.FC<ShowFilesProps> = ({ files }) => {
  // You can access and use the files data here as needed
  // Example: Displaying files in a specific format
  return (
    <Box>
      <h2>Files:</h2>
      {Object.keys(files).map((folderName) => (
        <div key={folderName}>
          <h3>{folderName}</h3>
          <ul>
            {files[folderName].map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default ShowFiles;
