// src/pages/tasks/index.js
import React, { useEffect, useState } from 'react';
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { getTasks, deleteTask } from '../../utils/api';
import TaskCard from '../../components/TaskCard';
import { useRouter } from 'next/router';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  return (
    <Box p={4}>
      <VStack spacing={4}>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard key={task._id} task={task} onDelete={() => handleDelete(task._id)} />
          ))
        ) : (
          <Text>No tasks found</Text>
        )}
        <Button colorScheme="teal" onClick={() => router.push('/tasks/new')}>
          Add Task
        </Button>
      </VStack>
    </Box>
  );
}
