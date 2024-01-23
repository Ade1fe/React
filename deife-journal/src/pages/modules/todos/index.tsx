
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Spinner,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FaCheck, FaExclamation, } from 'react-icons/fa';
import { TbProgress } from "react-icons/tb";
import { MdOutlineUpcoming } from "react-icons/md";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../../firebase';
import { ErrorModal } from '../../../commom/components';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (todoId: string, newStatus: 'All' | 'complete' | 'doing' | 'important' | 'started') => void;
  onDelete: (todoId: string) => void;
}

interface Todo {
  id: string;
  title: string;
  status: 'All' | 'complete' | 'doing' | 'important' | 'started';
  userId: string;
  dueDate?: string;
}

const getCurrentUserId = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user ? user.uid : null;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => (
  <Flex key={todo.id} alignItems={['left', "center"]} justifyContent={['left', "space-between"]} 
  p={4} flexDirection={['column', 'column', 'row']} borderBottom="1px solid #ccc" gap={['10px', '2px']}>
    <Flex direction="column">
      <Text textDecoration={todo.status === 'complete' ? 'line-through' : 'none'} noOfLines={1}>{todo.title}</Text>
      {todo.dueDate && <Text fontSize="sm"><Text as='span'  fontWeight='700'>Due:</Text> {new Date(todo.dueDate).toLocaleString()}</Text>}
    </Flex>
    <Box className="">
    <Flex  justifyContent={['space-evenly', "space-between"]}>
      <Button onClick={() => onUpdate(todo.id, 'complete')} bg='#FEFFFE' shadow='base' size="sm" mr={2}>
        <FaCheck />
      </Button>
      <Button onClick={() => onUpdate(todo.id, 'doing')} bg='#FEFFFE' shadow='base' size="sm" mr={2}>
        <TbProgress />
      </Button>
      <Button onClick={() => onUpdate(todo.id, 'important')} bg='#FEFFFE' shadow='base' size="sm" mr={2}>
        <FaExclamation />
      </Button>
      <Button onClick={() => onUpdate(todo.id, 'started')} bg='#FEFFFE' shadow='base' size="sm" mr={2}>
        <MdOutlineUpcoming />
      </Button>
      <Button onClick={() => onDelete(todo.id)} colorScheme="red" size="sm">
        Delete
      </Button>
    </Flex>
    </Box>
  </Flex>
);

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
      // State for error modal
      const [errorModalOpen, setErrorModalOpen] = useState(false);
      const [errorModalContent, setErrorModalContent] = useState('');
    

  useEffect(() => {
    // Fetch todos on component mount
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const userId = getCurrentUserId();

    if (userId) {
      const todosCollection = collection(firestore, 'Todos');
      const todosSnapshot = await getDocs(query(todosCollection, where('userId', '==', userId)));
      const todosData: Todo[] = todosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Todo));
      setTodos(todosData);
      setLoading(false);
    }
  };
  


  const handleSaveTodo = async () => {
    setLoading(true);
    const userId = getCurrentUserId();
  
    if (userId && inputTitle.trim() !== '') {
      const todosCollection = collection(firestore, 'Todos');
  
      // Use the user-input due date or set a default to today
      const userDueDate = dueDate || new Date();
  
      if (userDueDate < new Date()) {
        const errorMessage = 'Invalid date or time selected (cannot be in the past)';
        console.error(errorMessage);

        // Open the error modal with the specific error message
        openErrorModal(errorMessage);
        setLoading(false);
        return;
      }
  
      const year = userDueDate.getFullYear();
      const month = String(userDueDate.getMonth() + 1).padStart(2, '0');
      const day = String(userDueDate.getDate()).padStart(2, '0');
      const hours = String(userDueDate.getHours()).padStart(2, '0');
      const minutes = String(userDueDate.getMinutes()).padStart(2, '0');
      const seconds = String(userDueDate.getSeconds()).padStart(2, '0');
  
      // const formattedDate = `${month}/${day}/${year}`;
  
      const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
  
      const todoData = {
        title: inputTitle,
        status: 'All',
        userId,
        dueDate: isoString,
      };
  
      const newTodoRef = await addDoc(todosCollection, todoData);
      const newTodo = { id: newTodoRef.id, ...todoData } as unknown as Todo;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
  
      setInputTitle('');
      setDueDate(null);
      setLoading(false);
  
      // Schedule a notification
      const timeDifference = userDueDate.getTime() - new Date().getTime();
      if (timeDifference > 0) {
        setTimeout(() => {
          alert(`Todo "${newTodo.title}" is due now!`);
        }, timeDifference);
      }
    }
  };
  
  
   // Function to open the error modal
   const openErrorModal = (errorMessages: string ) => {
    setErrorModalContent(errorMessages);
    setErrorModalOpen(true);
  };

  // Function to close the error modal
  const closeErrorModal = () => {
    setErrorModalOpen(false);
    setErrorModalContent('');
  };



  

  const handleUpdateTodo = async (todoId: string, newStatus: 'All' | 'complete' | 'doing' | 'important' | 'started') => {
    setLoading(true);
    const userId = getCurrentUserId();
  
    if (userId) {
      const todoDocRef = doc(firestore, 'Todos', todoId);
  
      try {
        await updateDoc(todoDocRef, { status: newStatus });
        fetchTodos(); // Fetch updated todos
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
        openErrorModal('Error updating todo: ' + error.message);
      }
  
      setLoading(false);
    }
  };
  
  const handleDeleteTodo = async (todoId: string) => {
    setLoading(true);
  
    try {
      await deleteDoc(doc(firestore, 'Todos', todoId));
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
      openErrorModal('Error deleting todo: ' + error.message);
    }
  
    setLoading(false);
  };
  

  return (
    <Box>
      {/* Loading Spinner */}
      {loading && <Spinner size="md" color="purple.500" />}

      {/* Add Todo Section */}
      <Box mb={[4, 8, 10]}>
        <Input
          variant="flushed"
          placeholder="Todo Title"
          value={inputTitle}
          shadow='sm'
          px={['10px']}
          focusBorderColor="purple.500" 
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <Flex mt={4} gap={['10px', '10px', '5px']}>
          <Input
            type="date"
            min="2024-01-17"
            color='black'
            shadow='base'
            focusBorderColor="purple.500" 
            value={dueDate ? dueDate.toISOString().slice(0, 10) : ''}
            onChange={(e) => setDueDate(new Date(`${e.target.value}T${dueDate?.toISOString().slice(11, 16) || '00:00'}`))}
          />
          <Input
            type="time"
            color='black'
            shadow='base'
            focusBorderColor="purple.500" 
            value={dueDate ? dueDate.toISOString().slice(11, 16) : ''}
            onChange={(e) => setDueDate(new Date(`${dueDate?.toISOString().slice(0, 10) || '2024-01-01'}T${e.target.value}`))}
          />
        </Flex>
        <Button shadow='base' mt={[3, 5, 6]} w={['100%', '40%', '30%', '20%']} color='black' bg="purple.100" _hover={{backgroundColor: 'purple.600' , color: 'white'}} onClick={handleSaveTodo}>
          Save Todo
        </Button>
      </Box>

      {/* Tab Panel for Todos */}
      <Tabs isLazy isFitted>
      <Box  className="custom-scrollbar" w='100%' 
      style={{ overflowX: "auto", display: "flex" ,scrollbarWidth: "thin", scrollbarColor: "#fff #fff"}}> 
        <TabList w='100%' border='none' >
          <Tab   _selected={{ color: "purple.400", fontWeight: 'bold' }}>All</Tab>
          <Tab _selected={{ color: "purple.400", fontWeight: 'bold'}}>Complete</Tab>
          <Tab _selected={{ color: "purple.400", fontWeight: 'bold'}}>In Progress</Tab>
          <Tab _selected={{ color: "purple.400", fontWeight: 'bold'}}>Important</Tab>
          <Tab _selected={{ color: "purple.400" , fontWeight: 'bold'}}> Upcoming</Tab>
        </TabList>
        </Box>
        <TabPanels>
          <TabPanel>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
            ))}
          </TabPanel>
          <TabPanel>
            {todos
              .filter((todo) => todo.status === 'complete')
              .map((todo) => (
                <Flex key={todo.id} mb={['10px']} alignItems={['left', "center"]} justifyContent={['left', "space-between"]} 
                p={4} flexDirection={['column', 'row', 'row']} borderBottom="1px solid #ddd" shadow='sm' gap={['10px', '2px']}>
                  <span>{todo.title}</span>
                  <Button colorScheme='purple' variant='ghost' onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                </Flex>
              ))}
          </TabPanel>
        
          <TabPanel>
            {todos
              .filter((todo) => todo.status === 'doing')
              .map((todo) => (
                <Flex key={todo.id}  mb={['10px']} alignItems={['left', "center"]} justifyContent={['left', "space-between"]} 
                p={4} flexDirection={['column', 'row', 'row']} borderBottom="1px solid #ddd" shadow='sm' gap={['10px', '2px']}>
                  <span>{todo.title}</span>
                  <Button colorScheme='purple' variant='ghost' onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                </Flex>
              ))}
          </TabPanel>
          <TabPanel>
            {todos
              .filter((todo) => todo.status === 'important')
              .map((todo) => (
                <Flex key={todo.id}  mb={['10px']} alignItems={['left', "center"]} justifyContent={['left', "space-between"]} 
                p={4} flexDirection={['column', 'row', 'row']} borderBottom="1px solid #ddd" shadow='sm' gap={['10px', '2px']}>
                  <span>{todo.title}</span>
                  <Button colorScheme='purple' variant='ghost' onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                </Flex>
              ))}
          </TabPanel>
          <TabPanel>
            {todos
              .filter((todo) => todo.status === 'started')
              .map((todo) => (
                <Flex key={todo.id} mb={['10px']} alignItems={['left', "center"]} justifyContent={['left', "space-between"]} 
                p={4} flexDirection={['column', 'row', 'row']} borderBottom="1px solid #ddd" shadow='sm' gap={['10px', '2px']}>
                  <span>{todo.title}</span>
                  <Button colorScheme='purple' variant='ghost' onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                </Flex>
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ErrorModal isOpen={errorModalOpen} onClose={closeErrorModal} errorMessage={errorModalContent} />
    
    </Box>
  );
};

export default Todos;














