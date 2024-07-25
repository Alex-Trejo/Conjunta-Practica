import React, { useEffect, useState } from 'react';
import { Box, Button, VStack, Text, Image, Heading, Center, Flex } from '@chakra-ui/react';
import { getTasks, deleteTask } from '../../utils/api';
import TaskCard from '../../components/TaskCard';
import { useRouter } from 'next/router';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  
  useEffect(() => {
    // Check if the page needs to be reloaded
    const shouldReload = localStorage.getItem('shouldReload');
    if (shouldReload === 'true') {
      localStorage.removeItem('shouldReload');
      window.location.reload();
    } else {
      async function fetchTasks() {
        try {
          const data = await getTasks();
          setTasks(data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
      fetchTasks();
    }
  }, []);
  
  
  // useEffect(() => {
  //   async function fetchTasks() {
  //     try {
  //       const data = await getTasks();
  //       setTasks(data);
  //     } catch (error) {
  //       console.error('Error fetching tasks:', error);
  //     }
  //   }
  //   fetchTasks();
  // }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Box 
      bgGradient="linear(to-br, blue.50, green.50)" // Cambio de degradado de fondo
      minH="100vh" // Asegura que el contenedor tenga al menos el alto de la vista
      p={4} // Padding alrededor del contenedor
    >
      <Flex direction="column" align="center" p={4}>
        <Heading as="h1" size="2xl" mb={8}>
          Task List
        </Heading>
        <Box 
          p={6}
          mb={8}
          borderRadius="md"
          boxShadow="lg" // Ajusta la sombra del contenedor
          border="1px" // Añade un borde al contenedor
          borderColor="gray.200" // Color del borde
          bg="white" // Color de fondo del contenedor
          width="full" // Asegura que el contenedor ocupe todo el ancho disponible
        >
          <VStack spacing={4}>
            {tasks.length > 0 ? (
              tasks.map(task => (
                <TaskCard key={task._id} task={task} onDelete={() => handleDelete(task._id)} />
              ))
            ) : (
              <VStack mb={10}>
                <Image src="https://static-00.iconduck.com/assets.00/9-404-error-illustration-1024x454-1e9ol1ls.png" alt="No tasks found" />
                <Heading as="h2" size="lg">No tasks found</Heading>
              </VStack>
            )}
          </VStack>
        </Box>
        <Button colorScheme="teal" onClick={() => router.push('/tasks/new')}>
          Add Task
        </Button>
      </Flex>
    </Box>
  );
}
