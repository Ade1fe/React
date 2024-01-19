
import React, { useState, useEffect } from "react";
import { FileManagementComponent } from "../..";
import { FileItem } from "../../../interface";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  where,
  query,
} from "firebase/firestore";
import { firestore } from "../../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const IdeasComponent: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");
  const [files, setFiles] = useState<FileItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setEditingIndex] = useState<number | null>(null);

  const getCurrentUserId = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? user.uid : null;
  };

  useEffect(() => {
    const fetchFiles = async () => {
      const userId = getCurrentUserId();
      if (userId) {
        const filesCollection = collection(firestore, "IdeasFiles");
        const filesSnapshot = await getDocs(query(filesCollection, where("userId", "==", userId)));
        const filesData = filesSnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }) as FileItem[];
        setFiles(filesData);
      }
    };

    const auth = getAuth();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = onAuthStateChanged(auth, () => {
      // Refresh files when the authentication state changes (user logs in or out)
      fetchFiles();
    });

    fetchFiles(); // Fetch files when the component mounts

    return () => {
      unsubscribe(); // Unsubscribe from the auth state changes when the component unmounts
    };
  }, []);

  const addFileToFirestore = async (file: FileItem): Promise<void> => {
    const filesCollection = collection(firestore, "IdeasFiles");
    await addDoc(filesCollection, { ...file, userId: getCurrentUserId() });
  };

  const updateFileInFirestore = async (file: FileItem): Promise<void> => {
    const fileDocRef = doc(firestore, "IdeasFiles", file.id!);

    const firestoreObject: { [key: string]: any } = {
      title: file.title,
      content: file.content,
      userId: getCurrentUserId(),
    };

    // Check if index is defined before including it in the object
    if (file.index !== undefined) {
      firestoreObject.index = file.index;
    }

    await updateDoc(fileDocRef, firestoreObject);
  };

  const handleSave = async (title: string, content: string, editingIndex: number | null) => {
    if (title.trim() !== "" && content.trim() !== "") {
      const newFile: FileItem = { title, content, userId: getCurrentUserId() };

      if (editingIndex !== null) {
        // Update the file in Firestore
        await updateFileInFirestore({ ...newFile, id: files[editingIndex].id });
      } else {
        // Add a new file to Firestore
        await addFileToFirestore(newFile);
      }

      // Refresh the files from Firestore
      const filesCollection = collection(firestore, "IdeasFiles");
      const filesSnapshot = await getDocs(query(filesCollection, where("userId", "==", getCurrentUserId())));
      const filesData = filesSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      }) as FileItem[];
      setFiles(filesData);

      setInputTitle("");
      setInputContent("");
      setEditingIndex(null);
    }
  };

  const handleDelete = async (index: number) => {
    // Delete the file from Firestore
    const fileDoc = doc(firestore, "IdeasFiles", files[index].id!);
    await deleteDoc(fileDoc);

    // Refresh the files from Firestore
    const filesCollection = collection(firestore, "IdeasFiles");
    const filesSnapshot = await getDocs(query(filesCollection, where("userId", "==", getCurrentUserId())));
    const filesData = filesSnapshot.docs.map((doc) => doc.data()) as FileItem[];
    setFiles(filesData);
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

export default IdeasComponent;


