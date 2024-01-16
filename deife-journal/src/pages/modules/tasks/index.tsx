import  { useState } from "react";
import { FileManagementComponent } from "../..";
import { FileItem } from "../../../interface";

const TasksComponent : React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");
  const [files, setFiles] = useState<FileItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setEditingIndex] = useState<number | null>(null);


  const handleSave = (title: string, content: string, editingIndex: number | null) => {
    if (title.trim() !== "" && content.trim() !== "") {
      const newFile: FileItem = { title, content };
      if (editingIndex !== null) {
        setFiles((prevFiles: FileItem[]) => {
          const updatedFiles = [...prevFiles];
          updatedFiles[editingIndex] = newFile;
          return updatedFiles;
        });
      } else {
        setFiles((prevFiles: FileItem[]) => [...prevFiles, newFile]);
      }
      setInputTitle("");
      setInputContent("");
      setEditingIndex(null);
    }
  };

  const handleDelete = (index: number) => {
    setFiles((prevFiles: FileItem[]) => prevFiles.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setInputTitle(files[index].title);
    setInputContent(files[index].content);
    setEditingIndex(index);
  };

  return (
    <FileManagementComponent
      onSave={handleSave}
      files={files}
      onDelete={handleDelete}
      onEdit={handleEdit}
      inputTitle={inputTitle}
      setInputTitle={setInputTitle}
      inputContent={inputContent}
      setInputContent={setInputContent}
    />
  );
};

export default TasksComponent;

